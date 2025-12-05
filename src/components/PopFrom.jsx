import React, { useState } from "react";

const PopFrom = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

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
    <>
      {!open && (
       <div className="fixed bottom-5 left-1/2 -translate-x-1/2 text-center z-[9999]">
       <button
         onClick={() => setOpen(true)}
         className="py-3 px-5 bg-[#ff7113] rounded-md text-white font-bold shadow-lg animate-bounce"
       >
         Apply Now
       </button>
     </div>
     
      )}

      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center px-4 z-[99999]"
          style={{
            background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55))",
          }}
        >
          <div className="bg-white w-full max-w-sm rounded-lg p-6 shadow-xl relative">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-700 text-xl font-bold 
                transition-transform duration-300 hover:rotate-90 hover:scale-110"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-center mb-4 text-[#170C52]">
              Apply for Loan
            </h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 rounded w-full"
                required
              />

              <input
                type="number"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border p-2 rounded w-full"
                required
              />

              <textarea
                placeholder="Message"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="border p-2 rounded w-full"
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
    </>
  );
};

export default PopFrom;
