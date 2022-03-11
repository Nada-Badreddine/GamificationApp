import React, { useContext } from 'react';
import { Route, Routes, BrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import UserContext from '../context/userContext';
import GiftList from '../pages/GiftList';
import CategoriesList from '../pages/CategoriesList';
import CategoriesPage from '../pages/CategoriesPage';



import UserInformation from '../pages/UserInformation';
import TypeRewards from '../pages/TypeRewards';

function RequireAuth() {
    const { isAuth } = useContext(UserContext);
    if (!isAuth) {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
}


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
           
                <Route exact path='/userInformation' element={<UserInformation />} />
                <Route exact path='/typeRewards' element={<TypeRewards />} />
                <Route exact path='/pageCatego' element={<CategoriesPage />} />
          
           
                 <Route exact path='/register' element={<Register />} />
                <Route exact path='/login' element={<Login />} />
           
               
                <Route element={<RequireAuth />}>
                    <Route path="/GiftList" element={<GiftList />} />
                    <Route path="/CategoryList" element={<CategoriesList />} />
               
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
