import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data/Data.json";

const resolveImage = (imageName) =>
  new URL(`../assets/${imageName}`, import.meta.url).href;

const LoanDetails = () => {
  const { loanId } = useParams();
  const loan = data.loanProducts.find(
    (item) => String(item.id) === String(loanId)
  );

  if (!loan) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
        <h2 className="text-2xl font-semibold text-red-600">
          Loan product not found
        </h2>
        <p className="text-gray-600">
          The product you are looking for may have moved or no longer exists.
        </p>
        <Link
          to="/"
          className="rounded bg-[#170C52] px-5 py-2 text-white transition hover:bg-[#0f0637]"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-white px-5 py-10 sm:px-10 lg:px-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:flex-row">
        <div className="flex-1">
          <img
            src={resolveImage(loan.image)}
            alt={loan.title}
            className="h-80 w-full rounded-lg object-cover"
          />
        </div>
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-wide text-[#777777]">
              Loan Product
            </p>
            <h1 className="text-3xl font-bold text-[#170C52]">{loan.title}</h1>
            <p className="text-base text-gray-600">{loan.shortDescription}</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-5">
            <h2 className="text-lg font-semibold text-[#170C52]">Overview</h2>
            <p className="mt-2 text-sm text-gray-700">{loan.details}</p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={loan.buttons.applyNow}
              className="rounded bg-[#170C52] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#0f0637]"
            >
              Apply Now
            </a>
            <Link
              to="/"
              className="rounded border border-[#170C52] px-5 py-2 text-sm font-medium text-[#170C52] transition hover:bg-[#170C52] hover:text-white"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanDetails;

