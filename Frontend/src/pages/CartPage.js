import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Cart from '../components/Cart';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CartPage = () => {
  return (
    <Box backgroundColor='#efece9'>
      <Header />
      <Box pb={2}>
        <Box pl={2} mb={1}>
          <Typography variant="h5" color="text.primary">
          Mon panier
          </Typography>
        </Box>
        <Cart />
      </Box>
      <Footer />
    </Box>
  );
};

export default CartPage;
