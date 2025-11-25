import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { IoMdSearch } from "react-icons/io";
import logo from "/logo.png"
const Navbar = () => {
  return (
    
      <nav className='w-full h-20 border-1 shadow border-black justify-between flex items-center px-5'>
        <div>
           <img className="w-23 h-[15vh]" src={logo} alt="Sorry the logo was not show" />
        </div>
       <div className='flex flex-row gap-10'>
       <NavLink className='navli' to="/">Home</NavLink>
       <NavLink className='navli' to="/about">About</NavLink>
       <NavLink className='navli' to="/contact">Contact</NavLink>
       <NavLink className='navli' to="/loan-calculator">Loan Calculator</NavLink>
       <NavLink className='navli' to="/careers">Careers</NavLink>
       </div>
       <div>
         <button>logIn</button>
         <button><IoMdSearch /></button>
       </div>
      </nav>

  );
};

export default Navbar;
