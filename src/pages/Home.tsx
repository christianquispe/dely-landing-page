import React from "react";
import { NavBar } from "@components/Navbar";
import { Banner } from "@components/Banner";
import { Services } from "@components/Services";

export const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Services />
    </div>
  );
};
