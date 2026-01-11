import React from "react";
import MaintainedLogo from "../../Images/MaintainedLogo.png";

function AboutTheCar({ vehicle }) {
  return (
    <section className="bg-white p-4 my-4 rounded-xl">
      <div>
        <div className="text-xl font-bold text-black my-3">
          Special about this car
        </div>
        <div className="flex">
          <h3 className="bg-[#B71C1C] w-12 h-1 mr-4 "></h3>
          <h3 className="bg-[#B71C1C] w-4 h-1 "></h3>
        </div>
      </div>

      <div className="py-3 flex items-center gap-x-2">
        <div className=" w-10">
          <img src={MaintainedLogo} alt="" className="w-full " />
        </div>
        <div>
          <h3 className="font-semibold ">Well maintained</h3>
          <p className="text-sm max-w-50">Regularly serviced and kept in excellent condition</p>
        </div>
      </div>
    </section>
  );
}

export default AboutTheCar;
