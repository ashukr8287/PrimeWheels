import React, { useState } from "react";
import { reviews } from "../../../Data/Database.js";
import { FcGoogle } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";

function CustomerReview() {
  const [filter, setfilter] = useState("Buyers");
  const [id, setid] = useState(null);
  const reviewList = reviews.filter((item) => item.type === filter);
  const selectedReview = reviews.find((item) => item.id === id);

  return (
    <section className="w-full bg-gray-100 ">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <header>
          <p className="text-[#B71C1C] text-lg text-center font-bold">
            What our happy clients say about us{" "}
          </p>
          <h1 className="text-center font-bold text-3xl  md:mb-8 mb-4">
            Our Testimonials
          </h1>
        </header>

        <div className="mx-auto border border-gray-300 rounded-full px-4 py-2 w-60  flex justify-between items-center">
          <button
            onClick={() => setfilter("Buyers")}
            className={` px-6 py-3 rounded-full font-semibold  ${
              filter === "Buyers"
                ? "text-white bg-[#B71C1C] hover:animate-pulse"
                : null
            }`}
          >
            Buyers
          </button>
          <button
            onClick={() => setfilter("Sellers")}
            className={` px-6 py-3 rounded-full font-semibold ${
              filter === "Sellers"
                ? "text-white bg-[#B71C1C] hover:animate-pulse"
                : null
            }`}
          >
            Sellers
          </button>
        </div>

        <main>
          <section className="grid sm:grid-cols-2 grid-cols-1  md:mt-8 mt-4">
            {reviewList.map((item) => (
              <div
                className="bg-white lg:m-5 md:m-3 my-2  rounded-2xl p-4 shadow cursor-pointer"
                onClick={() => setid(item.id)}
              >
                <h3 className="font-semibold text-xl py-4 ">{item.title}</h3>
                <p className="font- text-base py-4 border-b border-b-black text-black hover:text-[#b71c1c] ">
                  {item.message}
                </p>
                <div className="flex py-4 justify-between items-center ">
                  <span className="flex gap-x-5 items-center">
                    {" "}
                    <img
                      src="https://assets.cars24.com/production/consumer-web-in/251229200152/d/_next/static/media/user.2c79519a.png"
                      alt="pulse"
                      className="rounded-full h-10 w-10"
                    />{" "}
                    {item.userName}
                  </span>{" "}
                  <span className="text-4xl">
                    {item.id % 2 == 1 ? (
                      <FcGoogle />
                    ) : (
                      <FaXTwitter className="text-3xl" />
                    )}
                  </span>
                </div>
              </div>
            ))}
          </section>
        </main>

        {/* Single Review */}
        {/* Single Review Popup */}
        {id && selectedReview && (
          <div className="fixed inset-0  z-50 flex items-center justify-center bg-red/50 backdrop-blur-sm">
            {/* Modal Card */}
            <div className="bg-white w-[90%] max-w-xl rounded-2xl shadow-xl p-6 relative ">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">{selectedReview.title}</h2>
                <button
                  onClick={() => setid(null)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                >
                  <RxCross1 className="text-xl" />
                </button>
              </div>

              {/* Message */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedReview.message}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <img
                    src="https://assets.cars24.com/production/consumer-web-in/251229200152/d/_next/static/media/user.2c79519a.png"
                    className="w-12 h-12 rounded-full"
                    alt="user"
                  />
                  <div>
                    <p className="font-semibold">{selectedReview.userName}</p>
                    <p className="text-sm text-gray-500">
                      {selectedReview.type}
                    </p>
                  </div>
                </div>

                <span className="text-4xl">
                  {id % 2 === 1 ? (
                    <FcGoogle />
                  ) : (
                    <FaXTwitter className="text-3xl" />
                  )}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CustomerReview;
