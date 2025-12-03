import React from 'react';
import logo from "/logo.png";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <div className="flex flex-col bg-[#170C52] text-white py-10">

            {/* MAIN FOOTER GRID */}
            <div className=" grid px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40 
                            grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 
                            gap-10 sm:gap-14 lg:gap-16 ">

                {/* COLUMN 1 */}
                <div className="flex flex-col gap-3">
                    <NavLink to="/">
                        <img
                            className="animate-[moveLR_1s_ease-in-out_infinite] invert brightness-50 saturate-0 w-36 text-white sm:w-40 h-[18vh] object-contain "
                            src={logo}
                            alt="Logo"
                        />
                    </NavLink>

                    <NavLink to="/" className="flex gap-2">
                        <FaLocationDot className="animate-[shake_0.6s_ease-in-out_infinite] text-xl text-red-600 mt-1" />
                        <p className="text-sm">
                            123 First Floor, Apollo Square,<br />
                            Janjeerwala Square, Race Course Road,<br />
                            Indore, Madhya Pradesh - 452002
                        </p>
                    </NavLink>

                    <NavLink to="/" className="flex gap-2">
                        <FaPhone className="animate-[shake_0.6s_ease-in-out_infinite] text-xl text-blue-600 mt-1" />
                        <p className="text-sm">+91 7000332180, 0731 4981501</p>
                    </NavLink>

                    <NavLink to="/" className="flex gap-2">
                        <MdEmail className="animate-[shake_0.6s_ease-in-out_infinite] text-xl text-red-600 mt-1" />
                        <p className="text-sm">vinayakafinserv123@gmail.com</p>
                    </NavLink>

                    <div className="flex gap-4 mt-2">
                        <a href="https://facebook.com" target="_blank">
                        <FaFacebookF className="animate-[rotatePing_1s_linear_infinite] text-blue-600 text-2xl hover:text-blue-700 cursor-pointer" />
                        </a>
                        <a href="https://Instagram.com" target="_blank">
                        <FaInstagram className="animate-[rotatePing_1s_linear_infinite] text-pink-600 text-2xl hover:text-pink-700 cursor-pointer" />
                        </a>
                    </div>
                </div>

                {/* COLUMN 2 */}
                <div className="flex flex-col gap-2">
                    <p className="font-semibold uppercase mb-1 text-white underline">Supports</p>
                    <NavLink to="/about"><p className="text-sm hover:underline">About</p></NavLink>
                    <NavLink to="/loan-products"><p className="text-sm hover:underline">Loan Products</p></NavLink>
                    <NavLink to="/contact"><p className="text-sm hover:underline">Contact Us</p></NavLink>
                </div>

                {/* COLUMN 3 */}
                <div className="flex flex-col gap-2">
                    <p className="font-semibold uppercase mb-1 text-white underline">Services</p>
                    <NavLink to="/LoanPorduct"><p className="text-sm hover:underline">MSME Loan</p></NavLink>
                    <NavLink to="/LoanPorduct"><p className="text-sm hover:underline">Construction Loan</p></NavLink>
                    <NavLink to="/LoanPorduct"><p className="text-sm hover:underline">Plot Loan</p></NavLink>
                    <NavLink to="/LoanPorduct"><p className="text-sm hover:underline">Loan Against Property (LAP)</p></NavLink>
                    <NavLink to="/LoanPorduct"><p className="text-sm hover:underline">Salaried Personal Loan</p></NavLink>
                    <NavLink to="/LoanPorduct"><p className="text-sm hover:underline">Gold Loan</p></NavLink>
                    <NavLink to="/LoanPorduct"><p className="text-sm hover:underline">Home Loan</p></NavLink>
                    <NavLink to="/LoanPorduct"><p className="text-sm hover:underline">Business Loan</p></NavLink>
                    <NavLink to="/LoanPorduct"><p className="text-sm hover:underline">Personal Loan</p></NavLink>

                </div>

             
                <div className="flex flex-col gap-2">
                    <p className="font-semibold uppercase mb-1 text-white underline">Company</p>
                    <NavLink to="/about"><p className="text-sm hover:underline">About</p></NavLink>
                    <NavLink to="/"><p className="text-sm hover:underline">Login</p></NavLink>
                    <NavLink to="/loan-calculator"><p className="hover:underline text-sm">EMI Calculator</p></NavLink>
                </div>

                
                <div className="flex flex-col gap-3">
                    <p className="font-semibold uppercase mb-1 text-white underline">Join Us on WhatsApp</p>
                    <p className="text-sm leading-5">
                        Receive updates, hot deals, discounts delivered
                        straight to your WhatsApp daily.
                    </p>
                        <FaWhatsapp  className="animate-[rotatePing_1s_linear_infinite] text-green-600 text-2xl hover:text-green-700 cursor-pointer" />
                </div>

            </div>

         
            <div className="border-b border-gray-400 mt-10"></div>

            
            <p className="text-center mt-4 text-sm">
                © 2025 Finvoy Global | All Rights Reserved.
            </p>
        </div>
    );
}

export default Footer;
