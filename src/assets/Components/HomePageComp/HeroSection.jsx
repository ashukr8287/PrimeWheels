import React from "react";
import imageDesk from "../../Images/HeroSectionDeskImg.jpg";
import ImageMob from "../../Images/HeroSectionMobImg.jpg";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="relative lg:h-[90vh] h-[70vh]">
      {/* Desktop Image */}
      <img
        src={imageDesk}
        alt=""
        loading="eager"
        className="absolute inset-0 lg:h-[90vh] h-[70vh] w-full object-cover md:block hidden"
      />

      {/* Mobile Image */}
      <img
        src={ImageMob}
        alt=""
        loading="eager"

        className="absolute inset-0 h-[70vh] w-full object-cover md:hidden block"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Text */}
      <div className="absolute inset-0 content-center z-20 max-w-7xl mx-auto">
        <div className=" w-full  md:text-center text-left  text-white px-4">
          <h1 className=" md:text-7xl sm:text-5xl text-4xl  font-extrabold uppercase  ">
            <span className=" md:text-5xl text-3xl font-bold ">
              A Collection
            </span>
            <br />
            Built on Trust.
          </h1>
          <p className="md:text-xl text-bace md:my-6 my-4">
            Every PrimeWheels vehicle is handpicked — so you get trust, quality,
            and value in one place.
          </p>
          <div className="w-full">
            <div className="md:hidden">
              {" "}
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none border-b-2 w-full border-gray-340 py-2"
              />
            </div>
            <button
              className="bg-[#B71C1C]  font-bold px-6 py-2 border-none rounded-md  cursor-pointer  mt-6 hover:animate-pulse  "
              onClick={() => navigate("/cars")}
            >
              Browse Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
