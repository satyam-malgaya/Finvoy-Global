import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { IoMdSearch } from "react-icons/io";
import logo from "/logo.png"
import { useState } from "react";
const Navbar = () => {
    const [search, setsearch] = useState(false)
  return (
      <nav className='w-full h-20  shadow-2xl  justify-between flex items-center px-5'>
        <div>
           <img className="w-23 h-[15vh]" src={logo} alt="Sorry the logo was not show" />
        </div>
       <div className='flex flex-row gap-10  text-[18px]'>
       <NavLink className={styles.navlink} to="/">Home</NavLink>
       <NavLink className={styles.navlink} to="/about">About</NavLink>
       <NavLink className={styles.navlink} to="/contact">Contact</NavLink>
       <NavLink className={styles.navlink} to="/loan-calculator">Loan Calculator</NavLink>
       <NavLink className={styles.navlink} to="/careers">Careers</NavLink>
       </div>
       <div className="flex flex-row gap-4">
         <button onClick={()=>{
               
         }} className="px-[12px] py-[11px] rounded-full bg-[#170C52] text-white "><IoMdSearch className="text-[18px] hover:text-[20px]" /></button>
         <button 
         className=" px-5 py-2  rounded-lg text-center border-1 bg-[#170C52] text-white font-medium">LogIn</button>
       </div>
      </nav>

  );
};

export default Navbar;
