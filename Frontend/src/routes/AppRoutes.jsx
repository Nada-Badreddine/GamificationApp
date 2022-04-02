import React, { useContext } from 'react';
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate,
  Outlet,
} from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import UserContext from '../context/userContext';
import GiftsByCategory from '../pages/GiftsByCategory';
import CategoriesPage from '../pages/CategoriesPage';
import UserInformation from '../pages/UserInformation';
import TypeRewards from '../pages/TypeRewards';
import FavorisPage from '../pages/FavorisPage';
import CartPage from '../pages/CartPage';
import Home from '../pages/Home';

function RequireAuth() {
  const { isAuth } = useContext(UserContext);
  console.log('first', isAuth);

  {
    /* 
     if (!isAuth) {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
    
    */
  }

  isAuth ? <Navigate replace to="/home" /> : <Navigate replace to="/login" />;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/userInformation" element={<UserInformation />} />
        <Route exact path="/typeRewards" element={<TypeRewards />} />
        <Route exact path="/FavorisPage" element={<FavorisPage />} />
        <Route exact path="/pageCategories" element={<CategoriesPage />} />
        <Route
          exact
          path="/giftsbyCategory/:catgId"
          element={<GiftsByCategory />}
        />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/" element={<Home />} />
        <Route element={<RequireAuth />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
