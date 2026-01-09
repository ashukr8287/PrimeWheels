import React from "react";

function ContactForm() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <header>
          <p className="text-[#B71C1C] text-lg text-center font-bold">
            Let's get in touch
          </p>
          <h1 className="text-center font-bold text-3xl  md:mb-15 mb-8">
            Contact Us
          </h1>
        </header>

        <main className="max-w-6xl mx-auto md:flex justify-between items-start gap-x-20">
          {/* <!-- Contact Information --> */}
          <section className="md:w-1/2 md:pr-20 bg-gray-100 rounded-3xl p-10">
            <h2 className="font-bold text-lg mb-4">Contact Information</h2>

            <ul className="text-sm">
              <li className="grid grid-cols-[140px_1fr] border-b border-black py-4 px-2">
                <strong>Phone:</strong>
                <span className="text-[#353535]">+91 87008-58446</span>
              </li>

              <li className="grid grid-cols-[140px_1fr] border-b border-black py-4 px-2">
                <strong>Email:</strong>
                <span className="text-[#353535] wrap-anywhere">PrimeWheels@gmail.com</span>
              </li>

              <li className="grid grid-cols-[140px_1fr] border-b border-black py-4 px-2">
                <strong>Address:</strong>
                <address className="not-italic text-[#353535]">
                  Old Railway Road, Gurugram, Haryana 122001
                </address>
              </li>

              <li className="grid grid-cols-[140px_1fr] border-b border-black py-4 px-2">
                <strong>Working Time:</strong>
                <span className="text-[#353535]">
                  Mon–Sun: 11:00 AM – 7:00 PM
                </span>
              </li>
            </ul>
          </section>

          <section className="md:w-1/2 mt-10 md:mt-0 ">
            <h2 className="font-bold text-lg mb-4">Get in Touch</h2>

            <p className="text-[#353535] text-[18px] font-sans">
              PrimeWheels is a trusted pre-owned car dealership in Gurugram HR. We
              offer fully inspected vehicles with warranty and complete peace of
              mind.
            </p>

            <form className="bg-red-">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                className="w-full border-b border-[#353535] pb-4 pt-8 text-sm px-2 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="E-mail*"
                required
                className="w-full border-b border-[#353535] pb-4 pt-8 text-sm px-2 outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Number*"
                required
                className="w-full border-b border-[#353535] pb-4 pt-8 text-sm px-2 outline-none"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full border-b border-[#353535] pb-4 pt-8 text-sm px-2 outline-none resize-none h-18 outline-blue-400"
              ></textarea>

            <button className="bg-[#B71C1C]  font-bold px-6 py-2 border-none rounded-md  cursor-pointer  text-white mt-6 hover:animate-pulse ">Send Message</button>
            </form>
          </section>
        </main>
      </div>
    </section>
  );
}

export default ContactForm;
