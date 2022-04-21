import React, { memo, useState } from 'react';
import { useParams } from "react-router";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { useQuery } from '@apollo/client'
import { LOAD_GIFTS_BY_CATEGORY } from './../services/giftServices/QueryAllGifts'
import { LOAD_FAVORIS_BY_USER_ID } from './../services/favorisServices/QueryFavoris'
import CardItem from '../components/Card';
import SearchBar from '../components/SearchBar';
import Grid from '@mui/material/Grid';
import Filters from '../components/Filters';
import formatListFavoris from '../utils/formatListFavoris';

function GiftsCards() {
  const params = useParams();
  const current = params.catgId;
  const [searchQuery, setSearch] = useState('');
  const [pointFilter, setPointFilter] = React.useState('');

  const handleChange = (filterName) => {
    setPointFilter((prevFilter) => prevFilter === filterName ? '' : filterName);
  };
  const userConecte = localStorage.getItem("USER_ID");
  const { loading, data } = useQuery(LOAD_GIFTS_BY_CATEGORY, { variables: { id: current } });
  const { loading: loadingFavoris, data: dataFavoris, refetch } = useQuery(LOAD_FAVORIS_BY_USER_ID, { variables: { id: userConecte } })

  const handleChangeSearch = (value) => {
    setSearch(value);
  };

  const checkFilter = (point) => {
    if (pointFilter === "lessThan100") return point < 100
    if (pointFilter === "between100And400") return point >= 100 && point <= 400
    return point > 400
  }
  const listFav = formatListFavoris(dataFavoris?.user?.favorises ?? [])
  const filtredItems =
    data?.category?.gifts?.filter((item) => {
      if (pointFilter) {
        return item?.Name.toLowerCase().includes(searchQuery.toLowerCase()) && checkFilter(item?.PointNumber)
      }
      return item?.Name.toLowerCase().includes(searchQuery.toLowerCase());
    }) ?? [];

  if (loadingFavoris || loading) {
    return (<Box sx={{ display: 'flex', justifyContent: "center" }}>
      <CircularProgress />
    </Box>)
  }

  return (
    <Box mt={2} mb={2}>
      <Box pl={2} mb={1}>
        <Typography variant="h5" color="text.primary">
          {data?.category?.Name}
        </Typography>
      </Box>
      <Grid container >
        <Grid item xs={2}>
          <Filters pointFilter={pointFilter} handleChange={handleChange} />
        </Grid>
        <Grid item xs={10}>
          <Box display="flex" justifyContent="center" mb={2}>
            <SearchBar
              iconColor="disabled"
              onChange={(e) => handleChangeSearch(e.target.value)}
              value={searchQuery}
            />
          </Box>
          <Box display="flex" gap={1} flexWrap="wrap" px={2}>
            {filtredItems?.map((item) => {
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
        </Grid>
      </Grid>
    </Box>
  );
}

export default memo(GiftsCards);