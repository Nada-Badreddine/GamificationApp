import React, { useContext, memo } from 'react';
import UserContext from '../context/userContext';

function AddOrRemoveFromCart({ item }) {
  const { addToCart, cart, addProductQuantity, removeProductQuantity } =
    useContext(UserContext);
  const productInCart = cart.find((cartItem) => item.id === cartItem.id);
  const isProductExistInCart = !!productInCart;
  return (
    <>
      {isProductExistInCart && (
        <div className="d-flex">
          <button
            type="button"
            onClick={() => {
              addProductQuantity(item);
            }}
          >
            +
          </button>
          <p>{productInCart.quantity}</p>
          <button type="button" onClick={() => removeProductQuantity(item)}>
            -
          </button>
        </div>
      )}
      {!isProductExistInCart && (
        <button
          type="button"
          onClick={() => {
            addToCart(item);
          }}
        >
          Add to cart
        </button>
      )}
    </>
  );
}
export default memo(AddOrRemoveFromCart);
