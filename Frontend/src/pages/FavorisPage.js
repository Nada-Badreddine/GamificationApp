import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavorisCards from './../components/FavorisCards';
import NavSection from '../components/NavSection/NavSection';
import Footeer from '../components/Footeer/Footeer';

const FavorisPage = (props) => {
  return (
    <Box backgroundColor="#efece9">
      <NavSection />
      <Box px={5} pb={2}>
        <Typography variant="h5" color="text.primary">
          MA LISTE DES FAVORITES
        </Typography>
        <FavorisCards />
      </Box>
      <Footeer />
    </Box>
  );
};

export default FavorisPage;
