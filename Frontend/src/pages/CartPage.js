import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Cart from '../components/Cart';
import NavSection from '../components/NavSection/NavSection';
import Footeer from '../components/Footeer/Footeer';

const CartPage = () => {
  return (
    <Box backgroundColor="#efece9">
      <NavSection />
      <Box pb={2}>
        <Box pl={2} mb={1}>
          <Typography variant="h5" color="text.primary">
            Mon panier
          </Typography>
        </Box>
        <Cart />
      </Box>
      <Footeer />
    </Box>
  );
};

export default CartPage;
