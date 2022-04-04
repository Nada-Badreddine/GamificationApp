
        import * as React from 'react';
        import Card from '@mui/material/Card';
        import CardActions from '@mui/material/CardActions';
        import CardContent from '@mui/material/CardContent';
        import Button from '@mui/material/Button';
        import Typography from '@mui/material/Typography';
        import {useQuery} from '@apollo/client'
        import {LOAD_CATEGORIES} from './../services/categoriesServices/QueryAllCategories'
        import { useNavigate } from 'react-router-dom';

        function CategoriesCards(props) {
            const { loading, data } = useQuery(LOAD_CATEGORIES)
            const navigate = useNavigate();
            const ApiUrl = 'http://localhost:1337'
          return (
            <>
            {data?.categories?.map((item) => {
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
                <h1> {item?.data?.Img[0]?.name}   </h1>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              </div>
              <CardActions>
                <Button size="small" onClick={()=> navigate('/giftsbyCategory/' + item?.id)} >See products</Button>
              </CardActions>
            </Card>
                )
                })}
           </>
          );
        }
        export default CategoriesCards;