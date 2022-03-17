import React, { createContext, useState } from "react";




const UserContext = createContext({
  isAuth: false,
  userName: "",
  id: "",
 
  setUserID: () => {},
  setIsAuth: () => {},
  


});

export const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState(localStorage.getItem('USER_NAME') ?? '');
    const [id, setUserID] = useState(localStorage.getItem('USER_ID') ?? '');
    const [isAuth, setIsAuth] = useState(localStorage.getItem('TOKEN') ?? false);
    const [cart, setCart] = useState(getCartFromLocalStorage());
  


    const addToCart = (item) => {
      setCart([...cart, item]);
    
    }

 //make cart a string and store in local space
 let stringCart = JSON.stringify(cart);
 localStorage.setItem("cart", stringCart)
 console.log("cart",cart)


    function getCartFromLocalStorage() {
      return localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
    }

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
 

  };
  





  return (
    <UserContext.Provider value={updatedInitialState}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;