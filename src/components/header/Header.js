import React,{Component} from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import styles from "./styles/HeaderStyles";

const Header = () => {
    const classes = styles();
    
    return (
        <AppBar position={"sticky"}>
            <Toolbar className={classes.toolbar}>
                <a href="/" className={classes.headerLink}>
                    <Typography variant="h5">
                        DailyNeeds
                    </Typography>
                </a>
                        
            </Toolbar>
        </AppBar>
    )
    
    
};


export default Header;