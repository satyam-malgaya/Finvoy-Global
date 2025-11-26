import React from 'react'
import Allroutes from './Routes/allroutes'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import "./App.css"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Allroutes/>
      <Footer/>
    </div>
  )
}

export default App
