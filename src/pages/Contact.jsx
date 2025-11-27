import React from 'react';
import ContactPhoto from '../assets/ContactPhoto.webp';
import { NavLink } from "react-router-dom";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="w-full relative">

      {/* Banner Image */}
      <img
        src={ContactPhoto}
        className="w-full h-[35vh] sm:h-[45vh] md:h-[60vh] lg:h-[70vh] object-cover"
      />
      <h1 className="absolute lg:top-50 lg:left-30 top-20 left-6 text-white text-2xl md:text-6xl font-bold ">Contact Us</h1>
      {/* Heading Section */}
      <div className="text-center flex flex-col gap-y-3 my-10 px-4">
        <h2 className="text-lg md:text-xl font-bold text-blue-800">Get In Touch</h2>
        <h1 className="text-2xl md:text-4xl font-bold">Contact for any query</h1>
        <p className="text-gray-500 text-md md:text-lg">
          The contact form is currently inactive. Get a functional and working contact
          form with Ajax & PHP in a few minutes. <br className="hidden md:block" />
          Just copy and paste the files, add a little code and you're done.
          <span className="text-blue-800"> Download Now.</span>
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="bg-gray-100 py-10 md:py-16 px-5 sm:px-10 md:px-20 lg:px-40">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4">

          {/* Location Card */}
          <div className="bg-white border py-6 px-5 w-full border border-gray-50 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
            <h1 className="text-xl font-semibold mb-2">Meet with us at</h1>
            <NavLink to="/" className="flex gap-3">
              <FaLocationDot className="text-red-600 text-3xl" />
              <p className="text-md">
                123 First Floor, Apollo Square,
                Janjeerwala Square, Race Course Road,
                Indore, Madhya Pradesh - 452002
              </p>
            </NavLink>
          </div>

          {/* Phone Card */}
          <div className="bg-white border py-6 px-5 w-full border border-gray-50 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
            <h1 className="text-xl font-semibold mb-2">Make a Call</h1>
            <NavLink to="/" className="flex gap-3">
              <FaPhone className="text-blue-600 text-2xl mt-1" />
              <p className="text-md">+91 7000332180</p>
            </NavLink>
          </div>

          {/* Email Card */}
          <div className="bg-white border py-6 px-5 w-full border border-gray-50 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
            <h1 className="text-xl font-semibold mb-2">Drop A Mail</h1>
            <p className="text-md mb-2">
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
