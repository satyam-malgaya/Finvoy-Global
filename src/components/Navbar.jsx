import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
       <nav className="navbar">
      <h2 className="logo">MyApp</h2>

      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/loan-calculator">Loan Calculator</NavLink></li>
        <li><NavLink to="/careers">Careers</NavLink></li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
