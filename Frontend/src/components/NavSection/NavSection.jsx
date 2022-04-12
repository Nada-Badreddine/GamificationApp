import React, { useState, useContext } from 'react';
import classes from './NavSection.module.css';
import Container from 'react-bootstrap/Container';
import { IconButton, Badge } from '@material-ui/core';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import UserContext from '../../context/userContext';
const NavSection = () => {
  const navigate = useNavigate();
  const { cart } = useContext(UserContext);
  return (
    <div className={classes.body}>
      <div className={classes.welcomeHero}>
        <div className={classes.topArea}>
          <div>
            <nav
              class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"
              data-minus-value-desktop="70"
              data-minus-value-mobile="55"
              data-speed="1000"
            >
              <Container>
                <div className={classes.navbarHeader}>
                  <a className={classes.navbarBrand} href="/">
                    Oyez<span>Gift</span>.
                  </a>
                </div>

                <div className={classes.welcomeHero}>
                  <div>
                    <ul>
                      <li className={classes.active}>
                        <a href="#home">home</a>
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
                      <li className={classes.active}>
                        <a href="#blog">blog</a>
                      </li>
                      <li className={classes.active}>
                        <a href="#newsletter">contact</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="attrNav">
                  <ul>
                    <li>
                      <IconButton
                        onClick={() => navigate('/cart')}
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                      >
                        <Badge badgeContent={cart.length} color="error">
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
                      >
                        <FavoriteBorderIcon />
                      </IconButton>
                    </li>
                    <li>
                      <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
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
