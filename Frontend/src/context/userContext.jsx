import React, { createContext, useState } from 'react';

const UserContext = createContext({
  isAuth: false,
  userName: '',
  availablePoints: 0,
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
  const [availablePoints, setAvailablePoints] = useState(localStorage.getItem('AVAILABLE_POINTS') || 0);
  const [isAuth, setIsAuth] = useState(localStorage.getItem('TOKEN') || false);
  const [cart, setCart] = useState(getCartFromLocalStorage());

  const addToCart = (item) => {
    setCart((prevCart) => {
      const cartItems = [...prevCart, { ...item, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(cartItems));
      return cartItems;
    });

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



  const removeFromCart = (item) => {
    let hardCopy = [...cart]; 
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
    setCart(hardCopy);
  };

  const resetCart = () => {
    setCart([])
    localStorage.removeItem("cart")
  }

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
    resetCart,
    availablePoints,
    setAvailablePoints
  };

  return (
    <UserContext.Provider value={updatedInitialState}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
