import React from 'react';
import {NavBar} from './style'
import MarvelLogo from '../../img/images'

const Nav = () => {
    return(
    <NavBar> 
        <img src={MarvelLogo.MarvelLogo} alt="logo" />
    </NavBar>
)};

export default Nav;
