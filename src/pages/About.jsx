import React from 'react'
import img from "../assets/about-imge.jpg" 
const About = () => {
  return (
    <div>
      <div className="text-center mb-[100vh] text-white">
      <img src={img} className="h-[80vh] w-full absolute"/>
      <h1 className="right-[43vh] top-[100px] text-4xl font-bold relative ">About Finvoy-Global</h1>
      <p className="right-[43vh] top-[100px] text-xl relative mt-4">Finvoy-Global brings ytext-whiteou easy approvals, secure transactions, and tailored financial <br/>planning — so you can grow with confidence.Finance ko banaye simple, accessible,<br/> aur stress-free.</p>
    </div>
    </div>
  )
}

export default About
