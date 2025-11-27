import React from "react";
import HomeSlider from "../components/Homeslider";
import Mapp from "../components/mapp";
import OurProduct from "../components/OurProduct";
import OurOfferings from "../components/OurOfferings";
import img1 from "../assets/m-1.avif";
import img2 from "../assets/m-3.avif";
import img3 from "../assets/wix-loan.png";
import EasyLoans from "../components/EasyLoans";
import LoanProcess from "../components/LoanProcess";
import BankSlider from "../components/bankSlider";
const slides = [
  { url: img1, title: "Affordable Home Loans", subtitle: "Low interest rates" },
  { url: img2, title: "Quick Approval", subtitle: "Fast and simple" },
  { url: img3, title: "Expert Guidance", subtitle: "Best loan advisors" },
];

const Home = () => {
  return (
    <div>
      <div className="w-full h-[45vh] sm:h-[40vh] md:h-[60vh] lg:h-[75vh]">
        <HomeSlider slide={slides} />
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
