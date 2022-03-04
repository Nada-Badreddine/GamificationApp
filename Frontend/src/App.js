import { BrowserRouter, Routes, Route,} from "react-router-dom";
import React from 'react';
import GiftList from './pages/GiftList'
import CategoriesList from './pages/CategoriesList'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <>
    navbar
     <BrowserRouter>
            <Routes>
              <Route exact path='/GiftList'  element={<GiftList />}   />
              <Route exact path='/CategoriesList'  element={<CategoriesList />}   />
               <Route exact path='/register'  element={<Register />}   />
                <Route exact path='/login'  element={<Login />}   />
            </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
