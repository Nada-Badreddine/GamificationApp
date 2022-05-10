import React, { useContext, memo } from 'react';
import UserContext from '../context/userContext';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import classes from './GiftsPage/GiftPage.module.css'

function AddOrRemoveFromCart({ item }) {
  const { addToCart, cart, addProductQuantity, removeProductQuantity, availablePoints, setAvailablePoints } =
    useContext(UserContext);
  const productInCart = cart.find((cartItem) => item.id === cartItem.id);
  const isProductExistInCart = !!productInCart;
  const isDisableAddToCard = (item?.PointNumber ?? 0) > availablePoints 

  return (
    <Box >
      {isProductExistInCart && (
        <Box display="flex" alignItems="center">
          <button disabled={isDisableAddToCard} type="button" className={classes.giftContentCartTagContainer} onClick={() => {
            addProductQuantity(item);
            setAvailablePoints((prevAvailablePoints) => prevAvailablePoints - item?.PointNumber ?? 0)
            localStorage.setItem('AVAILABLE_POINTS', availablePoints - item?.PointNumber ?? 0)

          }} >
            <div className={classes.giftContentCartTag} >+</div>
          </button>
          <Typography id="modal-modal-title" variant="h6" component="h2" pr={1.2}>
            {productInCart.quantity}
          </Typography>
          <button className={classes.giftContentCartTagContainer} onClick={() => {
            removeProductQuantity(item);
            setAvailablePoints((prevAvailablePoints) => prevAvailablePoints + item?.PointNumber ?? 0)
            localStorage.setItem('AVAILABLE_POINTS', availablePoints + item?.PointNumber ?? 0)

          }} >
            <div className={classes.giftContentCartTag} >-</div>
          </button>
        </Box>
      )}
      {!isProductExistInCart && (
        <button disabled={isDisableAddToCard} className={classes.giftContentCartTagContainer} onClick={() => {
          addToCart(item);
          setAvailablePoints((prevAvailablePoints) => prevAvailablePoints - item?.PointNumber ?? 0)
          localStorage.setItem('AVAILABLE_POINTS', availablePoints - item?.PointNumber ?? 0)
        }} >
          <div className={classes.giftContentCartTag} > Add to cart</div>
        </button>
      
      )}
    </Box>
  );
}
export default memo(AddOrRemoveFromCart);
