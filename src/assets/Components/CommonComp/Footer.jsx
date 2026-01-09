import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { IoCallOutline, IoLocation } from "react-icons/io5";

function Footer() {
  return (
    <>
      {/* MAIN FOOTER */}
      <footer className="bg-black text-white pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 md:gap-15 gap-5">

          {/* LEFT GRID */}
          <div className="grid gap-6">
            <h2 className="text-3xl font-bold uppercase cursor-pointer">
              PrimeWheels
            </h2>

            <p className="text-gray-300 leading-relaxed">
              PrimeWheels is a pre-owned car dealership in Gurugram, offering
              handpicked, fully inspected vehicles with warranty and complete
              peace of mind.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-5 text-2xl">
              <FaFacebook className="cursor-pointer hover:text-gray-400 transition" />
              <FaInstagram className="cursor-pointer hover:text-gray-400 transition" />
              <FaYoutube className="cursor-pointer hover:text-gray-400 transition" />
            </div>

            {/* CONTACT GRID */}
            <div className="grid gap-4 text-gray-300">
              <div className="flex items-center gap-4 hover:text-white transition cursor-pointer">
                <IoCallOutline className="text-2xl" />
                +91-8700858446
              </div>

              <div className="flex items-center gap-4 hover:text-white transition cursor-pointer">
                <GoMail className="text-2xl" />
                PrimeWheels@gmail.com
              </div>

              <div className="flex items-start gap-4">
                <IoLocation className="text-2xl mt-1" />
                <span>
                  Old Railway Road, Gurugram, Haryana 122001
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="grid md:grid-cols-2 md:gap-15 gap-5">

            {/* QUICK LINKS */}
            <div>
              <h3 className="font-semibold text-xl mb-5">Quick Links</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "About Us",
                  "Buy a Car",
                  "Sell a Car",
                  "Contact Us",
                  "PrimeWheels Policies",
                ].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-white transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* BRAND RANGE */}
            <div>
              <h3 className="font-semibold text-xl mb-5">Brand Range</h3>
              <ul className="space-y-3 text-gray-300">
                {["Tata", "Mahindra", "Maruti Suzuki", "Hyundai", "KIA"].map(
                  (brand) => (
                    <li
                      key={brand}
                      className="cursor-pointer hover:text-white transition"
                    >
                      {brand}
                    </li>
                  )
                )}
              </ul>
            </div>

          </div>
        </div>
      </footer>

      {/* BOTTOM BAR */}
      <div className="bg-[#222732] py-5">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-gray-300 text-sm grid md:grid-cols-2 gap-3 text-center md:text-left">
          <p>© 2026 PrimeWheels. All rights reserved.</p>
          <p className="cursor-pointer hover:text-white transition md:text-right">
            PrimeWheels Policies
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
