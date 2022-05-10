import React from 'react'
import AddOrRemoveFromFavoriteList from '../AddOrRemoveFromFavoriteList';
import AddOrRemoveFromCart from '../AddOrRemoveFromCart';
import classes from './Gift.module.css'
function Gift({item,refetch,listFav}) {
const ApiUrl = 'http://localhost:1337'
  return (
        <div>                  
            <div className={classes.giftContentImgContainer}>
                <img className={classes.giftContentImg} alt="gift thumbnail" src={ApiUrl + item?.Img[0]?.formats?.thumbnail?.url} />
            </div>
            <div className={classes.giftContentInfo}>
                <div className={classes.giftContentInfoTitle}>
                    {item?.Name}
                </div>
                <div className={classes.giftContentInfoextraInformation}>
                    <div className={classes.giftContentInfoSousInformation} >
                        {item?.Description}
                    </div>
                    <div className={classes.giftContentInfoSousInformation} >
                        {item?.PointNumber} Points
                    </div>
                    <div className={classes.giftContentButtnCart}>
                        <AddOrRemoveFromCart item={item} />
                        <AddOrRemoveFromFavoriteList gift={item} refetch={refetch} listFav={listFav} />
                    </div>
                </div>
            </div>
        </div>
  )
}
export default Gift