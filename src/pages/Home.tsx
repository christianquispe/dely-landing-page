import { AboutUs } from "@components/AboutUs";
import { Banner } from "@components/Banner";
import { Brands } from "@components/Brands";
import { NavBar } from "@components/Navbar";
import { Products } from "@components/Products";
import { Services } from "@components/Services";
import React from "react";

export const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <AboutUs />
      <Services />
      <Products />
      <Brands />
    </div>
  );
};
