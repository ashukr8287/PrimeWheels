import React from "react";

function Cardeals({ vehicle }) {
  return (
    <section className="bg-white p-4 my-4 rounded-xl">
      <div>
        <div className="text-2xl font-bold text-black my-3">Car Detail</div>
      <div className="flex"><h3 className="bg-[#B71C1C] w-12 h-1 mr-4 "></h3> <h3 className="bg-[#B71C1C] w-4 h-1 "></h3></div>
      </div>
      <div>
        <div  className="grid grid-cols-3">
          <div className="border-b-gray-300 border-b text-xs text-[#888888] font-semibold p-3">
            Make Year <br />
            <span className="text-base font-medium text-black">{vehicle.manufactureDate}</span>
          </div>
           <div className="border-b-gray-300 border-b text-xs text-[#888888] font-semibold p-3">
            Fuel <br />
            <span className="text-base font-medium text-black">{vehicle.fuel}</span>
          </div>
           <div className="border-b-gray-300 border-b text-xs text-[#888888] font-semibold p-3">
            Transmission <br />
            <span className="text-base font-medium text-black">{vehicle.transmission}</span>
          </div>
        </div>


         <div  className="grid grid-cols-3">
          <div className="border-b-gray-300 border-b text-xs text-[#888888] font-semibold p-3">
            Registration Year <br />
            <span className="text-base font-medium text-black">{vehicle.registrationYear}</span>
          </div>
           <div className="border-b-gray-300 border-b text-xs text-[#888888] font-semibold p-3">
            Ownership <br />
            <span className="text-base font-medium text-black">{vehicle.ownership}</span>
          </div>
           <div className="border-b-gray-300 border-b text-xs text-[#888888] font-semibold p-3">
            RTO <br />
            <span className="text-base font-medium text-black">{vehicle.rto}</span>
          </div>
        </div>

         <div  className="grid grid-cols-3">
          <div className="border-b-gray-300 border-b text-xs text-[#888888] font-semibold p-3">
            Driven <br />
            <span className="text-base font-medium text-black">{Number(vehicle.drivenKm).toLocaleString("en-IN")} Km</span>
          </div>
           
        </div>
      </div>
    </section>
  );
}

export default Cardeals;
