import React from 'react'
import classes from './RewardType.module.css'
import Badge from '@mui/material/Badge';
function RewardType({item}) {
  return (
    <div className={classes.rewardDetailsCard}>

    <div className={classes.ImgCard}>
    <span className={classes.ImgCardSpan}>
    <img src="assets/images/tresor.png"/>
    </span>
    </div>
    <div className={classes.ImgCardDetails}>
        
    <div  className={classes.ImgCardDetailsName}>
      <div style={{display:"flex"}}>
    
    <span className={classes.ImgCardDetailsTitle}>{item?.Title}</span>
    
      </div>
   
    </div>
    <div className={classes.CardDetailsqSousDetails} >
    <div>{item?.Description}</div> 
    
    </div>
    </div>
  
 
    
    </div>
  )
}

export default RewardType