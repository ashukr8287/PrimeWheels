import React from "react";
import { VehicLeslist } from "../../../Data/Database.js";
import VehicleCard from "../CommonComp/VehicleCard.jsx";

function VehicleSlide() {
  const vehicles = VehicLeslist.slice(0, 4);
  return (
    <section className="w-full bg-white ">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <header className="max-w-2xl mx-auto">
          <p className="text-[#B71C1C] text-lg text-center font-bold">
            Welcome to
          </p>
          <h1 className="text-center font-bold text-3xl mb-2  ">PrimeWheels</h1>
          <p className="text-center">
            We are premium pre-owned car dealership in Gurugram HR, offering
            handpicked, fully inspected vehicles with warranty and complete
            peace of mind.
          </p>
        </header>
        <main className="">
          <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-8 gap-5  md:mt-8 mt-4">
            {vehicles.map((item) => (
              <VehicleCard item={item} key={item.id} />
            ))}
          </section>
        </main>
      </div>
    </section>
  );
}

export default VehicleSlide;
