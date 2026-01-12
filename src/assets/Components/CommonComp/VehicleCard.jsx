import React from "react";
import { Link } from "react-router-dom";

function VehicleCard({ item }) {
  return (
    <div className="rounded-2xl shadow-sm">
      <Link to={`/vehicle/${item.uniqueId}`}>
        {/* Vehicle Image */}
        <div className="overflow-hidden rounded-t-2xl">
          <img
            src={item.images}
            alt=""
            className="rounded-t-2xl transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Vehicle Details */}
        <div className="px-4">
          <h3 className="font-jost font-semibold py-3 text-lg">
            {item.title.length > 25
              ? `${item.title.trim().slice(0, 25)}...`
              : item.title}
          </h3>

          {/* Specs */}
          <div className="text-xs my-2 flex items-center">
            <span className="bg-[#F3F4F6] rounded-sm p-1 mx-2">
              {Number(item.drivenKm).toLocaleString("en-IN")} km
            </span>

            <span className="bg-[#F3F4F6] rounded-sm p-1 mx-2">
              {item.fuel}
            </span>

            <span className="bg-[#F3F4F6] rounded-sm p-1 mx-2">
              {item.transmission}
            </span>

            <span className="bg-[#F3F4F6] rounded-sm p-1 mx-2">
              {item.rto}
            </span>
          </div>

          {/* Price & EMI */}
          <div className="space-x-10 my-2">
            <span className="font-semibold text-lg">
              {item.priceLabel}
            </span>

            <span className="text-[12px]">
              Emi :- ₹{" "}
              {Number((item.price / 36).toFixed(0)).toLocaleString("en-IN")} /m
            </span>
          </div>

          {/* CTA Button */}
          <button
            className="w-full my-3 text-center bg-transparent border border-black rounded-full py-1
                       hover:text-white hover:bg-[#B71C1C] hover:border-[#B71C1C]
                       transition-all duration-300"
          >
            View Car
          </button>
        </div>
      </Link>
    </div>
  );
}

export default VehicleCard;
