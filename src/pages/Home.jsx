import React from "react";
import HomeSlider from "../components/Homeslider";
import Mapp from "../components/Mapp";
import OurProduct from "../components/OurProduct";
import OurOfferings from "../components/OurOfferings";
import img1 from "../assets/m-1.avif";
import img2 from "../assets/m-3.avif";
import img3 from "../assets/wix-loan.png";
import img4 from "../assets/gimg.jpg";
import EasyLoans from "../components/EasyLoans";
import LoanProcess from "../components/LoanProcess";
import BankSlider from "../components/BankSlider";
import PopFrom from "../components/PopFrom";

const slides = [
  { url: img1, title: "Affordable Home Loans", subtitle: "Low interest rates" },
  { url: img2, title: "Quick Approval", subtitle: "Fast and simple" },
  { url: img3, title: "Expert Guidance", subtitle: "Best loan advisors" },
  { url: img4, title: "Fast Approval", subtitle: "Loan Approved" },
];

const Home = () => {
  return (
    <div>
      {/* ✅ Floating Apply Button with Popup */}
      <PopFrom />  

      {/* Main Slider Section */}
      <div className="relative w-full sm:h-[40vh] md:h-[60vh] lg:h-[75vh]">
        <HomeSlider slide={slides} />
      </div>

      {/* Section 2 */}
      <Mapp />

      {/* Section 3 */}
      <OurProduct />

      {/* Section 4 */}
      <OurOfferings />

      {/* Section 5 */}
      <EasyLoans />

      {/* Section 6 */}
      <LoanProcess />

      {/* Section 7 */}
      <BankSlider />
    </div>
  );
};

export default Home;
