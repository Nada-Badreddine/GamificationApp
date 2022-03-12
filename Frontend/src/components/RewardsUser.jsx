import {useQuery} from '@apollo/client'
import {LOAD_REWARDS_BY_USER} from './../services/RewardsUserServices/QueryRewardsbyUser'

import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Col, Row, Container,Button   } from 'reactstrap';
import './../styles/TypeRewards.css'



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const RewardsUser = () => {

  const userConecte = localStorage.getItem("USER_ID");
  const {error,loading,data} = useQuery(LOAD_REWARDS_BY_USER, { variables: { id: userConecte }})
  console.log("first",data?.user?.user_rewards[0]?.type_rewards[0]?.Title)



  return (
    <div>
    <h3>les achivements</h3>
<Container >

<Row>
{data?.user?.user_rewards[0]?.type_rewards?.map((item)=>{
     return (
              
                  <Col xs='12' md='4' >
<Card style={{backgroundColor: 'rgb(191 191 191 / 6%)',height: '290px'}} >

       
    <CardContent>
      <div className="icon-sequence-bg">
        <img src="https://assets-global.website-files.com/60080cdf80021f5e4cc61c9b/61533720e9211f738a3d8912_Automate.svg"  className="icon-sequence" />
        
        </div>
      <Typography   variant="body2">
     

      <h6 className="heading-sequence" >{item?.Title}</h6>

    
        <br />
      </Typography>
      <Typography   variant="body2">
     

      {data?.user?.user_rewards?.map((item)=>{
     return (
         <p>{item?.Description}</p>
     )})}
   
       <br />
     </Typography>
     <Typography   variant="body2">
     

     <h6 className="heading-sequence" >{item?.MaxPointNumber} Points</h6>
     
   
       <br />
     </Typography>
    </CardContent>
    
  </Card>
  </Col>
)})}

</Row>

</Container>

  </div>

  
  )
}

export default RewardsUser

