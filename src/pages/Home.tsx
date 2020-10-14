import React from "react";
import { NavBar } from "@components/Navbar";
import { Banner } from "@components/Banner";

export const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Banner />
    </div>
  );
};
