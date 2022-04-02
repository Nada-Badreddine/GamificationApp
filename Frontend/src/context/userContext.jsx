import React, { createContext, useState } from 'react';

const UserContext = createContext({
  isAuth: false,
  userName: '',
  id: '',
  setUserID: () => {},
  setIsAuth: () => {},
});

export function UserProvider({ children }) {
  const [userName, setUserName] = useState(
    localStorage.getItem('USER_NAME') || ''
  );

  function getCartFromLocalStorage() {
    return localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];
  }

  const [id, setUserID] = useState(localStorage.getItem('USER_ID') || '');
  const [isAuth, setIsAuth] = useState(localStorage.getItem('TOKEN') || false);
  const [cart, setCart] = useState(getCartFromLocalStorage());

  const addToCart = (item) => {
    setCart((prevCart) => {
      const cartItems = [...prevCart, { ...item, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(cartItems));
      return cartItems;
    });

    //     const updatedItemIndex = cart.findIndex(el => el.id===item?.id)

    //  if (updatedItemIndex < 0) {
    //       cart.push({ ...item, quantity: 1 });
    //     } else {
    //       const updatedItem = {
    //         ...cart[updatedItemIndex]
    //       };
    //       updatedItem.quantity++;
    //       cart[updatedItemIndex] = updatedItem;
    //     }
  };
  const addProductQuantity = (item) => {
    setCart((prevCart) => {
      const cartItems = prevCart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      localStorage.setItem('cart', JSON.stringify(cartItems));
      return cartItems;
    });
  };

  const removeProductQuantity = (item) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find(
        (cartItem) => item.id === cartItem.id
      );
      if (!!productInCart && productInCart.quantity === 1) {
        const filtredCart = prevCart.filter((it) => it.id !== item.id);
        localStorage.setItem('cart', JSON.stringify(filtredCart));
        return filtredCart;
      }
      const cartItems = prevCart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
      localStorage.setItem('cart', JSON.stringify(cartItems));
      return cartItems;
    });
  };

  // make cart a string and store in local space
  //  let stringCart = JSON.stringify(cart);
  //  localStorage.setItem("cart", stringCart)
  //  console.log("cart",cart)

  const removeFromCart = (item) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
    setCart(hardCopy);
  };

  const updatedInitialState = {
    userName,
    id,
    setUserID,
    isAuth,
    setUserName,
    setIsAuth,
    cart,
    setCart,
    getCartFromLocalStorage,
    addToCart,
    removeFromCart,
    addProductQuantity,
    removeProductQuantity,
  };

  return (
    <UserContext.Provider value={updatedInitialState}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
