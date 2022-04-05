import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
} from "@material-ui/core";

const Footer = () => 
    <AppBar position="static" width= "100%" bottom={0} elevation={0} component="footer" color="default">
        <Toolbar style={{ justifyContent: "center" }}>
            <Typography variant="caption">©2022</Typography>
        </Toolbar>
    </AppBar>

export default Footer;