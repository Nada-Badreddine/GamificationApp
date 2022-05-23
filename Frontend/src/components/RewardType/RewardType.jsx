import React from 'react'
import classes from './RewardType.module.css'
function RewardType({item}) {
  console.log(item)
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
    <div style={{overflow: 'hidden',
    height: '58px'}}>{item?.Description}</div> 
    
    </div>
    </div>
    <div  className={classes.PointDetails}  >
  <p style={{fontSize: '10px',marginBottom:'0px !important',fontWeight: 'bold'}}>{item?.PointNumber} Points</p>
  </div>
 
    
    </div>
  )
}

export default RewardType