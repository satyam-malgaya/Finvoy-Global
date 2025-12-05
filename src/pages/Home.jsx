import React from "react";
import HomeSlider from "../components/Homeslider";
import Mapp from "../components/Mapp";
import OurProduct from "../components/OurProduct";
import OurOfferings from "../components/OurOfferings";
import img1 from "../assets/m-1.avif";
import img2 from "../assets/m-3.avif";
import img3 from "../assets/wix-loan.png";
import EasyLoans from "../components/EasyLoans";
import LoanProcess from "../components/LoanProcess";
import BankSlider from "../components/BankSlider";
import img4 from '../assets/gimg.jpg'
const slides = [
  { url: img1, title: "Affordable Home Loans", subtitle: "Low interest rates" },
  { url: img2, title: "Quick Approval", subtitle: "Fast and simple" },
  { url: img3, title: "Expert Guidance", subtitle: "Best loan advisors" },
  { url: img4, title: "Expert Guidance", subtitle: "Loan Approved" },
];
import { useNavigate } from "react-router-dom";

const Home = () => {
 const navigate=useNavigate()
  return (
    <div>
      <div className="fixed bottom-5 left-30 text-center ">
        <button 
        onClick={()=>{
          navigate('/contact')
        }}
        className="py-3 px-5 bg-[#170C52] rounded-sm text-white">Contact Us</button>
      </div>
      <div className="relative w-full sm:h-[40vh] md:h-[60vh] lg:h-[75vh]">
        <HomeSlider slide={slides}  />
      </div>
      {/* section-2........ */}
      <div>
        <Mapp />
      </div>
      {/* section-3............ */}
      <div>
        <OurProduct />
      </div>
      {/* section-4......... */}
      <div>
        <OurOfferings />
      </div>
      {/* section-5............ */}
      <div>
        <EasyLoans />
      </div>
      {/* sections-6....... */}
      <div>
        <LoanProcess />
      </div>
      {/* section-7................. */}
      <div>
        <BankSlider />
      </div>
    </div>
  );
};

export default Home;
