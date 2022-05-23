import * as React from 'react';
import AddOrRemoveFromCart from '../AddOrRemoveFromCart';
import AddOrRemoveFromFavoriteList from '../AddOrRemoveFromFavoriteList';
import classes from './Card.module.css'
export default function RecipeReviewCard({ item, refetch, listFav, width }) {
    console.log('bbbb',listFav?.Name)
    const ApiUrl = 'http://localhost:1337'
    return (
       
        <div className={classes.giftContentCards}>  
     
        <div style={{    padding: '0 10px 20px'}}>

        <div style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',backgroundColor: 'white',    width: '80%'
}}> 
{/*
<img className={classes.giftContentImg} alt="gift thumbnail" src={ApiUrl + item?.Img[0]?.formats?.thumbnail?.url} />
*/}    
        
        <div className={classes.giftContentInfo}>
                <div className={classes.giftContentInfoTitle}>
                    {item?.Name}
                </div>
                <div className={classes.giftContentInfoextraInformation}>
                    <div className={classes.giftContentInfoSousInformation} >
                        {item?.Description}
                    </div>
                    <div style={{    textAlign: 'center',
    fontWeight: 'bold' }} >
                        {item?.PointNumber} Points
                    </div>
                    <div className={classes.giftContentButtnCart}>
                   
                        <AddOrRemoveFromCart item={item} />
                        <AddOrRemoveFromFavoriteList gift={item} refetch={refetch} listFav={listFav} />
                    </div>
                </div>
            </div>
        </div>
        


   
</div>
      
      </div>
    );
}