import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Apply Online",
    desc: "Fill out our simple loan application form with basic details.",
    icon: "https://cdn-icons-png.flaticon.com/512/992/992700.png",
  },
  {
    id: 2,
    title: "Document Submission",
    desc: "Upload or share the required documents for verification.",
    icon: "https://cdn-icons-png.flaticon.com/512/2991/2991108.png",
  },
  {
    id: 3,
    title: "Initial Screening",
    desc: "Our experts review your eligibility and loan requirements.",
    icon: "https://cdn-icons-png.flaticon.com/512/9411/9411814.png",
  },
  {
    id: 4,
    title: "Verification",
    desc: "We verify your documents and financial profile.",
    icon: "https://cdn-icons-png.flaticon.com/512/992/992651.png",
  },
  {
    id: 5,
    title: "Approval",
    desc: "Once verified, your loan gets approved instantly.",
    icon: "https://cdn-icons-png.flaticon.com/512/845/845646.png",
  },
  {
    id: 6,
    title: "Amount Disbursement",
    desc: "Your loan amount is transferred to your account.",
    icon: "https://cdn-icons-png.flaticon.com/512/2920/2920052.png",
  },
];

const LoanProcess = () => {
  return (
    <div className="w-full py-10 bg-gray-50 min-h-[96vh]">
      {/* Heading */}
      <div className="mb-10 px-4 text-center sm:mb-14">
        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
          Our Loan Process
        </h2>
        <p className="mt-2 text-sm text-gray-500 sm:text-base">
          Simplifying Your Loan Journey with Fast, Transparent & Hassle-Free Approvals
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-5 px-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6 lg:px-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl sm:p-6"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 sm:h-24 sm:w-24">
                <img
                  src={step.icon}
                  className="h-10 w-10 sm:h-12 sm:w-12"
                  alt={step.title}
                />
              </div>

              <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
                {step.title}
              </h3>
              <p className="mt-2 text-xs text-gray-600 sm:text-sm">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LoanProcess;
