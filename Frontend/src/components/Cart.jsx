import React, { useContext,useState } from 'react';
import UserContext from '../context/userContext';
import AddOrRemoveFromCart from './AddOrRemoveFromCart';
const Cart = () => {
    const { cart,removeFromCart} = useContext(UserContext);
    console.log(cart)

return(
<>
{cart.length <= 0 && <p>No Item in the Cart!</p>}

{cart?.map((item) => {

return (

  <div>
     <strong>{item?.Name}</strong> - {item?.PointNumber} Points
  
  <AddOrRemoveFromCart item={item} />
  </div>
)})}

</>



)}
export default Cart


