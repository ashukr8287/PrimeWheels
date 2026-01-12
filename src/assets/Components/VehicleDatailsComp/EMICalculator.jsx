import React, { useState, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function EMICalculator({ vehicle }) {
  // Initial values setup
  const initialLoan = vehicle?.price
    ? Math.round(vehicle.price * 0.8)
    : 1000000;

  const [loanAmount, setLoanAmount] = useState(initialLoan);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(4);

  // EMI logic
  const principal = loanAmount;
  const months = tenure * 12;
  const monthlyRate = interestRate / 100 / 12;

  const emi = useMemo(() => {
    if (principal <= 0 || monthlyRate <= 0) return 0;
    const emiVal =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emiVal);
  }, [principal, months, monthlyRate]);

  const totalPayment = emi * months;
  const totalInterest = Math.max(0, totalPayment - principal);

  const data = [
    { name: "Principal", value: principal },
    { name: "Interest", value: totalInterest },
  ];

  const COLORS = ["#FEE2E2", "#EF4444"];

  const getBackgroundSize = (val, min, max) => {
    return { backgroundSize: `${((val - min) * 100) / (max - min)}% 100%` };
  };

  return (
    <section className="bg-white p-6 my-4 rounded-xl shadow-sm border border-gray-100 font-sans">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800">EMI Calculator</h2>
        <div className="flex gap-1 mt-1">
          <div className="w-10 h-1 bg-[#B71C1C] rounded-full"></div>
          <div className="w-3 h-1 bg-[#B71C1C] rounded-full"></div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-8 gap-4">
        {/* Sliders Section */}
        <div className="space-y-10">
          {/* Loan Amount */}
          <div>
            <div className="flex justify-between mb-4 text-sm font-semibold">
              <span className="text-gray-500">Loan Amount:</span>
              <span className="text-gray-900 text-base">
                ₹{loanAmount.toLocaleString("en-IN")}
              </span>
            </div>
            <input
              type="range"
              min={100000}
              max={vehicle?.price || 5000000}
              step="10000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(+e.target.value)}
              style={getBackgroundSize(
                loanAmount,
                100000,
                vehicle?.price || 5000000
              )}
              className="custom-red-slider"
            />
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between mb-4 text-sm font-semibold">
              <span className="text-gray-500">Interest Rate (P.A.):</span>
              <span className="text-gray-900 text-base">
                {interestRate}%
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(+e.target.value)}
              style={getBackgroundSize(interestRate, 1, 20)}
              className="custom-red-slider"
            />
          </div>

          {/* Tenure */}
          <div>
            <div className="flex justify-between mb-4 text-sm font-semibold">
              <span className="text-gray-500">Loan Tenure:</span>
              <span className="text-gray-900 text-base">{tenure} years</span>
            </div>
            <input
              type="range"
              min="1"
              max="7"
              step="1"
              value={tenure}
              onChange={(e) => setTenure(+e.target.value)}
              style={getBackgroundSize(tenure, 1, 7)}
              className="custom-red-slider"
            />
          </div>

          {/* EMI Box */}
          <div className="bg-[#FFF5F5] border border-red-100 rounded-xl p-6">
            <p className="text-[#EF4444] text-xs font-bold mb-1">
              Monthly EMI
            </p>
            <h3 className="text-2xl font-semibold text-[#B71C1C]">
              ₹{emi.toLocaleString("en-IN")}
            </h3>
          </div>
        </div>

        {/* Chart Section */}
        <div className="flex flex-col items-center">
          {/* IMPORTANT: hidden first, then lg:block */}
       <div className="w-full relative border-none hidden lg:block">
  <ResponsiveContainer width="100%" aspect={2}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="100%"
        startAngle={180}
        endAngle={0}
        innerRadius={80}
        outerRadius={120}
        dataKey="value"
        stroke="none"
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
</div>


          {/* Breakdown */}
          <div className="w-full space-y-4 mt-6">
            <h4 className="font-bold text-gray-800">Payment Breakdown</h4>

            <div className="flex justify-between text-sm">
              <span className="flex items-center gap-2 text-gray-500">
                <div className="w-3 h-3 bg-[#FEE2E2] rounded"></div>
                Principal Amount
              </span>
              <span className="font-bold text-gray-900">
                ₹{principal.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="flex items-center gap-2 text-gray-500">
                <div className="w-3 h-3 bg-[#EF4444] rounded"></div>
                Total Interest
              </span>
              <span className="font-bold text-gray-900">
                ₹{totalInterest.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="border-t pt-4 flex justify-between">
              <span className="font-bold text-gray-800">Total Payment</span>
              <span className="font-semibold text-gray-900 text-lg">
                ₹{totalPayment.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Styling */}
      <style>{`
        .custom-red-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          background: #e5e7eb;
          border-radius: 5px;
          background-image: linear-gradient(#b71c1c, #b71c1c);
          background-repeat: no-repeat;
          outline: none;
        }

        .custom-red-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #b71c1c;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
}

export default EMICalculator;
