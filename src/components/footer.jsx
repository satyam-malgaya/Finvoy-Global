import React from 'react';
import logo from "/logo.png"

import { NavLink } from "react-router-dom";
function Footer() {
    return (
        <div>
            <div>
                <NavLink to="/">
                    <img src={logo} className="h-12 w-34 " />
                </NavLink>
                <NavLink to="/">
                    <p>123 First Floor, Apollo Square, Janjeerwala Square, Race Course Road, Indore, Madhya Pradesh - 452002 </p>
                </NavLink>
                <NavLink to="/">
                    <p>+91 7000332180, 0731 4981501</p>
                </NavLink>
                <NavLink to="/">
                    <p>vinayakafinserv123@gmail.com</p>
                </NavLink>
            </div>
            <div>
                <NavLink to="/">
                    <p>Supports</p>
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
            <div>
                <NavLink to="/">
                    <p>Services</p>
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
            <div>
                <NavLink to="/">
                    <p>Company</p>
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
            <div>
                <NavLink to="/">
                    <p>Join Us on WhatsApp</p>
                </NavLink>
                <NavLink to="/">
                    <p>Receive updates, hot deals, discounts get straignt in your WhatsApp daily</p>
                </NavLink>
                <NavLink to="/">
                    <img src="" />
                </NavLink>
            </div>
            <div>

            </div>
            <p>
                © 2025 Vinayaka Finserv | All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer