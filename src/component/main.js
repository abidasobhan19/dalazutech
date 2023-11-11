import React from "react";
import Slider from "./slider/slider";
import OurService from "./ourservice/ourservice";
import Features from "./features/features";
import OurClient from "./ourclient/ourclient";
import Support from "./support/support";
import Footer from "./footer/footer";

const Main = () => {
  return (
    <>
      <Slider />
      <OurService />
      <Features />
      <Support />
      <OurClient />
      <Footer />
    </>
  );
};

export default Main;
