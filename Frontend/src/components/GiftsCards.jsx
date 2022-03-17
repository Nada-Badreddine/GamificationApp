import React, { useContext,useState } from 'react';
import Card from '@mui/material/Card';
import { useParams } from "react-router";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useMutation, useQuery } from '@apollo/client'
import {LOAD_GIFTS_BY_CATEGORY} from './../services/giftServices/QueryAllGifts'
import {CREATE_FAVORIS_MUTATION} from './../services/favorisServices/MutationFavoris'
import {DELETE_FAVORIS_MUTATION} from './../services/favorisServices/MutationFavoris'
import {LOAD_FAVORIS_BY_USER_ID} from './../services/favorisServices/QueryFavoris'
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import UserContext from '../context/userContext';

function GiftsCards(props) {
    const params = useParams();
    const current = params.catgId;
    const userConecte = localStorage.getItem("USER_ID");
    const { loading, data } =  useQuery(LOAD_GIFTS_BY_CATEGORY, { variables: { id :current }});
    const {loading: loadingFavoris,data: dataFavoris,refetch} = useQuery(LOAD_FAVORIS_BY_USER_ID, { variables: { id: userConecte }})
    const [deleteFavoris] = useMutation(DELETE_FAVORIS_MUTATION)
    const [createFavoris, { error }] = useMutation(CREATE_FAVORIS_MUTATION)
    
   
    
    const ApiUrl = 'http://localhost:1337'
const formatListFavoris=(data) => {
let favoriteList=[]
data?.forEach(favoris =>{favoriteList.push(favoris.gifts[0])})
return favoriteList

}
    const AddToFavoris = (item) => {
      createFavoris(
        {
          variables: {
            input: { data:{gifts: item.id,  users_permissions_users: userConecte} },

  
           
          }

        } 
      ) 
      if (error) {
        console.log(error)
      }
      refetch()
    }
   
 
    const { addToCart} = useContext(UserContext);

    
    return (
        <>
      {data?.category?.gifts?.map((item) => {
        
      const listFav=formatListFavoris(dataFavoris?.user?.favorises)
         const ExistingFavorite = listFav?.find((elem) => {
         
          return elem?.id === item?.id;
        }
        );
           return(
           <Card key={item.id}>
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
          <CardActions disableSpacing >
          {ExistingFavorite ?
                          <IconButton aria-label="add to favorites"
                            onClick={

                              () =>{

                              
                              deleteFavoris(
                                  {
                                    variables: { where: {"id": item?.id} },
                                   
                                  }
                                )
                                refetch()
                              }
                            }
                            
                          >
                            <FavoriteIcon sx={{ color: red[500] }} />
                          </IconButton>
                          :
                          <IconButton aria-label="add to favorites" onClick={() => AddToFavoris(item)} >
                            <FavoriteIcon color="disabled" />
                          </IconButton>
                        }
                    
                       <button onClick={() => {addToCart(item)}}>Add to cart</button>
                    
                      </CardActions>
        </Card>
            )
            })}
       </>
      );
    }
    export default GiftsCards;