import React from 'react';
import classes from './RewardsType.module.css'
import { useQuery } from '@apollo/client';
import { LOAD_TYPE_REWARDS } from './../../services/TypeRewardsServices/getAllType';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress'
import RewardType from '../RewardType/RewardType';
const RewardsType = (props) => {
  const { loading, data } = useQuery(LOAD_TYPE_REWARDS);
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }
  console.log("data",data)
  return (
    <>
  
    <div style={{padding: '7%'}}>
    <div className={classes.rewardsgroup}> 
    {data?.typeRewards?.map((item) => {
          return (
              <>            
<RewardType  item={item} />

              </>
          )})}


</div>

   </div>
   

    </>
  );
};

export default RewardsType;   