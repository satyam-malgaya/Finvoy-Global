import React, { useEffect, useState } from "react";
import ContactPhoto from "../assets/ContactPhoto.webp";
import { NavLink } from "react-router-dom";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [open, setOpen] = useState(false);

  // Form states for WhatsApp submit
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919399988345"; // Your number

    const message = `Hello sir, I am interested.%0A%0AName: ${name}%0APhone: ${phone}%0AMessage: ${msg}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    setOpen(false);
  };

  return (
    <div className="w-full relative pt-16">

      {/* Banner Section */}
      <div
        className="w-full bg-cover bg-center flex items-center justify-start 
        p-5 sm:p-10 min-h-[40vh] sm:min-h-[55vh] md:min-h-[70vh] lg:min-h-[80vh]"
        style={{ backgroundImage: `url(${ContactPhoto})` }}
      ></div>

      {/* APPLY BUTTON (Hides when Popup Opens) */}
      {!open && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 text-center z-40">
          <button
            onClick={() => setOpen(true)}
            className="py-3 px-5 bg-[#170C52] rounded-sm text-white"
          >
            Apply Now
          </button>
        </div>
      )}

      {/* POPUP OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center px-4 z-50"
          style={{
            background: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75))",
          }}
        >
          {/* Popup Box */}
          <div className="bg-white w-full max-w-sm rounded-lg p-6 shadow-xl relative">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-700 text-xl font-bold 
              transition-transform duration-300 hover:rotate-180"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-xl font-bold text-center mb-4 text-[#170C52]">
              Apply for Loan
            </h2>

            {/* Form */}
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
                type="number"
                placeholder="Phone Number"
                className="border p-2 rounded w-full"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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

      {/* HEADING SECTION */}
      <div className="text-center flex flex-col gap-y-3 my-10 px-4">
        <h2 className="text-lg md:text-xl font-bold text-[#443693]">
          Get In Touch
        </h2>
        <h1 className="text-2xl md:text-4xl font-bold">Contact for any query</h1>
        <p className="text-gray-500 text-md md:text-lg">
          The contact form is currently inactive. Get a functional and working
          contact form with Ajax & PHP in a few minutes.
          <br className="hidden md:block" />
          Just copy and paste the files, add a little code and you're done.
          <span className="text-[#443693] cursor-pointer"> Download Now.</span>
        </p>
      </div>

      {/* CONTACT INFO CARDS */}
      <div className="bg-gray-100 py-10 md:py-16 px-5 sm:px-10 md:px-20 lg:px-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4">

          {/* Location */}
          <div className="bg-white py-6 px-5 rounded-lg shadow-xl hover:scale-105 transition duration-300">
            <h1 className="text-xl font-semibold mb-2">Meet with us at</h1>
            <div className="flex gap-3">
              <FaLocationDot className="text-[#443693] text-5xl animate-[rotatePing_1s_linear_infinite]" />
              <p>123 First Floor, Apollo Square, Janjeerwala Square, Indore, MP 452002</p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white py-6 px-5 rounded-lg shadow-xl hover:scale-105 transition duration-300">
            <h1 className="text-xl font-semibold mb-2">Make a Call</h1>
            <div className="flex gap-3">
              <FaPhone className="text-[#443693] text-2xl mt-1 animate-[rotatePing_1s_linear_infinite]" />
              <p
                onClick={() => (window.location.href = "tel:+917000332180")}
                className="cursor-pointer"
              >
                +91 7000332180
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white py-6 px-5 rounded-lg shadow-xl hover:scale-105 transition duration-300">
            <h1 className="text-xl font-semibold mb-2">Drop A Mail</h1>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <div className="flex gap-3 mt-2">
              <MdEmail className="text-[#443693] text-3xl animate-[rotatePing_1s_linear_infinite]" />
              <p>vinayakafinserv123@gmail.com</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
