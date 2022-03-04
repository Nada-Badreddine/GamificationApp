import React, { createContext, useState } from "react";

const UserContext = createContext({
  isAuth: false,
  userName: "",
  setUserName: () => {},
  setIsAuth: () => {},
});

export const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState(localStorage.getItem('USER_NAME') ?? '');
    const [isAuth, setIsAuth] = useState(localStorage.getItem('TOKEN') ?? false);

  const updatedInitialState = {
    userName,
    isAuth,
    setUserName,
    setIsAuth,
  };

  return (
    <UserContext.Provider value={updatedInitialState}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;