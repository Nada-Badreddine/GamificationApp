import React from 'react';
import NavSection from '../components/NavSection/NavSection';
import Footeer from '../components/Footeer//Footeer';
import Box from '@mui/material/Box';
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
