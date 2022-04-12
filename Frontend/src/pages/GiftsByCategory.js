import React from 'react';
import GiftsCards from './../components/GiftsCards';
import NavSection from '../components/NavSection/NavSection';
import Footer from '../components/Footer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const GiftsByCategory = (props) => {
  return (
    <Box backgroundColor="#efece9">
      <NavSection />
      <GiftsCards />
      <Footer />
    </Box>
  );
};

export default GiftsByCategory;
