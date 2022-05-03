import React, { useState, useContext } from 'react';
import classes from './NavSection.module.css';
import Container from 'react-bootstrap/Container';
import { IconButton, Badge } from '@material-ui/core';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LogoutIcon from '@mui/icons-material/Logout';
import UserContext from '../../context/userContext';

const NavSection = () => {
  const navigate = useNavigate();
  const { cart, availablePoints } = useContext(UserContext);
  return (
    <div className={classes.body}>
      <div className={classes.welcomeHero}>
        <div className={classes.topArea}>
          <div>
            <nav
              class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"
              data-minus-value-desktop="70"
              data-minus-value-mobile="55"
              data-speed="  "
            >
              <Container>
                <div className={classes.navbarHeader}>
                  <a className={classes.navbarBrand} href="/">
                    Oyez<span>Gift</span>.
                  </a>
                </div>

                <div className={classes.welcomeHero}>
                  <ul>
                    <li className={classes.active}>
                      <a href="/">home</a>
                    </li>
                    <li className={classes.active}>
                      <a href="/pageCategories">gift Catalog</a>
                    </li>
                    <li className={classes.active}>
                      <a href="/typeRewards">types of rewards</a>
                    </li>
                    <li className={classes.active}>
                      <a href="/orders">orders</a>
                    </li>
                    <li className={classes.active}>
                      <a href="/userInformation">profil</a>
                    </li>
                    <li>
                      <IconButton
                        onClick={() => navigate('/cart')}
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                        style={{ padding: 0 }}
                      >
                        <Badge badgeContent={cart.length ?? 0} color="error">
                          <ShoppingCartIcon />
                        </Badge>
                      </IconButton>
                    </li>
                    <li>
                      <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                        onClick={() => navigate('/FavorisPage')}
                        style={{ padding: 0 }}
                      >
                        <FavoriteBorderIcon />
                      </IconButton>
                    </li>
                    <li>
                      <Badge max={100000} badgeContent={availablePoints ?? 0} color="error">
                        <MonetizationOnIcon />
                      </Badge>
                    </li>
                    <li>
                      <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                        style={{ padding: 0 }}
                        onClick={() => {
                          localStorage.clear();
                          window.location.replace('/');
                        }}
                      >
                        <LogoutIcon />
                      </IconButton>
                    </li>
                  </ul>
                </div>
              </Container>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSection;