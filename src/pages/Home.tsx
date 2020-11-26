import { AboutUs } from "@components/AboutUs";
import { Banner } from "@components/Banner";
import { Brands } from "@components/Brands";
import { WhatsAppFixed } from "@components/Fixed";
import { Footer } from "@components/Footer";
import { Location } from "@components/Location";
import { NavBar } from "@components/Navbar";
import { Products } from "@components/Products";
import { Services } from "@components/Services";
import { Supports } from "@components/Supports";
import LocationsContext, {
  LocationContextDefault,
} from "@helpers/LocationContext";
import React from "react";

export const Home: React.FC = () => {
  return (
    <div>
      <WhatsAppFixed />
      <NavBar />
      <Banner />
      <AboutUs />
      <Services />
      <Products />
      <Brands />
      <Supports />
      <LocationsContext.Provider value={LocationContextDefault}>
        <Location />
      </LocationsContext.Provider>
      <Footer />
    </div>
  );
};
