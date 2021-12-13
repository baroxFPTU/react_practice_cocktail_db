import React from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar';
import classes from './Navbar.module.css';

function Navbar(props) {
  return (
   <nav className={classes.navbar}>
     <div className={`wrapper ${classes.navbarWrapper}`}>
      <div className={classes.navbarLogo}>
        <Link to="/" className={classes.navbarLogoText}>
        CocktalkDB
        </Link>
      </div>
      <SearchBar/>
      <ul className={classes.navbarMenu}>
        <li>
          <Link className={classes.navbarLink} to="/">Home</Link>
        </li>
        <li>
        <Link className={classes.navbarLink} to="/about">About</Link>
        </li>
      </ul>
     </div>
   </nav>
  );
}

export default Navbar;