import React from 'react';
import logo from "/logo.png"
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div className="flex flex-col bg-white py-10">

            {/* MAIN FOOTER GRID */}
            <div className="grid px-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-16 justify-center">

                {/* COLUMN 1 */}
                <div className="flex flex-col gap-3">
                    <NavLink to="/">
                        <img className="w-40 h-[18vh] object-contain" src={logo} alt="Logo" />
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
                    <NavLink to="/"><p>About</p></NavLink>
                    <NavLink to="/"><p>Loan Products</p></NavLink>
                    <NavLink to="/"><p>Contact Us</p></NavLink>
                </div>

                {/* COLUMN 3 */}
                <div className="flex flex-col gap-2">
                    <p className="font-semibold uppercase mb-1">Services</p>
                    <NavLink to="/"><p>MSME Loan</p></NavLink>
                    <NavLink to="/"><p>Construction Loan</p></NavLink>
                    <NavLink to="/"><p>Plot Loan</p></NavLink>
                    <NavLink to="/"><p>Loan Against Property (LAP)</p></NavLink>
                    <NavLink to="/"><p>Salaried Personal Loan</p></NavLink>
                    <NavLink to="/"><p>Gold Loan</p></NavLink>
                    <NavLink to="/"><p>Home Loan</p></NavLink>
                    <NavLink to="/"><p>Business Loan</p></NavLink>
                    <NavLink to="/"><p>Personal Loan</p></NavLink>
                </div>

                {/* COLUMN 4 */}
                <div className="flex flex-col gap-2">
                    <p className="font-semibold uppercase mb-1">Company</p>
                    <NavLink to="/"><p>About</p></NavLink>
                    <NavLink to="/"><p>Login</p></NavLink>
                    <NavLink to="/"><p>EMI Calculator</p></NavLink>
                </div>

                {/* COLUMN 5 */}
                <div className="flex flex-col gap-3">
                    <p className="font-semibold uppercase mb-1">Join Us on WhatsApp</p>
                    <p className="text-sm">
                        Receive updates, hot deals, discounts delivered<br />
                        straight to your WhatsApp daily.
                    </p>

                </div>

            </div>

            {/* BOTTOM LINE */}
            <div className="border-b border-gray-400 mt-10"></div>

            <p className="text-center mt-4 text-sm">
                © 2025 Finvoy Global | All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer;
