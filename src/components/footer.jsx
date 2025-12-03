import React from 'react';
import logo from "/logo.png";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <div className="flex flex-col bg-white py-10">

            {/* MAIN FOOTER GRID */}
            <div className="grid px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40 
                            grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 
                            gap-10 sm:gap-14 lg:gap-16">

                {/* COLUMN 1 */}
                <div className="flex flex-col gap-3">
                    <NavLink to="/">
                        <img
                            className="w-36 sm:w-40 h-[18vh] object-contain "
                            src={logo}
                            alt="Logo"
                        />
                    </NavLink>

                    <NavLink to="/" className="flex gap-2">
                        <FaLocationDot className="text-red-600 mt-1" />
                        <p className="text-sm">
                            123 First Floor, Apollo Square,<br />
                            Janjeerwala Square, Race Course Road,<br />
                            Indore, Madhya Pradesh - 452002
                        </p>
                    </NavLink>

                    <NavLink to="/" className="flex gap-2">
                        <FaPhone className="text-blue-600 mt-1" />
                        <p className="text-sm">+91 7000332180, 0731 4981501</p>
                    </NavLink>

                    <NavLink to="/" className="flex gap-2">
                        <MdEmail className="text-red-600 mt-1" />
                        <p className="text-sm">vinayakafinserv123@gmail.com</p>
                    </NavLink>

                    <div className="flex gap-4 mt-2">
                        <FaFacebookF className="text-blue-600 text-2xl hover:text-blue-700 cursor-pointer" />
                        <FaInstagram className="text-pink-600 text-2xl hover:text-pink-700 cursor-pointer" />
                    </div>
                </div>

                {/* COLUMN 2 */}
                <div className="flex flex-col gap-2">
                    <p className="font-semibold uppercase mb-1">Supports</p>
                    <NavLink to="/about"><p className="text-sm">About</p></NavLink>
                    <NavLink to="/loan-products"><p className="text-sm">Loan Products</p></NavLink>
                    <NavLink to="/contact"><p className="text-sm">Contact Us</p></NavLink>
                </div>

                {/* COLUMN 3 */}
                <div className="flex flex-col gap-2">
                    <p className="font-semibold uppercase mb-1">Services</p>
                    <NavLink to="/loan-products"><p className="text-sm">MSME Loan</p></NavLink>
                    <NavLink to="/loan-products"><p className="text-sm">Construction Loan</p></NavLink>
                    <NavLink to="/loan-products"><p className="text-sm">Plot Loan</p></NavLink>
                    <NavLink to="/loan-products"><p className="text-sm">Loan Against Property (LAP)</p></NavLink>
                    <NavLink to="/loan-products"><p className="text-sm">Salaried Personal Loan</p></NavLink>
                    <NavLink to="/loan-products"><p className="text-sm">Gold Loan</p></NavLink>
                    <NavLink to="/loan-products"><p className="text-sm">Home Loan</p></NavLink>
                    <NavLink to="/loan-products"><p className="text-sm">Business Loan</p></NavLink>
                    <NavLink to="/loan-products"><p className="text-sm">Personal Loan</p></NavLink>
                </div>

                {/* COLUMN 4 */}
                <div className="flex flex-col gap-2">
                    <p className="font-semibold uppercase mb-1">Company</p>
                    <NavLink to="/about"><p className="text-sm">About</p></NavLink>
                    <NavLink to="/"><p className="text-sm">Login</p></NavLink>
                    <NavLink to="/loan-calculator"><p className="text-sm">EMI Calculator</p></NavLink>
                </div>

                {/* COLUMN 5 */}
                <div className="flex flex-col gap-3">
                    <p className="font-semibold uppercase mb-1">Join Us on WhatsApp</p>
                    <p className="text-sm leading-5">
                        Receive updates, hot deals, discounts delivered
                        straight to your WhatsApp daily.
                    </p>
                        <FaWhatsapp onClick={()=>{
                              window.open("https://wa.me/7987410249", "_blank");
                        }} className="text-green-600 text-2xl hover:text-green-700 cursor-pointer" />
                </div>

            </div>

            {/* DIVIDER */}
            <div className="border-b border-gray-400 mt-10"></div>

            {/* COPYRIGHT */}
            <p className="text-center mt-4 text-sm">
                © 2025 Finvoy Global | All Rights Reserved.
            </p>
        </div>
    );
}

export default Footer;
