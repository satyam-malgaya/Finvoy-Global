import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { IoMdSearch } from "react-icons/io";
import { RiMenuUnfold2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import logo from "/logo.png";
import data from "../data/Data.json";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showNavbar, setShowNavbar] = useState(true);

  const navigate = useNavigate();

  // -------------------------------
  // ✅ SHOW NAVBAR AFTER SCROLL + 1 SECOND
  // -------------------------------
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timer = null;
  
    const handleScroll = () => {
      const currentScroll = window.scrollY;
  
      // Scrolling DOWN → hide navbar then show after 1 sec
      if (currentScroll > lastScrollY) {
        setShowNavbar(false);
  
        clearTimeout(timer);
        timer = setTimeout(() => {
          setShowNavbar(true);
        }, 1000); // show after 1 sec
      }
  
      // Scrolling UP → show immediately
      if (currentScroll < lastScrollY) {
        setShowNavbar(true);
      }
  
      lastScrollY = currentScroll;
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  

  // -------------------------------
  // SEARCH FUNCTIONS
  // -------------------------------
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const trimmedValue = searchTerm.trim();
    if (!trimmedValue) return;

    const normalizedTerm = trimmedValue.toLowerCase();

    const matchedProduct = data.loanProducts.find((loan) =>
      loan.title.toLowerCase().startsWith(normalizedTerm)
    );

    if (matchedProduct) {
      navigate(`/loan/${matchedProduct.id}`);
      setSearchTerm("");
      setSuggestions([]);
      setMobileMenuOpen(false);
    } else {
      alert("No loan product found matching your search.");
    }
  };

  const handleInputChange = (value) => {
    setSearchTerm(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = data.loanProducts.filter((loan) =>
      loan.title.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filtered);
  };

  return (
    <nav
    className={`w-full h-20 shadow-2xl flex items-center justify-between px-5 fixed top-0 left-0 bg-white z-50 transition-all duration-500 ${
      showNavbar ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
    }`}
  >
  
      {/* Logo */}
      <div>
        <img
          onClick={() => navigate("/")}
          className="animate-[moveLR_1s_ease-in-out_infinite] w-23 h-[15vh] transform transition duration-200 ease-out outline-none hover:-translate-y-1 max-h-26 object-contain cursor-pointer"
          src={logo}
          alt="Logo"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row gap-10 text-[18px]">
        <NavLink className={styles.navlink} to="/">Home</NavLink>
        <NavLink className={styles.navlink} to="/loan-products">LoanProduct</NavLink>
        <NavLink className={styles.navlink} to="/about">About</NavLink>
        <NavLink className={styles.navlink} to="/contact">Contact</NavLink>
        <NavLink className={styles.navlink} to="/loan-calculator">Loan Calculator</NavLink>
      </div>

      {/* Desktop Search + Contact */}
      <div className="hidden md:flex flex-row gap-3 relative">
        <form onSubmit={handleSearchSubmit} className="relative flex w-72 items-center">
          <input
            value={searchTerm}
            onChange={(e) => handleInputChange(e.target.value)}
            className="w-full rounded-full bg-[#170C52] px-4 py-2 pr-10 text-white placeholder:text-white transition duration-200 outline-none hover:-translate-y-0.5 hover:bg-[#170C89]"
            type="search"
            placeholder="Search loan..."
          />
          <IoMdSearch className="pointer-events-none absolute right-4 text-[20px] text-white" />
        </form>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <ul className="absolute top-14 left-0 w-72 bg-white text-black rounded-lg shadow-xl max-h-60 overflow-y-auto z-50">
            {suggestions.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  navigate(`/loan/${item.id}`);
                  setSearchTerm("");
                  setSuggestions([]);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={() => navigate("/contact")}
          className="px-5 py-2 rounded-lg bg-[#170C52] hover:bg-[#170C89] text-white font-medium transition"
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-[28px] text-[#170C52]"
      >
        {mobileMenuOpen ? <IoClose /> : <RiMenuUnfold2Line />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-2xl z-50 md:hidden">
          <div className="flex flex-col px-5 py-4 gap-2">
            <NavLink to="/" className={styles.navlink} onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
            <NavLink to="/loan-products" className={styles.navlink} onClick={() => setMobileMenuOpen(false)}>LoanProduct</NavLink>
            <NavLink to="/about" className={styles.navlink} onClick={() => setMobileMenuOpen(false)}>About</NavLink>
            <NavLink to="/contact" className={styles.navlink} onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
            <NavLink to="/loan-calculator" className={styles.navlink} onClick={() => setMobileMenuOpen(false)}>Loan Calculator</NavLink>

            {/* Mobile Search */}
            <div className="relative mt-2">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <input
                  value={searchTerm}
                  onChange={(e) => handleInputChange(e.target.value)}
                  className="w-full rounded-full bg-[#170C52] px-4 py-2 pr-10 text-white"
                  type="search"
                  placeholder="Search loan..."
                />
                <IoMdSearch className="pointer-events-none absolute right-4 text-[20px] text-white" />
              </form>

              {suggestions.length > 0 && (
                <ul className="absolute top-14 left-0 w-full bg-white text-black rounded-lg shadow-xl max-h-60 overflow-y-auto z-50">
                  {suggestions.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => {
                        navigate(`/loan/${item.id}`);
                        setSearchTerm("");
                        setSuggestions([]);
                        setMobileMenuOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="w-full px-5 py-2 rounded-lg bg-[#170C52] text-white"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
