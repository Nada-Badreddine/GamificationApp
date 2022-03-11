import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useQuery} from '@apollo/client'
import {LOAD_CATEGORIES} from './../services/categoriesServices/QueryAllCategories'


function CategoriesCards(props) {
    const { loading, data } = useQuery(LOAD_CATEGORIES)
 
    const ApiUrl = 'http://localhost:1337' 
  return (
    <>
     {data?.categories?.map((item) => {
       return(
          
       <Card >
           <div style={{ display: 'flex' }}>
      <CardMedia
        component="img"
        height="140"
        
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
  
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item?.Name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      </div>
      <CardActions>
        <Button size="small">See products</Button>
        
      </CardActions>
    </Card>

  
        )
        })}
        
       
    
   </>
  );
}


export default CategoriesCards;