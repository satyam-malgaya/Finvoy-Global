import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "/main-logo.jpg"
const Navbar = () => {
  return (
    
      <nav className={styles.navbar}>
        <div>
           <img className={styles.logo} src={logo} alt="Sorry the logo was not show" />
        </div>
       <div className={styles.navlinks}>
       <NavLink className='navli' to="/">Home</NavLink>
       <NavLink className='navli' to="/about">About</NavLink>
       <NavLink className='navli' to="/contact">Contact</NavLink>
       <NavLink className='navli' to="/loan-calculator">Loan Calculator</NavLink>
       <NavLink className='navli' to="/careers">Careers</NavLink>

       </div>
      </nav>

  );
};

export default Navbar;
