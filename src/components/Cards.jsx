import React from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "../data/Data.json";
import { useNavigate } from "react-router-dom";
const Cards = () => {
    const navigate=useNavigate()
  const resolveImage = (imageName) =>
    new URL(`../assets/${imageName}`, import.meta.url).href;
  return (
    
    <div className="grid grid-cols-1 gap-6 px-3 py-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
      {data.loanProducts.map((loan, index) => (
        <div
          key={index}
          className="flex h-130 w-full flex-col overflow-hidden rounded-lg border border-black/10 shadow-md"
        >
          <img
            src={resolveImage(loan.image)}
            alt={loan.title}
            className="h-56 w-full object-cover"
          />
          <div className="flex flex-1 flex-col gap-3 px-5 py-4">
            <h3 className="text-xl font-semibold text-[#170C52]">
              {loan.title}
            </h3>
            <p className="text-sm text-gray-600">{loan.shortDescription}</p>
            <p className="text-sm text-gray-500">{loan.details}</p>
            <div className="mt-auto flex flex-wrap justify-between gap-3">
              <Link
                to={`/loan/${loan.id}`}
                className="rounded border border-[#170C52] px-4 py-2 text-sm font-medium text-[#170C52] transition transform outline-none duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#170C52] hover:text-white"
              >
                Know More
              </Link>
              <Link
               to="/contact"
                // href={loan.buttons.applyNow}
                className="rounded bg-[#170C52] px-4 py-2 text-sm font-medium text-white transform outline-none transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#0f0637]"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      ))}
       
    </div>
  );
};

export default Cards;
