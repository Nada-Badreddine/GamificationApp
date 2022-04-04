import React, { memo } from 'react';
import { useParams } from "react-router";
import Box from '@mui/material/Box';
import { useQuery } from '@apollo/client'
import { LOAD_GIFTS_BY_CATEGORY } from './../services/giftServices/QueryAllGifts'
import { LOAD_FAVORIS_BY_USER_ID } from './../services/favorisServices/QueryFavoris'
import CardItem from '../components/Card';

function GiftsCards(props) {
  const params = useParams();
  const current = params.catgId;
  const userConecte = localStorage.getItem("USER_ID");
  const { loading, data } = useQuery(LOAD_GIFTS_BY_CATEGORY, { variables: { id: current } });
  const { loading: loadingFavoris, data: dataFavoris, refetch } = useQuery(LOAD_FAVORIS_BY_USER_ID, { variables: { id: userConecte } })

  const formatListFavoris = (data) => {
    let favoriteList = []
    data?.forEach(favoris => { favoriteList.push(favoris.gifts[0]) })
    return favoriteList
  }
  const listFav = formatListFavoris(dataFavoris?.user?.favorises)

  return (
    <Box display="flex" gap={1} flexWrap="wrap" px={2}>
      {data?.category?.gifts?.map((item) => {
        return (
          <CardItem item={item} listFav={listFav} refetch={refetch} />
          // <Card key={item.id}>
          //   <div style={{ display: 'flex' }}>
          //     <div style={{ width: '176px' }} >
          //       <img src={ApiUrl + item?.Img[0]?.formats?.thumbnail?.url} alt="Logo" />
          //     </div>
          //     <CardContent>
          //       <Typography gutterBottom variant="h5" component="div">
          //         {item?.Name}
          //       </Typography>
          //       <Typography variant="body2" color="text.secondary">
          //         {item?.Description}
          //         <br />
          //         {item?.PointNumber} Point
          //       </Typography>
          //     </CardContent>
          //   </div>
          //   <CardActions disableSpacing >
          //     {ExistingFavorite ?
          //       <IconButton aria-label="add to favorites"
          //         onClick={
          //           () => {
          //             deleteFavoris(
          //               {
          //                 variables: { where: { "id": item?.id } },

          //               }
          //             )
          //             refetch()
          //           }
          //         }
          //       >
          //         <FavoriteIcon sx={{ color: red[500] }} />
          //       </IconButton>
          //       :
          //       <IconButton aria-label="add to favorites" onClick={() => AddToFavoris(item)} >
          //         <FavoriteIcon color="disabled" />
          //       </IconButton>
          //     }
          //     <AddOrRemoveFromCart item={item} />
          //   </CardActions>
          // </Card>
        )
      })}
    </Box>
  );
}

export default memo(GiftsCards);