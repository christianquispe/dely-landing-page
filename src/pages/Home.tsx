import { AboutUs } from "@components/AboutUs";
import { Banner } from "@components/Banner";
import { NavBar } from "@components/Navbar";
import { Services } from "@components/Services";
import React from "react";

export const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <AboutUs />
      <Services />
    </div>
  );
};
