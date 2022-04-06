import React from 'react';
import Box from '@mui/material/Box';
import Cart from '../components/Cart';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CartPage = () => {
  return (
    <Box backgroundColor='#faf8f6'>
      <Header />
      <Cart />
      <Footer />
    </Box>
  );
};

export default CartPage;
