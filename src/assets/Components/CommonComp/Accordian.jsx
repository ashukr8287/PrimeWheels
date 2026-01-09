import React, { useState } from "react";
import {faqs} from "../../../Data/Database.js"

function Accordian() {


  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full bg-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-[#B71C1C] text-lg text-center font-bold">
          Information Center
        </div>
        <div className="text-center font-bold text-3xl  md:mb-15 mb-8">
          Frequently Asked Questions
        </div>
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border-b  border-y-gray-700  items-center max-w-5xl mx-auto px-4 "
          >
            <div
              className={`flex items-center justify-between py-3 uppercase hover:text-[#B71C1C] text-sm ${
                openIndex === index ? "font-semibold text-[#b71c1c]" : null
              }`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {item.question}{" "}
              <span className="md:text-4xl text-3xl text-center content-center font-extralight">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="my-2 text-gray-600 text-sm">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordian;
