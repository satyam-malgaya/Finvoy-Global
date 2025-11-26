import React from "react";
import HomeSlider from "../components/Homeslider";
import Mapp from "../components/mapp";
import img1 from "../assets/about-imge.jpg";
import img2 from "../assets/m-2.avif";
import img3 from "../assets/about-imge.jpg";
import { FaPlay } from "react-icons/fa";
import imgAboutsec from "../assets/imgAboutsec.jpg"


const slides = [
  { url: img1, title: "Affordable Home Loans", subtitle: "Low interest rates" },
  { url: img2, title: "Quick Approval", subtitle: "Fast and simple" },
  { url: img3, title: "Expert Guidance", subtitle: "Best loan advisors" },
];

const About = () => {
  return (
    <div>
      <HomeSlider slide={slides} height="75vh" />
      <div className="flex mt-10 mx-40 gap-10">
        <div className="flex flex-col gap-y-5">
          <h1 className="font-bold text-4xl tex-gray-100">Your Trusted Finance Partner</h1>
          <p className="">At Finvoy-Global, we simplify the process of getting loans by connecting you with trusted banking partners. Whether it’s for your dream home, business expansion, or personal needs, our hassle-free solutions ensure quick approvals and reliable support.</p>
          <div className="flex gap-2">
          <p className="mt-1"><FaPlay /></p>
          <p>Easy Loan Approvals with Minimal Documentation</p>
          </div>
         <div className="flex gap-2">
          <p className="mt-1"><FaPlay /></p>
          <p>Strong Network of Banking Partners</p>
          </div>
          <div className="flex gap-2">
          <p className="mt-1"><FaPlay /></p>
          <p>Tailored Finance Solutions for Every Need</p>
          </div>
          <div className="flex gap-2">
          <p className="mt-1"><FaPlay /></p>
          <p>Transparent & Reliable Process</p>
          </div>
          <div className="flex gap-2">
           <p className="mt-1"><FaPlay /></p>
          <p>Expert Guidance at Every Step</p>
          </div>
          <div className="flex gap-2">
         <p className="mt-1"><FaPlay /></p>
          <p>Dedicated Support Until Disbursement</p>
          </div>
          <div className="flex gap-2">
          <p>Empowering individuals and businesses with smarter finance solutions and trusted partnerships.</p>
        </div>
        </div>
        <img src={imgAboutsec} className="h-[55vh] w-[40vw]"/>
      </div>
      <Mapp/>
    </div>
  );
};

export default About;
