import React from "react";

import checkpointsimg from "../../Images/checkpointsimg.webp";
import transferimg from "../../Images/transferimg.webp";
import warrentyimg from "../../Images/warrentyimg.webp";

function Benefits() {
  return (
    <section className="bg-white p-4 my-4 rounded-xl">
      <div>
        <div className="text-xl font-bold text-black my-3">Benefits</div>
        <div className="flex">
          <h3 className="bg-[#B71C1C] w-12 h-1 mr-4 "></h3>
          <h3 className="bg-[#B71C1C] w-4 h-1 "></h3>
        </div>
      </div>

      <div className="py-3 grid grid-cols-3 gap-x-8">
        <div className="text-center">
          <img src={transferimg} alt="" className="md:w-20 w-10 mx-auto" />
          <h3 className="font-bold">Transfer</h3>
          <p className="md:text-sm text-xs">Cost Included</p>
        </div>

        <div className="text-center">
          <img src={warrentyimg} alt=""  className="md:w-20 w-10 mx-auto " />
          <h3  className="font-bold">Warranty</h3>
          <p className="md:text-sm text-xs">Included</p>
        </div>

        <div className="text-center">
          <img src={checkpointsimg} alt=""  className="md:w-20 w-10 mx-auto" />
          <h3  className="font-bold">150+</h3>
          <p className="md:text-sm text-xs">Checkpoints</p>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
