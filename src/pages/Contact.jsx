import React from 'react';
import ContactPhoto from '../assets/ContactPhoto.webp';
import { NavLink } from "react-router-dom";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="w-full">

      {/* Top Banner Image */}
      <img
        src={ContactPhoto}
        className=" h-[40vh] w-full md:h-[70vh] object-cover"
      />
      {/* Heading */}
      <div className="text-center flex flex-col gap-y-3 my-10 md:my-25 px-4">
        <h2 className="text-lg md:text-xl font-bold text-blue-800">Get In Touch</h2>
        <h1 className="text-2xl md:text-4xl font-bold">Contact for any query</h1>
        <p className="text-gray-500 text-md md:text-lg">
          The contact form is currently inactive. Get a functional and working contact <br className="hidden md:block" />
          form with Ajax & PHP in a few minutes. Just copy and paste the files, add a <br className="hidden md:block" />
          little code and you're done. <span className="text-blue-800">Download Now.</span>
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="bg-gray-100 py-10 md:py-20 px-5 md:px-20 lg:px-40">
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          
          {/* Location Box */}
          <div className="bg-white border h-auto w-full md:w-[25vw] py-5 px-4 flex flex-col gap-y-4 border-gray-50 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ">
            <h1 className="text-xl font-semibold">Meet with us at</h1>
            <NavLink to="/" className="flex gap-3">
              <FaLocationDot className="text-red-600 text-3xl" />
              <p className="text-md">
                123 First Floor, Apollo Square,
                Janjeerwala Square, Race Course Road,
                Indore, Madhya Pradesh - 452002
              </p>
            </NavLink>
          </div>

          {/* Phone Box */}
          <div className="bg-white border h-auto w-full md:w-[25vw] py-5 px-4 flex flex-col gap-y-4 border-gray-50 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ">
            <h1 className="text-xl font-semibold">Make a Call</h1>
            <NavLink to="/" className="flex gap-3">
              <FaPhone className="text-blue-600 text-2xl mt-1" />
              <p className="text-md">+91 7000332180</p>
            </NavLink>
          </div>

          {/* Email Box */}
          <div className="bg-white border h-auto w-full md:w-[25vw] py-5 px-4 flex flex-col gap-y-4 border-gray-50 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
            <h1 className="text-xl font-semibold">Drop A Mail</h1>
            <p className="text-md">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <NavLink to="/" className="flex gap-3">
              <MdEmail className="text-red-600 text-2xl mt-1" />
              <p className="text-md">vinayakafinserv123@gmail.com</p>
            </NavLink>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
