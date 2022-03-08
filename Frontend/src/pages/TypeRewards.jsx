import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {getAllType} from './../services/TypeRewardsServices/getAllType'
import { Col, Row, Container,Button   } from 'reactstrap';



import HomePage from './HomePage';

import './../styles/TypeRewards.css'
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const TypeRewards = () => {

  const [rewardsTypes, setRewardsTypes] = useState([])
 
  useEffect(async () => {
    const result = await getAllType ();
    setRewardsTypes (result.data);
  }, []);


console.log("aaaaa",rewardsTypes)


  return (
    <div>
      <h3>Des récompenses pour chaque occasion</h3>
<Container >

<Row>
 
{rewardsTypes.map((item) => {
                  return (
                    <Col xs='12' md='4' >
<Card style={{backgroundColor: 'rgb(191 191 191 / 6%)',height: '290px'}} >
      <CardContent>
        <div className="icon-sequence-bg">
          <img src="https://assets-global.website-files.com/60080cdf80021f5e4cc61c9b/61533720e9211f738a3d8912_Automate.svg"   />
          
          </div>
        <Typography   variant="body2">
        <h6 className="heading-sequence" >{item?.Title}</h6>
          <br />
          <p>{item?.Description}</p>
         
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

export default TypeRewards