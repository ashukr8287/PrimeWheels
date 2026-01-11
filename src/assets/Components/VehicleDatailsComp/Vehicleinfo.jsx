import React from "react";
import { IoShareSocialOutline } from "react-icons/io5";

function Vehicleinfo({ vehicle }) {

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          image:vehicle.images,
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
  return (
    <div className="bg-white p-4 rounded-xl md:m-0 my-4">
      <div className="flex items-center justify-between ">
        <span className="font-semibold text-lg">{vehicle.title}</span>{" "}
        <span
          className="text-black text-xl border border-gray-300 hover:bg-gray-200 p-1 cursor-pointer"
          onClick={() => handleShare()}
        >
          {<IoShareSocialOutline />}
        </span>
      </div>
      <div className="text-xs my-4 flex items-center gap-x-2  ">
        <span className="bg-[#F3F4F6] rounded-sm p-2 ">
          {Number(vehicle.drivenKm).toLocaleString("en-IN")} km
        </span>
        <span className="bg-[#F3F4F6] rounded-sm p-2 ">{vehicle.fuel}</span>
        <span className="bg-[#F3F4F6] rounded-sm p-2">
          {vehicle.transmission}
        </span>
      </div>

      <div className="bg-gary-100 rounded-2xl  border-gray-200 border">
        <div className="p-2 text-2xl font-semibold">
          {vehicle.priceLabel}{" "}
          <span className="text-gray-400 cursor-pointer px-2 text-xs">
            Price Breakup
          </span>
        </div>
        <div className="flex items-center justify-between bg-[#EFEFEF] p-3 rounded-b-2xl text-sm">
          <div className="text-[#B71C1C] font-semibold text-xs">
            Starting EMI :- <br />
            ₹ {Number((vehicle.price / 36).toFixed(0)).toLocaleString("en-IN")} /m
          </div>
          <button className="bg-[#B71C1C]   px-4 py-2 border-none rounded-md  cursor-pointer text-white hover:animate-pulse ">
            Calculate EMI
          </button>
        </div>
      </div>
      <button onClick={()=> handleCall()} className="bg-black rounded-lg w-full text-center text-white flex flex-col py-2 mt-6 cursor-pointer">
        <span className="text-semibold text-sm">CALL NOW </span>{" "}
        <span className="text-[8px]">11AM TO 6PM</span>
      </button>
    </div>
  );
}

export default Vehicleinfo;
