import React, { useMemo, useState } from 'react';
import calculatorImg from "../assets/calculatorImg.jpg";
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
} from 'recharts';


export default function LoanCalculator() {
  const [amount, setAmount] = useState(500000);
  const [years, setYears] = useState(10);
  const [annualRate, setAnnualRate] = useState(8.5);

  // Convert inputs to numbers safely
  const principal = Number(amount) || 0;
  const nYears = Number(years) || 0;
  const rateAnnual = Number(annualRate) || 0;

  // Derived values
  const monthlyRate = rateAnnual / 100 / 12;
  const totalMonths = nYears * 12;

  // Monthly payment formula
  const monthlyPayment = useMemo(() => {
    if (monthlyRate === 0) return totalMonths ? principal / totalMonths : 0;
    const r = monthlyRate;
    const n = totalMonths;
    return n === 0 ? 0 : (principal * r) / (1 - Math.pow(1 + r, -n));
  }, [principal, monthlyRate, totalMonths]);

  // Build amortization schedule (monthly) and yearly aggregates
  const { schedule, yearly } = useMemo(() => {
    const sched = [];
    let bal = principal;
    let totalInterest = 0;

    for (let m = 1; m <= totalMonths; m++) {
      const interest = bal * monthlyRate;
      const principalPaid = Math.min(monthlyPayment - interest, bal);
      const payment = principalPaid + interest;
      bal = Math.max(bal - principalPaid, 0);
      totalInterest += interest;
      sched.push({
        month: m,
        payment: Number(payment.toFixed(2)),
        principalPaid: Number(principalPaid.toFixed(2)),
        interestPaid: Number(interest.toFixed(2)),
        balance: Number(bal.toFixed(2)),
      });
    }

    // Yearly aggregation
    const yearsMap = {};
    sched.forEach((row) => {
      const year = Math.ceil(row.month / 12);
      if (!yearsMap[year]) yearsMap[year] = { year, principalPaid: 0, interestPaid: 0, payment: 0 };
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

  // Quick helpers
  function formatCurrency(x) {
    return x.toLocaleString(undefined, { maximumFractionDigits: 2 });
  }

  return (
    <div className="relative">
      <img src={calculatorImg} className=" w-full object-cover object-center  h-[35vh] sm:h-[40vh] md:h-[55vh] lg:h-[70vh] xl:h-[80vh]  max-h-[80vh]"/>
      <h1 className="absolute lg:top-50 lg:left-30 top-20 left-6 text-white text-2xl md:text-6xl font-bold ">Loan Calculat</h1>
    
    <div className="max-w-5xl mx-auto lg:my-20 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl text-center font-bold mb-8 text-[#170C52] ">Loan Calculator</h2>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <label className="flex flex-col">
            <span className="text-sm text-gray-600">Loan Amount</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-2 p-3 border border-[#443693]  rounded-lg"
              min={0}
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-600 ">Loan Tenure (years)</span>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="mt-2 p-3 border border-[#443693] rounded-lg"
              min={0}
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-600">Annual Interest Rate (%)</span>
            <input
              type="number"
              value={annualRate}
              onChange={(e) => setAnnualRate(e.target.value)}
              className="mt-2 p-3 border border-[#443693] rounded-lg"
              step="0.01"
              min={0}
            />
          </label>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <div className="text-sm text-gray-500">Monthly Payment</div>
            <div className="animate-bounce text-xl text-[#443693] font-bold mt-2">₹ {formatCurrency(monthlyPayment)}</div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <div className="text-sm text-gray-500">Total Interest</div>
            <div className="animate-bounce text-xl font-bold text-[#443693] mt-2">₹ {formatCurrency(totalInterest)}</div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <div className="text-sm text-gray-500">Total Amount Payable</div>
            <div className="animate-bounce text-xl text-[#443693] font-bold mt-2">₹ {formatCurrency(totalPaid)}</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 h-96">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-medium mb-2 text-[#443693]">Balance over time</h3>
            <ResponsiveContainer width="100%" height="85%">
              <LineChart data={schedule}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tickFormatter={(v) => (v % 12 === 0 ? `Y${v / 12}` : '')} />
                <YAxis />
                <Tooltip formatter={(value) => formatCurrency(value)} />
                <Legend />
                <Line type="monotone" dataKey="balance" name="Remaining Balance" stroke="#8884d8" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-medium mb-2 text-[#443693]">Yearly Principal vs Interest</h3>
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

        {/* Yearly table */}
        <details className="mt-4 bg-gray-50 p-4 rounded-lg">
        <summary className="cursor-pointer font-medium">Yearly amortization (show/hide)</summary>
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
                  <td className="py-2 px-3 border-b">₹ {formatCurrency(y.principalPaid)}</td>
                  <td className="py-2 px-3 border-b">₹ {formatCurrency(y.interestPaid)}</td>
                  <td className="py-2 px-3 border-b">₹ {formatCurrency(y.payment)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       </details>

        {/* Monthly details collapsible (small) */}
        <details className="mt-4 bg-gray-50 p-4 rounded-lg">
          <summary className="cursor-pointer font-medium">Monthly amortization (show/hide)</summary>
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
                    <td className="py-1 px-2 border-b">₹ {formatCurrency(r.payment)}</td>
                    <td className="py-1 px-2 border-b">₹ {formatCurrency(r.principalPaid)}</td>
                    <td className="py-1 px-2 border-b">₹ {formatCurrency(r.interestPaid)}</td>
                    <td className="py-1 px-2 border-b">₹ {formatCurrency(r.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>

        <div className="mt-6 text-sm text-gray-500">
          Note: This is a simple amortization estimator. For exact numbers confirm with your lender (processing fees, prepayment, taxes not included).
        </div>
      </div>
    </div>
    </div>
  );
}
