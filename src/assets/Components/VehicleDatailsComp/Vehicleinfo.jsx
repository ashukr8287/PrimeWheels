import React, { useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

function Vehicleinfo({ vehicle }) {
  const [fullPrice, setFullPrice] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          image: vehicle.images,
          title: vehicle.title,
          text: `View Car Details: ${vehicle.title}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Share cancelled", error);
      }
    } else {
      alert("Sharing not supported on this browser");
    }
  };

  const handleCall = () => {
    window.location.href = "tel:+918700858446";
  };
  const handleScroll = () => {
    
    window.scrollTo({
      top: 1100,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white p-4 rounded-xl md:m-0 my-4">
      {/* Title and Share Section */}
      <div className="flex items-center justify-between ">
        <span className="font-semibold text-lg">{vehicle.title}</span>
        <span
          className="text-black text-xl border border-gray-300 hover:bg-gray-200 p-1 cursor-pointer"
          onClick={() => handleShare()}
        >
          <IoShareSocialOutline />
        </span>
      </div>

      {/* Vehicle Specs Chips */}
      <div className="text-xs my-4 flex items-center gap-x-2">
        <span className="bg-[#F3F4F6] rounded-sm p-2">
          {Number(vehicle.drivenKm).toLocaleString("en-IN")} km
        </span>
        <span className="bg-[#F3F4F6] rounded-sm p-2">{vehicle.fuel}</span>
        <span className="bg-[#F3F4F6] rounded-sm p-2">
          {vehicle.transmission}
        </span>
      </div>

      {/* Pricing Card */}
      <div className="bg-gary-100 rounded-2xl border-gray-200 border">
        <div className="p-2 text-2xl font-semibold">
          {vehicle.priceLabel}{" "}
          <span
            className="text-gray-400 cursor-pointer px-2 text-xs hover:text-black"
            onClick={() => setFullPrice(true)}
          >
            Price Breakup
          </span>
          {/* Price Summary Modal */}
          {fullPrice && (
            <div className="h-screen w-full flex items-center justify-center fixed z-50 inset-0 backdrop-blur-xs ">
              <section className="md:w-[50%] bg-white p-4 m-4 rounded-xl border border-gray-300 ">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold text-black my-3">
                      Price Summary
                    </div>
                    <div className="flex">
                      <div className="bg-[#B71C1C] w-12 h-1 mr-4"></div>
                      <div className="bg-[#B71C1C] w-4 h-1"></div>
                    </div>
                  </div>
                  <button
                    onClick={() => setFullPrice(false)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                  >
                    <RxCross1 className="text-xl" />
                  </button>
                </div>

                <div className="p-3 border-2 my-4 border-[#B71C1C] rounded-lg text-sm text-[#B71C1C] font-medium">
                  <span>
                    Fixed price assured! To save you time on negotiations
                  </span>
                </div>

                <div className="bg-white p-4 my-4 rounded-xl border border-gray-300">
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between">
                      <span className="text-base font-semibold text-gray-800">
                        Final amount
                      </span>
                      <span className="text-lg font-bold">
                        ₹ {Number(vehicle.price).toLocaleString("en-IN")}
                      </span>
                    </li>
                    <li className="flex items-center justify-between text-gray-500 text-xs">
                      <span>Fixes & Upgrades</span>
                      <span className="font-medium">Included</span>
                    </li>
                    <li className="flex items-center justify-between text-gray-500 text-xs">
                      <span>Rc Transfer & More.</span>
                      <span className="font-medium">Included</span>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          )}
        </div>

        {/* EMI Section */}
        <div className="flex items-center justify-between bg-[#EFEFEF] p-3 rounded-b-2xl text-sm">
          <div className="text-[#B71C1C] font-semibold text-xs leading-tight">
            Starting EMI :- <br />
            <span className="text-sm">
              ₹{" "}
              {Number((vehicle.price / 36).toFixed(0)).toLocaleString("en-IN")}{" "}
              /m
            </span>
          </div>
          <button
            onClick={handleScroll}
            className="bg-[#B71C1C] px-4 py-2 border-none rounded-md cursor-pointer text-white hover:animate-pulse font-medium"
          >
            Calculate EMI
          </button>
        </div>
      </div>

      {/* Call to Action Button */}
      <button
        onClick={() => handleCall()}
        className="bg-black rounded-lg w-full text-center text-white flex flex-col items-center py-2 mt-6 cursor-pointer hover:bg-gray-900 transition-colors"
      >
        <span className="font-semibold text-sm">CALL NOW</span>
        <span className="text-[8px] tracking-wider opacity-80 uppercase">
          11AM TO 6PM
        </span>
      </button>
    </div>
  );
}

export default Vehicleinfo;
