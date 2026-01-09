import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "PrimeWheels";
    } else if (location.pathname === "/cars") {
      document.title = "Cars";
    } else {
      document.title = "PrimeWheels";
    }
  }, [location.pathname]);

  return null;
}

export default PageTitle;
