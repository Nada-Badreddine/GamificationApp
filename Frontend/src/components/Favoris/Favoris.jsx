import * as React from 'react';
import Box from '@mui/material/Box';
import { useQuery } from '@apollo/client'
import CircularProgress from '@mui/material/CircularProgress';
import { LOAD_FAVORIS_BY_USER_ID } from '../../services/favorisServices/QueryFavoris'
import formatListFavoris from '../../utils/formatListFavoris';
import CardItem from './../Card';

function Favoris() {
  const userConecte = localStorage.getItem("USER_ID");
  const { loading, data, refetch } = useQuery(LOAD_FAVORIS_BY_USER_ID, { variables: { id: userConecte } })
  const listFav = formatListFavoris(data?.user?.favorises ?? [])
  //const firstElement = listFav.shift();
  console.log("ss",listFav)

  
  if (loading) {
    return ( <Box sx={{ display: 'flex', justifyContent:"center" }}>
      <CircularProgress />
    </Box>)
    }
  return (
    <div style={{display:'flex' }}>
    {listFav?.map((item) => {
        return (
          <CardItem item={item} listFav={listFav} refetch={refetch} />
        
        )
      })}
    </div>
  );
}
export default Favoris;