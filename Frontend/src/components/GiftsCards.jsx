import * as React from 'react';
import Card from '@mui/material/Card';
import { useParams } from "react-router";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useQuery} from '@apollo/client'
import {LOAD_GIFTS_BY_CATEGORY} from './../services/giftServices/QueryAllGifts'
import { useNavigate } from 'react-router-dom';

function GiftsCards(props) {
    const params = useParams();
    const current = params.catgId;
    const {error,loading, data } =  useQuery(LOAD_GIFTS_BY_CATEGORY, { variables: { id :current }});
  
    const navigate = useNavigate();
    const ApiUrl = 'http://localhost:1337'

    return (
        <>
      {data?.category?.gifts.map((item) => {
          console.log("aaaa",item)
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
    export default GiftsCards;