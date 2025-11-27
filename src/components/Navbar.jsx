import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { IoMdSearch } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "/logo.png"


import { useState } from "react";
import data from "../data/Data.json";
const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navigate = useNavigate()

    const handleSearchSubmit = (event) => {
      event.preventDefault()
      const trimmedValue = searchTerm.trim()

      if (!trimmedValue) return

      const normalizedTerm = trimmedValue.toLowerCase()
      const matchedProduct = data.loanProducts.find(
        (loan) => loan.title.toLowerCase().includes(normalizedTerm)
      )

      if (matchedProduct) {
        navigate(`/loan/${matchedProduct.id}`)
        setSearchTerm("")
        setMobileMenuOpen(false)
      } else {
        alert("No loan product found for that ID.")
      }
    }
  return (
      <nav className='w-full h-20 shadow-2xl justify-between flex items-center px-5 relative'>
        <div>
           <img 
            onClick={()=>{
               navigate("/")
            }}
           className="w-23 h-[15vh] transform transition duration-200 ease-out outline-none hover:-translate-y-1 max-h-26 object-contain" src={logo} alt="Sorry the logo was not show" />
        </div>

       <div className='hidden md:flex flex-row gap-10 text-[18px]'>
       <NavLink className={styles.navlink} to="/">Home</NavLink>
       <NavLink className={styles.navlink} to="/LoanPorduct">LoanProduct</NavLink>
       <NavLink className={styles.navlink} to="/about">About</NavLink>
       <NavLink className={styles.navlink} to="/contact">Contact</NavLink>
       <NavLink className={styles.navlink} to="/loan-calculator">Loan Calculator</NavLink>
       </div>
      <div className="hidden md:flex flex-row gap-3">
        <form onSubmit={handleSearchSubmit} className="relative flex w-72 items-center">
           <input 
           value={searchTerm}
           onChange={(event) => setSearchTerm(event.target.value)}
           className="w-full rounded-full bg-[#170C52] px-4 py-2 pr-10 text-white placeholder:text-white transition duration-200 ease-out outline-none hover:-translate-y-0.5 hover:bg-[#170C89]" type="search"  placeholder="Search loan..." />
           <IoMdSearch className="pointer-events-none absolute right-4 text-[20px] text-white"/>
        </form>
         <button 
         onClick={()=>{
             navigate(`/contact`)
         }}
        className="px-5 py-2 rounded-lg text-center border bg-[#170C52] hover:bg-[#170C89] transform outline-none transition duration-200 ease-out hover:-translate-y-0.5 text-white font-medium">Contact Us</button>
       </div>
       <button 
         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
         className="md:hidden text-[28px] text-[#170C52] focus:outline-none">
         {mobileMenuOpen ? <IoClose /> : <IoMenu />}
       </button>
       {mobileMenuOpen && (
         <div className="absolute top-20 left-0 w-full bg-white shadow-2xl z-50 md:hidden">
           <div className="flex flex-col px-5  py-4 gap-2">
             <NavLink className={styles.navlink} to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
             <NavLink className={styles.navlink} to="/LoanProduct" onClick={() => setMobileMenuOpen(false)}>LoanProduct</NavLink>
             <NavLink className={styles.navlink} to="/about" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
             <NavLink className={styles.navlink} to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
            <NavLink className={styles.navlink} to="/loan-calculator" onClick={() => setMobileMenuOpen(false)}>Loan Calculator</NavLink>
           <form onSubmit={handleSearchSubmit} className="relative mt-2 mb-2 flex items-center">
             <input 
             value={searchTerm}
             onChange={(event) => setSearchTerm(event.target.value)}
             className="w-full rounded-full bg-[#170C52] px-4 py-2 pr-10 text-white placeholder:text-white transition duration-200 ease-out outline-none hover:-translate-y-0.5 hover:bg-[#170C89]" type="search" placeholder="Search loan..." />
             <IoMdSearch className="pointer-events-none absolute right-4 text-[20px] text-white"/>
            </form>
            <button 
              className="w-full px-5 py-2 rounded-lg text-center border bg-[#170C52] hover:bg-[#170C89] transform outline-none transition duration-200 ease-out hover:-translate-y-0.5 text-white font-medium">Contact Us</button>
           </div>
         </div>
       )}
      </nav>

  );
};

export default Navbar;
