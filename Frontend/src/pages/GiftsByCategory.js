import React from 'react';
import GiftsCards from './../components/GiftsCards';
import NavSection from '../components/NavSection/NavSection';
import Footeer from '../components/Footeer//Footeer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GiftPage from './../components/GiftsPage/GiftPage';

const GiftsByCategory = (props) => {
  return (
    <Box backgroundColor="#efece9">
      <NavSection />
      <GiftPage/>
      <Footeer />
    </Box>
  );
};

export default GiftsByCategory;
