import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { experimentalStyled as styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import axios from './../utils/api'
import {getAllGifts} from './../services/giftServices/getAllGifts'


const GiftList = (props) => {

    const [giftList, setGiftList] = useState([])
    useEffect(async () => {
    const result = await getAllGifts ();
       setGiftList (result.data);
  }, []);
   console.log("ddddddddddddddata",giftList)


   


   


     const bull = (
    <Box
      component="span"
      sx={{
        display: 'inline-block', mx: '2px', transform: 'scale(0.8)', '& > :not(style)': {
          m: 2,
        },
      }}
    >
      •
    </Box>
  );

  return (
     <>
      <Container xs="8" style={{ display: "flex" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <Card sx={{ minWidth: 275 }}>
                {giftList.map((item) => {
                  return (
                    <CardContent>
                      <CardMedia
                        component="img"
                        style={{ width: "120px", height: "120px" }}
                        image={item?.Img.hash}
                        alt="img not found" />
                      <Typography variant="body2">
                        {item?.Name}
                        <br />
                        {item?.PointNumber} Point
                      </Typography>
                      <CardActions disableSpacing >
                        <button>Add to cart </button>
                      </CardActions>
                    </CardContent>
                  )
                })}
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default GiftList