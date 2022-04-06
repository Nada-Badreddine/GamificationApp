import * as React from 'react';
import Box from '@mui/material/Box';
import { useQuery } from '@apollo/client'
import CircularProgress from '@mui/material/CircularProgress';
import { LOAD_FAVORIS_BY_USER_ID } from './../services/favorisServices/QueryFavoris'
import formatListFavoris from '../utils/formatListFavoris';
import CardItem from '../components/Card';

function FavorisCards() {
  const userConecte = localStorage.getItem("USER_ID");
  const { loading, data, refetch } = useQuery(LOAD_FAVORIS_BY_USER_ID, { variables: { id: userConecte } })
  const listFav = formatListFavoris(data?.user?.favorises ?? [])

  
  if (loading) {
    return ( <Box sx={{ display: 'flex', justifyContent:"center" }}>
      <CircularProgress />
    </Box>)
    }
  return (
    <Box display="flex" gap={1} flexWrap="wrap" mt={2}>
    {listFav?.map((item) => {
        return (
          <CardItem item={item} listFav={listFav} refetch={refetch} />
          // <Card >
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
          //   <CardActions>
          //   </CardActions>
          // </Card>
        )
      })}
    </Box>
  );
}
export default FavorisCards;