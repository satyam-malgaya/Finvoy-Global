import React, { useMemo, useState, useEffect } from "react";
import calculatorImg from "../assets/calculatorImg.jpg";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function LoanCalculator() {
  const navigate=useNavigate()
  const [amount, setAmount] = useState(500000);
  const [years, setYears] = useState(10);
  const [annualRate, setAnnualRate] = useState(8.5);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const principal = Number(amount) || 0;
  const nYears = Number(years) || 0;
  const rateAnnual = Number(annualRate) || 0;

  const monthlyRate = rateAnnual / 100 / 12;
  const totalMonths = nYears * 12;

  const monthlyPayment = useMemo(() => {
    if (monthlyRate === 0) return totalMonths ? principal / totalMonths : 0;
    const r = monthlyRate;
    const n = totalMonths;
    return n === 0 ? 0 : (principal * r) / (1 - Math.pow(1 + r, -n));
  }, [principal, monthlyRate, totalMonths]);

  const { schedule, yearly } = useMemo(() => {
    const sched = [];
    let bal = principal;

    for (let m = 1; m <= totalMonths; m++) {
      const interest = bal * monthlyRate;
      const principalPaid = Math.min(monthlyPayment - interest, bal);
      const payment = principalPaid + interest;
      bal = Math.max(bal - principalPaid, 0);

      sched.push({
        month: m,
        payment: Number(payment.toFixed(2)),
        principalPaid: Number(principalPaid.toFixed(2)),
        interestPaid: Number(interest.toFixed(2)),
        balance: Number(bal.toFixed(2)),
      });
    }

    const yearsMap = {};
    sched.forEach((row) => {
      const year = Math.ceil(row.month / 12);
      if (!yearsMap[year])
        yearsMap[year] = { year, principalPaid: 0, interestPaid: 0, payment: 0 };

      yearsMap[year].principalPaid += row.principalPaid;
      yearsMap[year].interestPaid += row.interestPaid;
      yearsMap[year].payment += row.payment;
    });

    const yearlyArr = Object.values(yearsMap).map((y) => ({
      year: `Year ${y.year}`,
      principalPaid: Number(y.principalPaid.toFixed(2)),
      interestPaid: Number(y.interestPaid.toFixed(2)),
      payment: Number(y.payment.toFixed(2)),
    }));

    return { schedule: sched, yearly: yearlyArr };
  }, [principal, monthlyRate, totalMonths, monthlyPayment]);

  const totalInterest = schedule.reduce((s, r) => s + r.interestPaid, 0);
  const totalPaid = schedule.reduce((s, r) => s + r.payment, 0);

  function formatCurrency(x) {
    return x.toLocaleString(undefined, { maximumFractionDigits: 2 });
  }

  return (
    <div className="w-full relative pt-20">

      {/* 🔵 Contact-Style Banner */}
      <div
        className="
          w-full 
          bg-cover bg-center 
          flex 
          items-center 
          justify-start
          p-5 
          sm:p-10
          min-h-[40vh]       
          sm:min-h-[55vh]   
          md:min-h-[70vh] 
          lg:min-h-[80vh]
          relative
        "
        style={{ backgroundImage: `url(${calculatorImg})` }}
      >
        {/* <div
          className="
            w-[80%] sm:w-[55%] md:w-[40%]
            bg-black/50 
            backdrop-blur-sm
            p-5 sm:p-8 
            rounded-lg
            flex flex-col gap-4
          "
        >
          <h1
            className="text-white font-bold drop-shadow-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Loan Calculator
          </h1>

          <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
            Calculate EMI, interest, and loan repayment details instantly.
          </p>

          <button
            onClick={() => navigate('/contact')}
            className="
              hover:-translate-y-1 transform duration-300 ease-out
              w-fit 
              px-5 py-2 
              font-semibold 
              rounded-md
              shadow-lg 
              bg-white text-black
              hover:bg-[#170C69] hover:text-white
            "
          >
            Contact Us
          </button>
        </div> */}
      </div>

      {/* Main Loan Calculator */}
      <div className="max-w-5xl mx-auto lg:my-20 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl text-center font-bold mb-8 text-[#170C52]">
            Loan Calculator
          </h2>

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <label className="flex flex-col">
              <span className="text-sm text-gray-600">Loan Amount</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-2 p-3 border border-[#443693] rounded-lg"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-gray-600">Loan Tenure (years)</span>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                className="mt-2 p-3 border border-[#443693] rounded-lg"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-gray-600">Annual Interest (%)</span>
              <input
                type="number"
                value={annualRate}
                onChange={(e) => setAnnualRate(e.target.value)}
                className="mt-2 p-3 border border-[#443693] rounded-lg"
                step="0.01"
              />
            </label>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <div className="text-sm text-gray-500">Monthly Payment</div>
              <div className="animate-bounce text-xl text-[#443693] font-bold mt-2">
                ₹ {formatCurrency(monthlyPayment)}
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <div className="text-sm text-gray-500">Total Interest</div>
              <div className="animate-bounce text-xl text-[#443693] font-bold mt-2">
                ₹ {formatCurrency(totalInterest)}
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <div className="text-sm text-gray-500">Total Amount Payable</div>
              <div className="animate-bounce text-xl text-[#443693] font-bold mt-2">
                ₹ {formatCurrency(totalPaid)}
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 h-96">
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-medium mb-2 text-[#443693]">
                Balance over time
              </h3>
              <ResponsiveContainer width="100%" height="85%">
                <LineChart data={schedule}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="month"
                    tickFormatter={(v) => (v % 12 === 0 ? `Y${v / 12}` : "")}
                  />
                  <YAxis />
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="balance"
                    name="Remaining Balance"
                    stroke="#8884d8"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-medium mb-2 text-[#443693]">
                Yearly Principal vs Interest
              </h3>
              <ResponsiveContainer width="100%" height="85%">
                <BarChart data={yearly}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Legend />
                  <Bar dataKey="principalPaid" name="Principal" />
                  <Bar dataKey="interestPaid" name="Interest" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Yearly Table */}
          <details className="mt-4 bg-gray-50 p-4 rounded-lg">
            <summary className="cursor-pointer font-medium">
              Yearly amortization (show/hide)
            </summary>
            <div className="overflow-x-auto bg-white rounded-lg shadow p-4">
              <h3 className="font-medium mb-4">Yearly Payment Breakdown</h3>
              <table className="min-w-full text-left">
                <thead>
                  <tr>
                    <th className="py-2 px-3 border-b">Year</th>
                    <th className="py-2 px-3 border-b">Principal Paid</th>
                    <th className="py-2 px-3 border-b">Interest Paid</th>
                    <th className="py-2 px-3 border-b">Total Payment</th>
                  </tr>
                </thead>
                <tbody>
                  {yearly.map((y) => (
                    <tr key={y.year} className="odd:bg-gray-50">
                      <td className="py-2 px-3 border-b">{y.year}</td>
                      <td className="py-2 px-3 border-b">
                        ₹ {formatCurrency(y.principalPaid)}
                      </td>
                      <td className="py-2 px-3 border-b">
                        ₹ {formatCurrency(y.interestPaid)}
                      </td>
                      <td className="py-2 px-3 border-b">
                        ₹ {formatCurrency(y.payment)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>

          {/* Monthly Table */}
          <details className="mt-4 bg-gray-50 p-4 rounded-lg">
            <summary className="cursor-pointer font-medium">
              Monthly amortization (show/hide)
            </summary>
            <div className="mt-3 max-h-64 overflow-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr>
                    <th className="py-2 px-3 border-b">Month</th>
                    <th className="py-2 px-3 border-b">Payment</th>
                    <th className="py-2 px-3 border-b">Principal</th>
                    <th className="py-2 px-3 border-b">Interest</th>
                    <th className="py-2 px-3 border-b">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((r) => (
                    <tr key={r.month} className="odd:bg-white even:bg-gray-50">
                      <td className="py-1 px-2 border-b">{r.month}</td>
                      <td className="py-1 px-2 border-b">
                        ₹ {formatCurrency(r.payment)}
                      </td>
                      <td className="py-1 px-2 border-b">
                        ₹ {formatCurrency(r.principalPaid)}
                      </td>
                      <td className="py-1 px-2 border-b">
                        ₹ {formatCurrency(r.interestPaid)}
                      </td>
                      <td className="py-1 px-2 border-b">
                        ₹ {formatCurrency(r.balance)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>

          <div className="mt-6 text-sm text-gray-500">
            Note: This is a simple amortization estimator. Additional bank fees
            & taxes may apply.
          </div>
        </div>
      </div>
    </div>
  );
}
