import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { IoMdSearch } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "/logo.png"
import { useState } from "react";
const Navbar = () => {
    const [search, setsearch] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
      <nav className='w-full h-20 shadow-2xl justify-between flex items-center px-5 relative'>
        <div>
           <img className="w-23 h-[15vh] transform transition duration-200 ease-out outline-none hover:-translate-y-1 max-h-26 object-contain" src={logo} alt="Sorry the logo was not show" />
        </div>
       <div className='hidden md:flex flex-row gap-10 text-[18px]'>
       <NavLink className={styles.navlink} to="/">Home</NavLink>
       <NavLink className={styles.navlink} to="/about">About</NavLink>
       <NavLink className={styles.navlink} to="/contact">Contact</NavLink>
       <NavLink className={styles.navlink} to="/loan-calculator">Loan Calculator</NavLink>
       <NavLink className={styles.navlink} to="/careers">Careers</NavLink>
       </div>
       <div className="hidden md:flex flex-row gap-2">
         <div className="flex items-center ">
            <input className="px-[12px] w-65 py-[8px] rounded-full transform transition duration-200 ease-out outline-none hover:-translate-y-0.5 bg-[#170C52] hover:bg-[#170C89] text-white placeholder:text-white" type="search"  placeholder="Search..." />
            <IoMdSearch className="text-[23px] relative right-10 text-white"/>
         </div>
         <button 
         className="px-5 py-2 rounded-lg text-center border-1 bg-[#170C52] hover:bg-[#170C89] transform outline-none transition duration-200 ease-out hover:-translate-y-0.5 text-white font-medium">LogIn</button>
       </div>
       <button 
         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
         className="md:hidden text-[28px] text-[#170C52] focus:outline-none">
         {mobileMenuOpen ? <IoClose /> : <IoMenu />}
       </button>
       {mobileMenuOpen && (
         <div className="absolute top-20 left-0 w-full bg-white shadow-2xl z-50 md:hidden">
           <div className="flex flex-col px-5 py-4 gap-4">
             <NavLink className={styles.navlink} to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
             <NavLink className={styles.navlink} to="/about" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
             <NavLink className={styles.navlink} to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
             <NavLink className={styles.navlink} to="/loan-calculator" onClick={() => setMobileMenuOpen(false)}>Loan Calculator</NavLink>
             <NavLink className={styles.navlink} to="/careers" onClick={() => setMobileMenuOpen(false)}>Careers</NavLink>
             <div className="flex items-center mt-2 mb-2">
               <input className="px-[12px] w-full py-[8px] rounded-full transform transition duration-200 ease-out outline-none hover:-translate-y-0.5 bg-[#170C52] hover:bg-[#170C89] text-white placeholder:text-white" type="search" placeholder="Search..." />
               <IoMdSearch className="text-[23px] relative right-10 text-white pointer-events-none"/>
             </div>
             <button 
               className="w-full px-5 py-2 rounded-lg text-center border-1 bg-[#170C52] hover:bg-[#170C89] transform outline-none transition duration-200 ease-out hover:-translate-y-0.5 text-white font-medium">LogIn</button>
           </div>
         </div>
       )}
      </nav>

  );
};

export default Navbar;
