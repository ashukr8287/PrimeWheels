import React from "react";
import { IoCallOutline, IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function Navbar() {
   const handleCall = () => {
    window.location.href = "tel:+918700858446";
  };
  const Navigate=useNavigate()
  return (
    <>
      <nav className="bg-black text-white fixed top-0 w-full z-100">
        <div className="max-w-7xl mx-auto lg:px-8 px-2">
          <div className="w-full flex justify-between items-center py-4 px-2">
            {/* Name || Logo */}
            <div className="lg:text-2xl md:text-3xl text-1xl font-bold uppercase font-poppins  cursor-pointer" onClick={()=>Navigate("/")}>
              PrimeWheels
            </div>
            {/* Search || Section */}
            <div className="  md:flex hidden items-center bg-white rounded-full text-black px-4">
              <input
                type="text"
                className="bg-white border-r border-r-gray-500 p outline-none py-2.5 rounded-l-full px-1 mr-2 text-black placeholder-gray-400 lg:w-80"
                placeholder="Search"
              />
              <IoSearch className="text-xl animate-pulse" />
            </div>
            {/* Buttons */}
            <div className=" md:gap-x-4 gap-x-3 flex">
              <button className="bg-[#B71C1C] md:px-4 px-2  md:py-2 py-1 border-none rounded-sm cursor-pointer md:text-base text-sm " onClick={()=>Navigate("/cars")}>
                Buy a Car
              </button>
              <button className="bg-[#B71C1C] md:px-4 px-2 md:py-2 py-1 border-none rounded-sm cursor-pointer md:text-base text-sm" onClick={()=>Navigate("/sell")}>
                Sell a Car
              </button>
              <div className="bg-[#B71C1C] items-center p-2 rounded-full text-2xl cursor-pointer md:block hidden">
                <IoCallOutline onClick={handleCall}  />
              </div>
              <div className="cursor-pointer lg:block hidden" onClick={handleCall} >
                <span className="block text-xs">Dial Our Helpline:</span>
                <span className="block font-bold"> +91- 8700858446</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Hidden Navbar */}
      <div className="bg-red-500 md:h-19 h-15"></div>
    </>
  );
}

export default Navbar;
