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
  console.log("first",data?.user?.user_rewards)



  return (
    <div>
      <Container >

<Row>
{data?.user?.user_rewards.map((item)=>{
  return(
    <Col xs='12' md='4' >
    <Card style={{backgroundColor: 'rgb(191 191 191 / 6%)',height: '290px'}} >
          <CardContent>
            <div className="icon-sequence-bg">
              <img src="https://assets-global.website-files.com/60080cdf80021f5e4cc61c9b/61533720e9211f738a3d8912_Automate.svg"  className="icon-sequence" />
              </div>
              <Typography   variant="body2">
              <div key={item?.Description}>
  {item.type_rewards.map(itemRewards => {


const sum = data



    item.type_rewards.reduce( (sum, current) => sum + current, 0 );


console.log(sum)
{/*
 for(var i = 0, len = data.length; i < len; i++) {
      somme += itemRewards?.MaxPointNumber[i];
        //Iterate over your first array and then grab the second element add the values up
  }
  console.log("q",somme)

  */}
   
   

   
   

  return(
    <>
    <h6  key={itemRewards?.Title} className="heading-sequence" >{itemRewards?.Title}</h6>
    <p>{item?.Description}</p>
    <h6 className="heading-sequence" >{itemRewards?.MaxPointNumber}</h6>
    </>
  
    )
  })}
</div>

 </Typography>
</CardContent>
    </Card>
    </Col>
      );
    })}
    </Row>
</Container>
  </div>
  )
}

export default RewardsUser

