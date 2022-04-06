import React from 'react';
import GiftsCards from './../components/GiftsCards';
import Header from './../components/Header';
import Footer from '../components/Footer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const GiftsByCategory = (props) => {
  return (
    <Box backgroundColor='#efece9'>
      <Header />
      <GiftsCards />
      <Footer />
    </Box>
  )
}

export default GiftsByCategory