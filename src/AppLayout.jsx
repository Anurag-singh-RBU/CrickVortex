import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Countries from "./Countries";

const AppLayout = () => {

  const location = useLocation();

  return (

    <div>

      <Navbar />

      {location.pathname === "/" && (

        <>

          <Hero />
          <Countries />
          
        </>

      )}

      <Outlet />

    </div>

  );

};

export default AppLayout;
