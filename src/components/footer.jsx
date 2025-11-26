import React from 'react';
import logo from "/logo.png"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div className="flex flex-col bg-white px-4 py-10">
        <div className="flex flex-col gap-10 md:flex-row md:flex-wrap md:gap-x-16 md:justify-center max-w-6xl w-full mx-auto">
            <div className=" flex flex-col gap-3 items-center md:items-start text-center md:text-left">
                <NavLink to="/">
                <img className="w-40 h-auto" src={logo} alt="Sorry the logo was not show" />
                </NavLink>
                <NavLink to="/" className="flex items-start gap-2">
                  <FaLocationDot className="text-red-600 text-xl mt-1" />
                    <p>123 First Floor, Apollo Square,<br/> Janjeerwala Square, Race Course <br/> Road, Indore, Madhya Pradesh -<br/> 452002 </p>
                </NavLink>
                <NavLink to="/" className="flex items-center gap-2">
                    <FaPhone className="text-blue-600 text-xl mt-1 " />
                    <p>+91 7000332180, 0731 4981501</p>
                </NavLink>
                <NavLink to="/" className="flex items-center gap-2">
                    <MdEmail className="text-red-600 text-xl mt-1" />
                    <p>vinayakafinserv123@gmail.com</p>
                </NavLink>
                <NavLink to="/" className="flex gap-4 mt-2">
                    <FaFacebookF className="text-blue-600 text-3xl hover:text-blue-700" />
                    <FaInstagram className="text-pink-600 text-3xl hover:text-pink-700" />
                </NavLink>
            </div>
            <div className=" flex flex-col  gap-2 text-center md:text-left">
                <NavLink to="/">
                    <p className="font-semibold uppercase">Supports</p>
                </NavLink>
                <NavLink to="/">
                    <p>About</p>
                </NavLink>
                <NavLink to="/">
                    <p>Loan Products</p>
                </NavLink>
                <NavLink to="/">
                    <p>Contact Us</p>
                </NavLink>
            </div>
            <div className=" flex flex-col  gap-2 text-center md:text-left">
                <NavLink to="/">
                    <p className="font-semibold uppercase">Services</p>
                </NavLink>
                <NavLink to="/">
                    <p>MSME Loan</p>
                </NavLink>
                <NavLink to="/">
                    <p>Construction Loan</p>
                </NavLink>
                <NavLink to="/">
                    <p>Plot Loan</p>
                </NavLink>
                <NavLink to="/">
                    <p>Loan Against Property (LAP)</p>
                </NavLink>
                <NavLink to="/">
                    <p>Salaried Personal Loan</p>
                </NavLink>
                <NavLink to="/">
                    <p>Gold Loan</p>
                </NavLink>
                <NavLink to="/">
                    <p>Home loan</p>
                </NavLink>
                <NavLink to="/">
                    <p>Business Loan</p>
                </NavLink>
                <NavLink to="/">
                    <p>Personal Loan</p>
                </NavLink>
            </div>
            <div className=" flex flex-col  gap-2 text-center md:text-left">
                <NavLink to="/">
                    <p className="font-semibold uppercase">COMPANY</p>
                </NavLink>
                <NavLink to="/">
                    <p>About</p>
                </NavLink>
                <NavLink to="/">
                    <p>Login</p>
                </NavLink>
                <NavLink to="/">
                    <p>EMI Calculator</p>
                </NavLink>
            </div>
            <div className=" flex flex-col  gap-2 text-center md:text-left items-center md:items-start">
                <NavLink to="/">
                    <p className="font-semibold uppercase">Join Us on WhatsApp</p>
                </NavLink>
                <NavLink to="/">
                    <p>Receive updates, hot deals, <br/>discounts get straignt in your <br/>WhatsApp daily</p>
                </NavLink>
                <NavLink to="/" className="mt-5">
                    <img  className="w-32 h-auto" src="https://www.vinayakafinserv.com/static/assets/img/whatsapp.png" />
                </NavLink>
            </div>
        </div>
            <div className="border-b border-gray-500 mt-12"></div>
            <p className="text-center mt-4 text-sm md:text-base">
                © 2025 Vinayaka Finserv | All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer