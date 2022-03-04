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
import {getAllCategories} from './../services/categoriesServices/getAllCategories'


const GiftList = (props) => {

    const [categoriesList, setCategoriesList] = useState([])
    useEffect(async () => {
    const result = await getAllCategories ();
       setCategoriesList (result.data);
  }, []);
   console.log("ddddddddddddddata",categoriesList)



   


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
                {categoriesList.map((item) => {
                  return (
                    <CardContent>
                      <Typography variant="body2">
                        {item?.Name}
                        <br />
                      </Typography>
                      <CardActions disableSpacing >
                        <button>See Gifts </button>
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