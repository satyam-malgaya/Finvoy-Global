import React from "react";
import HomeSlider from "../components/Homeslider";
import Mapp from "../components/mapp";
import img1 from "../assets/aboutImg.webp";
import img2 from "../assets/m-2.avif";
import img3 from "../assets/aboutimg2.jpeg";
import { FaPlay } from "react-icons/fa";
import imgAboutsec from "../assets/imgAboutsec.jpg";
import logoimg1 from "../assets/missionLogo.png";
import logoimg2 from "../assets/storyLogo.png";
import logoimg3 from "../assets/visionLogo.png"

const slides = [
  { url: img1, title: "Affordable Home Loans", subtitle: "Low interest rates" },
  { url: img2, title: "Quick Approval", subtitle: "Fast and simple" },
  { url: img3, title: "Expert Guidance", subtitle: "Best loan advisors" },
];

const About = () => {
  return (
    <div>

      <HomeSlider slide={slides} height="75vh" />


      <div className="flex flex-col lg:flex-row mt-10 mx-5 lg:mx-40 gap-10 items-center">


        <div className="flex flex-col gap-y-5 lg:w-1/2">
          <h1 className="font-bold text-4xl text-[#443693]">
            Your Trusted Finance Partner
          </h1>
          <p className="text-gray-700">
            At Finvoy-Global, we simplify the process of getting loans by connecting you with trusted banking partners. Whether it’s for your dream home, business expansion, or personal needs, our hassle-free solutions ensure quick approvals and reliable support.
          </p>


          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <FaPlay className="mt-1 text-[#443693]" />
              <p>Easy Loan Approvals with Minimal Documentation</p>
            </div>
            <div className="flex gap-2">
              <FaPlay className="mt-1 text-[#443693]" />
              <p>Strong Network of Banking Partners</p>
            </div>
            <div className="flex gap-2">
              <FaPlay className="mt-1 text-[#443693]" />
              <p>Tailored Finance Solutions for Every Need</p>
            </div>
            <div className="flex gap-2">
              <FaPlay className="mt-1 text-[#443693]" />
              <p>Transparent & Reliable Process</p>
            </div>
            <div className="flex gap-2">
              <FaPlay className="mt-1 text-[#443693]" />
              <p>Expert Guidance at Every Step</p>
            </div>
            <div className="flex gap-2">
              <FaPlay className="mt-1 text-[#443693]" />
              <p>Dedicated Support Until Disbursement</p>
            </div>
          </div>

          <div className="mt-4">
            <p>
              Empowering individuals and businesses with smarter finance solutions and trusted partnerships.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src={imgAboutsec}
            alt="About Section"
            className="h-[55vh] w-full max-w-lg object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>


      <Mapp />
      <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-10 my-14 px-5 lg:px-20">


        <div className="bg-white h-[60vh] w-full sm:w-[45%] lg:w-[25%] px-6 text-center border border-gray-50 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ">
          <img src={logoimg1} className="h-[20vh] mx-auto" alt="Our Mission" />
          <h1 className="text-2xl font-bold text-[#443693] mt-4">Our Mission</h1>
          <p className="text-gray-700 mt-2">
            To simplify access to financial services by offering transparent, reliable, and customized loan solutions. We aim to empower individuals and businesses to achieve their goals with confidence and ease.
          </p>
        </div>


        <div className="bg-white h-[60vh] w-full sm:w-[45%] lg:w-[25%] px-6 text-center border border-gray-50 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
          <img src={logoimg2} className="h-[20vh] mx-auto" alt="Our Vision" />
          <h1 className="text-2xl font-bold text-[#443693] mt-4">Our Vision</h1>
          <p className="text-gray-700 mt-2">
            To be the most trusted financial partner, connecting people with leading banks and institutions, and ensuring easy, affordable, and stress-free loan approvals for every client we serve.
          </p>
        </div>


        <div className="bg-white h-[60vh] w-full sm:w-[45%] lg:w-[25%] px-6 text-center border border-gray-50 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
          <img src={logoimg3} className="h-[20vh] mx-auto" alt="Our Story" />
          <h1 className="text-2xl font-bold text-[#443693] mt-4">Our Story</h1>
          <p className="text-gray-700 mt-2">
            Vinayaka Finserv was founded with a vision to make finance simple and accessible. With years of experience and strong banking partnerships, we have helped countless clients secure loans and achieve their dreams through trust, integrity, and personalized service.
          </p>
        </div>

      </div>

    </div>
  );
};

export default About;
