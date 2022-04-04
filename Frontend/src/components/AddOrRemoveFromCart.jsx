import React, { useContext, memo } from 'react';
import UserContext from '../context/userContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function AddOrRemoveFromCart({ item }) {
  const { addToCart, cart, addProductQuantity, removeProductQuantity } =
    useContext(UserContext);
  const productInCart = cart.find((cartItem) => item.id === cartItem.id);
  const isProductExistInCart = !!productInCart;
  return (
    <Box >
      {isProductExistInCart && (
        <div className="d-flex">
          <Button
            color="success"
            variant="contained"
            onClick={() => {
              addProductQuantity(item);
            }}>+
          </Button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {productInCart.quantity}
          </Typography>
          <Button
            color="error"
            variant="contained"
            onClick={() => {
              removeProductQuantity(item);
            }}>-
          </Button>
        </div>
      )}
      {!isProductExistInCart && (
        <Button
          color="success"
          variant="contained"
          onClick={() => {
            addToCart(item);
          }}>Add to cart
        </Button>
      )}
    </Box>
  );
}
export default memo(AddOrRemoveFromCart);
