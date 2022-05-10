import React from 'react';
import NavSection from '../components/NavSection/NavSection';
import Footeer from '../components/Footeer/Footeer';
import Box from '@mui/material/Box';
import Gifts from '../components/Gifts/Gifts';

const GiftsByCategory = (props) => {
  return (
    <Box backgroundColor="#efece9">
      <NavSection />
      <Gifts/>
      <Footeer />
    </Box>
  );
};

export default GiftsByCategory;
