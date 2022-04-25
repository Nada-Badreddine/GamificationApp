import React, { useContext, memo } from 'react';
import UserContext from '../context/userContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from './GiftsPage/GiftPage.module.css'

function AddOrRemoveFromCart({ item }) {
  const { addToCart, cart, addProductQuantity, removeProductQuantity } =
    useContext(UserContext);
  const productInCart = cart.find((cartItem) => item.id === cartItem.id);
  const isProductExistInCart = !!productInCart;
  return (
    <Box >
      {isProductExistInCart && (
        <Box display="flex" alignItems="center">
                 <div className={classes.giftContentCartTagContainer}  onClick={() => {
                      addProductQuantity(item);
                    }} >
                     <div className={classes.giftContentCartTag} >+</div>
                   </div>
          {/* <Button
            style={{
              background: "#333",
              color: " #fff",
              fontFamily: "function-bold,Arial,sans-serif",
              textDecoration: 'none'
            }}
            variant="outlined"
            size="small"
            onClick={() => {
              addProductQuantity(item);
            }}>+
          </Button> */}
          <Typography id="modal-modal-title" variant="h6" component="h2" pr={1.2}>
            {productInCart.quantity}
          </Typography>
          <div className={classes.giftContentCartTagContainer}  onClick={() => {
                      removeProductQuantity(item);
                    }} >
                     <div className={classes.giftContentCartTag} >-</div>
                   </div>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2" px={1}>
            {productInCart.quantity}
          </Typography>
          <Button
            size="small"
            color="error"
            variant="outlined"
            onClick={() => {
              removeProductQuantity(item);
            }}>-
          </Button> */}
        </Box>
      )}
      {!isProductExistInCart && (
                     <div className={classes.giftContentCartTagContainer}  onClick={() => {
                      addToCart(item);
                    }} >
                     <div className={classes.giftContentCartTag} > Add to cart</div>
                   </div>
        // <Button
        //   style={{
        //     background: "#333",
        //     color: " #fff",
        //     fontFamily: "function-bold,Arial,sans-serif",
        //     textDecoration: 'none'
        //   }}
        //   color="info"
        //   variant="contained"
        //   onClick={() => {
        //     addToCart(item);
        //   }}>Add to cart
        // </Button>
      )}
    </Box>
  );
}
export default memo(AddOrRemoveFromCart);
