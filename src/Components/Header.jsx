import React from "react";
import classes from "./CSSModules/Header.module.css"
import {Link} from "react-router-dom";
import Ruspage from "./Ruspage";

const Header = () =>{
    return(
        <header className={classes.head}>
            <button className={classes.btn}>
                <Link to='/rus' className={classes.hhh}>
                    Russian
                </Link>
            </button>

            <button className={classes.btn}>
                <Link to='/eng' className={classes.hhh}>
                    English
                </Link>
            </button>
        </header>
    )
}

export default Header;