import React from 'react';
import logo from "/logo.png"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div className="flex flex-col">
        <div class="flex gap-x-20 justify-center">
            <div className=" flex flex-col  gap-3 ">
                <NavLink to="/">
                <img className="w-39 h-[20vh]" src={logo} alt="Sorry the logo was not show" />
                </NavLink>
                <NavLink to="/" className="flex">
                  <FaLocationDot className="text-red-600 text-x mt-1" />
                    <p>123 First Floor, Apollo Square,<br/> Janjeerwala Square, Race Course <br/> Road, Indore, Madhya Pradesh -<br/> 452002 </p>
                </NavLink>
                <NavLink to="/" className="flex">
                    <FaPhone className="text-blue-600 text-x mt-1 " />
                    <p>+91 7000332180, 0731 4981501</p>
                </NavLink>
                <NavLink to="/" className="flex gap-1">
                    <MdEmail className="text-red-600 text-x mt-1" />
                    <p>vinayakafinserv123@gmail.com</p>
                </NavLink>
                <NavLink to="/" className="flex gap-2 mt-2">
                    <FaFacebookF className="text-blue-600 text-5xl hover:text-blue-700" />
                    <FaInstagram className="text-pink-600 text-5xl hover:text-pink-700" />
                </NavLink>
            </div>
            <div className=" flex flex-col  gap-2">
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
            <div className=" flex flex-col  gap-2">
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
            <div className=" flex flex-col  gap-2">
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
            <div className=" flex flex-col  gap-2">
                <NavLink to="/">
                    <p className="font-semibold uppercase">Join Us on WhatsApp</p>
                </NavLink>
                <NavLink to="/">
                    <p>Receive updates, hot deals, <br/>discounts get straignt in your <br/>WhatsApp daily</p>
                </NavLink>
                <NavLink to="/" className="mt-5">
                    <img  className="w-30 h-[30vh]" src="https://www.vinayakafinserv.com/static/assets/img/whatsapp.png" />
                </NavLink>
            </div>
        </div>
            <div class="border-b border-gray-500 mt-20"></div>
            <p class="text-center mt-4">
                © 2025 Vinayaka Finserv | All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer