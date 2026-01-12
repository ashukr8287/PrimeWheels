import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
    const navigate=useNavigate()
  return (
    <section className="bg-[#F3F3F3]  w-full h-[82vh] content-center overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-8xl font-bold animate-pulse">404</h1>
        <i className="text-4xl text-[#b71c1c]">OOPS!</i>
        <p className="text-sm my-4">
          We couldn't find the page you were looking for. Don't panic or you'll
          wake up the cat. Press the button below to go to homepage
        </p>
        <button onClick={()=>navigate("/")} className="bg-[#B71C1C]  font-bold px-12 py-4 border-none rounded-lg  cursor-pointer  mt-2 hover:animate-pulse  text-white ">
          GO TO HOMEPAGE
        </button>
      </div>
    </section>
  );
}

export default PageNotFound;
