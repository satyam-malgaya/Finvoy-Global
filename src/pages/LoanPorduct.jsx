import React from "react";
import img from "../assets/m-2.avif";
import data from "../data/Data.json";
import { Link } from "react-router-dom";

const LoanPorduct = () => {
    const resolveImage = (imageName) =>
        new URL(`../assets/${imageName}`, import.meta.url).href;
  return (
    <div>
      <div className="relative w-full min-h-[45vh] overflow-hidden sm:min-h-[55vh] lg:min-h-[70vh]">
        <img
          className="h-[70vh] w-full object-cover object-center"
          src={img}
          alt="Sorry the image is not showing"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
            Our Product
          </h1>
          <p className="max-w-2xl text-sm text-white sm:text-base">
            We offer a wide range of products to help you manage your finances effectively.
          </p>
        </div>
      </div>

      {/* PRODUCT CARDS */}
      <div className="w-full bg-white py-14 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {data.loanProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden 
              group cursor-pointer transform hover:-translate-y-1 
              animate-fadeUp"
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={resolveImage(item.image)}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="text-lg font-semibold text-[#170C52] mb-4">
                  {item.title}
                </h2>

                <div className="flex gap-4">
                  <Link 
                  to={`/loan/${item.id}`}
                  className="rounded border border-[#170C52] px-4 py-2 text-sm font-medium text-[#170C52] transition transform outline-none duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#170C52] hover:text-white"   >
                    KNOW MORE
                  </Link>

                  <button className="w-1/2 py-2 rounded-md bg-[#170C52] text-white font-medium hover:bg-[#0e0636] transition-all duration-300">
                    APPLY NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanPorduct;
