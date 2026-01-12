import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SellCar() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    number: "",
    message: "",
  });

  // Handle input change with validation logic
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      // Sirf A-Z, a-z aur spaces allow karega (Numbers aur symbols hat jayenge)
      const validatedName = value.replace(/[^a-zA-Z\s]/g, "");
      setForm((prev) => ({ ...prev, [name]: validatedName }));
    } 
    else if (name === "number") {
      // Sirf Numbers allow karega (Alphabets hat jayenge)
      const validatedNumber = value.replace(/\D/g, "");
      setForm((prev) => ({ ...prev, [name]: validatedNumber }));
    } 
    else {
      // Message field ke liye normal update
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle submit
  const submitHandler = (e) => {
    e.preventDefault();

    // Field empty check
    if (!form.name || !form.number || !form.message) {
      alert("Please fill all fields");
      return;
    }

    // Mobile number length check (India ke liye 10 digits)
    if (form.number.length < 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    console.log("Form Submitted:", form);

    // Reset Form
    setForm({
      name: "",
      number: "",
      message: "",
    });

    alert("Thank you! Our experts will contact you soon.");
  };

  return (
    <section className="w-full bg-white">
      {/* Navigation List */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex gap-x-2 items-center bg-white text-sm font-semibold p-4 lg:px-8 border-b border-b-gray-300 shadow-sm">
          <span className="cursor-pointer hover:text-[#B71C1C]" onClick={() => navigate("/")}>
            Home
          </span>
          &#62;
          <span className="cursor-pointer hover:text-[#B71C1C]" onClick={() => navigate("/cars")}>
            Car
          </span>
          &#62;
          <span>SellCar</span>
        </div>
      </div>

      {/* Main Components */}
      <main className="bg-[#EFEFEF] lg:py-6 min-h-[82vh]">
        <section className="max-w-7xl mx-auto shadow-sm lg:rounded-2xl bg-white md:p-14 p-4 md:py-10 py-6">
          <form
            onSubmit={submitHandler}
            className="flex flex-col items-center text-sm"
          >
            <h1 className="text-4xl font-semibold pb-4 text-[#B71C1C] text-center">
              Get in touch with us
            </h1>

            <p className="text-sm text-gray-500 text-center pb-10 max-w-3xl mx-auto">
              Please ensure all car details are accurate. Once submitted, our
              PrimeWheels experts will review your information and contact you
              shortly to assist with the selling process.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-[700px]">
              {/* Name Input */}
              <div className="w-full">
                <label className="text-black/70 font-medium">Your Name</label>
                <input
                  className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-[#B71C1C]"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={onChangeHandler}
                />
              </div>

              {/* Mobile Input */}
              <div className="w-full">
                <label className="text-black/70 font-medium">Mobile Number</label>
                <input
                  className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-[#B71C1C]"
                  type="tel"
                  name="number"
                  placeholder="Enter your number"
                  maxLength="10"
                  value={form.number}
                  onChange={onChangeHandler}
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="mt-6 w-full max-w-[700px]">
              <label className="text-black/70 font-medium">Message</label>
              <textarea
                className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-[#B71C1C]"
                name="message"
                placeholder="Tell us about your car..."
                value={form.message}
                onChange={onChangeHandler}
              />
            </div>

            <button
              type="submit"
              className="text-white bg-[#B71C1C] px-16 py-3 rounded-md cursor-pointer text-base font-semibold uppercase my-6 hover:bg-[#8e1616] transition-colors"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </section>
  );
}

export default SellCar;