import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import LoanCalculator from '../pages/LoanCalculator'
import Careers from '../pages/Careers'
const Allroutes = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loan-calculator" element={<LoanCalculator />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </div>
  )
}

export default Allroutes
