import React from 'react'
// import map from "../assets/india-map.png";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";


const Mapp = () => {
  const navigate=useNavigate()
  const { loanId } = useParams();
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [loanId]);
  return (
    <div className="w-full min-h-[80vh] flex justify-center items-center flex-col gap-8 px-6 py-10 md:py-2 shadow-2xl md:px-10 lg:min-h-[80vh] lg:flex-row">
    <div className="w-full lg:w-[101%] flex flex-col justify-center items-center  h-full">
      <div>
      <h1 className="text-black text-3xl font-bold sm:text-[35px]">
        About{" "}<span className="text-[#170C52] tracking-[1px]">Finvoy Global</span>
      </h1>
      </div>
      <div className="flex flex-col pt-6 lg:px-15 sm:px-2 items-center justify-center gap-5 text-base leading-relaxed sm:text-lg lg:gap-6">
        <p>
          At <b>Finvoy Global</b>, we are dedicated to making finance simple,
          accessible, and stress-free. With our strong network of leading
          banks and financial institutions, we help you secure the right
          loan with ease and transparency.
        </p>
        <p>
          Whether it’s a home loan, personal loan, business loan, or any
          other financial need, our team ensures quick processing, minimal
          documentation, and the best interest rates tailored to your
          requirements. We focus on providing solutions that truly match
          your goals.
        </p>
        <p>
          Our mission is to support you at every step of your financial
          journey — from guiding you through the application process to
          ensuring smooth approvals. With expert advice, trusted guidance,
          and hassle-free services,<b>Finvoy Global</b> is your reliable
          partner in achieving financial freedom.
        </p>
        <button 
          onClick={()=>{
            navigate('/contact')
          }}
        className="w-full sm:w-40 h-13 transform transition duration-200 ease-out outline-none hover:-translate-y-1 rounded-sm text-white font-medium bg-[#170C52]">
          Contact Now
        </button>
      </div>
    </div>
  </div>
  )
}

export default Mapp
