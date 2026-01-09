import React from "react";
import Navbar from "./assets/Components/CommonComp/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./assets/Components/CommonComp/Footer";
import Home from "./Pages/Home";
import Cars from "./Pages/Cars";
import PageTitle from "./assets/Components/CommonComp/PageTitle";
import VehiclesDetails from "./Pages/VehiclesDetails";
import ScrollToTop from "./assets/Components/CommonComp/ScrollToTop";
import PageNotFound from "./assets/Components/CommonComp/PageNotFound";


function App() {
  return (
    <>
      <PageTitle/>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars/>}/>
        <Route path="/vehicle/:id" element={<VehiclesDetails />} />
        <Route path="*" element={<PageNotFound/>}/>

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
