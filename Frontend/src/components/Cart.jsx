import React, { useContext,useState } from 'react';
import UserContext from '../context/userContext';

const Cart = () => {
    const { cart,removeFromCart} = useContext(UserContext);
    console.log(cart)
    if (cart.length === 0) {
        return <p>cart is empty</p>;
      }
    return (
        <>
         <h2>your cart</h2>

         {cart?.map((item) => {

return (

  <div> 
      {item?.Name}
  
  <button onClick={() => {removeFromCart(item)}}>  remove from Cart</button>
  </div> 
)})}




        </>
     
    )}

export default Cart


