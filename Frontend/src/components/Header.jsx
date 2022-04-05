import React, { useState, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { Grid, Badge, IconButton, Button, AppBar, Toolbar, Box, MenuItem, Menu, Avatar } from "@material-ui/core"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UserContext from '../context/userContext';

const useStyles = makeStyles((theme) => ({

  row: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  container: {
    width: 1170,
    margin: "auto"
  },
  buttonFontSize: {
    fontSize: "11px",
    color: "#a1a1a1"
  },

  AppBar: {
    //height:400,
    //background: `url("http://lorempixel.com/1920/1080/nature") no-repeat center center`,
    backgroundColor: "#fff",
    backgroundSize: "cover"
  },
  mainLogo: {
    color: "#a1a1a1",
    justifyContent: "left",
    '&:hover': {
      background: "transparent"
    }
  },

  avatar: {
    height: "100%",
    borderRadius: 0,


  },

  loginButton: {
    background: "#e91e63",
    color: "#fff",
    borderRadius: "25px",
    padding: "0px 25px",

    '&:hover': {
      background: 'blue',
      boxShadow: "0px 2px 10px #888888"
    }
  }

}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState()
  const { cart } = useContext(UserContext);
  const navigate = useNavigate();

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null)
  };

  const classes = useStyles();
  const open = Boolean(anchorEl);

  return (
    <Box mb={2}>
      <AppBar position="static" color="default" className={classes.AppBar}>
        <Grid item sm={12} xs={12} className={classes.container}>
          <Toolbar>
            <Grid className={classes.grow}>
              <Button className={[classes.mainLogo]}>
                <Avatar src="https://uploads.codesandbox.io/uploads/user/3e41a372-fc65-4387-bca0-70a050914db8/VIR9-logo.jpg" className={classes.avatar} />
              </Button>
            </Grid>
            <Button color="inherit" onClick={() => navigate('/')}  className={classes.buttonFontSize}>Home</Button>
            <Button color="inherit" onClick={() => navigate('/pageCategories')}  className={classes.buttonFontSize}>Categories</Button>
            <Button color="inherit" onClick={() => navigate('/typeRewards')}  className={classes.buttonFontSize}>Rewards</Button>
            <Button color="inherit" onClick={() => navigate('/userInformation')}  className={classes.buttonFontSize}>Profile</Button>
            <Button color="inherit" onClick={() => navigate('/FavorisPage')}  className={classes.buttonFontSize}>Favoris</Button>
            <Button color="inherit" onClick={handleMenu} className={classes.buttonFontSize}>Discover</Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon onClick={() => navigate('/cart')} />
              </Badge>
            </IconButton>
            <Button color="inherit" className={[classes.buttonFontSize, classes.loginButton]}
              onClick={() => {
                localStorage.clear();
                window.location.replace("/");
              }}
            >Deconnexion</Button>
          </Toolbar>
        </Grid>
      </AppBar>
    </Box>
  )
}


export default Header;
