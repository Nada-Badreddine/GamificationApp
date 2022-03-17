import * as React from 'react';
import Card from '@mui/material/Card';
import { useParams } from "react-router";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useQuery} from '@apollo/client'
import {LOAD_FAVORIS_BY_USER_ID} from './../services/favorisServices/QueryFavoris'

function FavorisCards(props) {

    const userConecte = localStorage.getItem("USER_ID");
    const {error,loading,data} = useQuery(LOAD_FAVORIS_BY_USER_ID, { variables: { id: userConecte }})
    const ApiUrl = 'http://localhost:1337'
    return (
        <>
   {data?.user?.favorises[0].gifts?.map((item) => {
       return(
        <Card >
        <div style={{ display: 'flex' }}>
       
        <div  style={{  width: '176px' }} >
                   <img src={ ApiUrl +item?.Img[0]?.formats?.thumbnail?.url}  alt="Logo" />

                   </div>
     
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
       {item?.Name}
     </Typography>
   
     <Typography variant="body2" color="text.secondary">
     {item?.Description}
     <br/>
     {item?.PointNumber} Point
     </Typography>
   </CardContent>
   </div>
   <CardActions>
  
   </CardActions>
 </Card>
       )
   })}
         
       
           
       </>
      
      );
    }
    export default FavorisCards;