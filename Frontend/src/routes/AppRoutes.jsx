import React, { useContext } from 'react';
import {
  Route,
  Routes,
  BrowserRouter,
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
import ConfirmationOrder from '../pages/ConfirmationOrder';
import Orders from '../pages/Orders';

function RequireAuth() { 
  const { isAuth } = useContext(UserContext);

     if (!isAuth &&  window.location.pathname!=='/login' ) {
       window.location.href="/login"
    }
}

export default function AppRoutes() {
  RequireAuth()
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
        <Route exact path="/confirmationOrder" element={<ConfirmationOrder />} />
        <Route exact path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}
