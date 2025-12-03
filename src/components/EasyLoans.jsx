import React from 'react'

const EasyLoans = () => {
  return (
    <div className="relative w-full min-h-[50vh] overflow-hidden sm:min-h-[60vh] lg:min-h-[70vh]">
      {/* Background Image */}
      <img
        className="h-full w-full object-cover object-center"
        src="https://www.vinayakafinserv.com/static/assets/img/banner-2.png"
        alt="image"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />

      {/* Text Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white sm:px-10">
        <h1 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-[3.2rem]">
          Easy Loans, Bright Future
        </h1>
        <p className="mb-6 max-w-2xl text-sm sm:text-base lg:text-lg">
          At Vinayaka Finserv, we make your loan journey simple, transparent, and
          hassle-free helping you achieve your dreams faster.
        </p>
        <a
          href="https://wa.me/7987410249"
          className="rounded-lg bg-[#170C89] px-5 py-3 text-sm font-semibold transition hover:bg-green-700 sm:text-base"
        >
          Join Us On WhatsApp
        </a>
      </div>
    </div>
  );
}

export default EasyLoans
