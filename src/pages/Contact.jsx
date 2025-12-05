import React, { useEffect, useState } from "react";
import ContactPhoto from "../assets/ContactPhoto.webp";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [open, setOpen] = useState(false);

  // Form States
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const whatsappNumber = "917987410249";
  
    const message = `Hello sir, I am interested.
  
  Name: ${name}
  Phone: ${phone}
  Message: ${msg}`;
  
  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // Force desktop to open WhatsApp Web URL
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  
  const url = isMobile
    ? `https://wa.me/${whatsappNumber}?text=${encodedMessage}` // Mobile app
    : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`; // Desktop web
  
  window.open(url, "_blank");
  
  // Clear form fields
  setName("");
  setPhone("");
  setMsg("");
  setOpen(false);
  };
  
  
  
  
  

  return (
    <div className="w-full relative pt-16">

      {/* Banner */}
      <div
        className="w-full bg-cover bg-center flex items-center justify-start 
        p-5 sm:p-10 min-h-[40vh] sm:min-h-[55vh] md:min-h-[70vh] lg:min-h-[80vh]"
        style={{ backgroundImage: `url(${ContactPhoto})` }}
      ></div>

      {/* APPLY NOW BUTTON */}
      {!open && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 text-center z-40">
          <button
            onClick={() => setOpen(true)}
            className="py-3 px-5 bg-[#ff7113] rounded-md text-white font-bold animate-bounce"
          >
            Apply Now
          </button>
        </div>
      )}

      {/* POPUP FORM */}
      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center px-4 z-50"
          style={{
            background: "rgba(0,0,0,0.75)",
          }}
        >
          <div className="bg-white w-full max-w-sm rounded-lg p-6 shadow-xl relative">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-700 text-xl font-bold 
              transition-transform duration-300 hover:rotate-180"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-center mb-4 text-[#170C52]">
              Apply for Loan
            </h2>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border p-2 rounded w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="border p-2 rounded w-full"
                value={phone}
                maxLength={10}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  if (value.length <= 10) setPhone(value);
                }}
                required
              />

              <textarea
                placeholder="Message"
                className="border p-2 rounded w-full"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>

              <button
                type="submit"
                className="bg-[#170C52] py-2 rounded text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* HEADING */}
      <div className="text-center flex flex-col gap-y-3 my-10 px-4">
        <h2 className="text-lg md:text-xl font-bold text-[#443693]">
          Get In Touch
        </h2>
        <h1 className="text-2xl md:text-4xl font-bold">Contact for any query</h1>
        <p className="text-gray-500 text-md md:text-lg">
          Fill the form and we will contact you soon.
        </p>
      </div>

      {/* CONTACT CARDS */}
      <div className="bg-gray-100 py-10 md:py-16 px-5 sm:px-10 md:px-20 lg:px-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4">

          <div className="bg-white py-6 px-5 rounded-lg shadow-xl hover:scale-105 transition duration-300">
            <h1 className="text-xl font-semibold mb-2">Meet with us</h1>
            <div className="flex gap-3">
              <FaLocationDot className="text-[#443693] text-5xl" />
              <p>123 First Floor, Apollo Square, Indore, MP 452002</p>
            </div>
          </div>

          <div className="bg-white py-6 px-5 rounded-lg shadow-xl hover:scale-105 transition duration-300">
            <h1 className="text-xl font-semibold mb-2">Call Us</h1>
            <div className="flex gap-3">
              <FaPhone className="text-[#443693] text-3xl mt-1" />
              <p className="cursor-pointer">+91 7000332180</p>
            </div>
          </div>

          <div className="bg-white py-6 px-5 rounded-lg shadow-xl hover:scale-105 transition duration-300">
            <h1 className="text-xl font-semibold mb-2">Email Us</h1>
            <div className="flex gap-3">
              <MdEmail className="text-[#443693] text-3xl" />
              <p>vinayakafinserv123@gmail.com</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
