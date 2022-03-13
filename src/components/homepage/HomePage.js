import React from "react";
import Header from "./../Header";
import InputFieldComp from "./../InputFieldComp";
import Poster from "./../Poster";
import Offers from "./../Offers";
import Specialists from "./../Specialists";
import Appointment from "./../Appointment";
import Articles from "./../Articles";
import Slider from "./../Carousel";
import Contact from "./../Contact";
import Footer from "./../Footer";

const HomePage = () => {
  return (
    <>
      {" "}
      <Header />
      <InputFieldComp />
      <Poster />
      <Offers />
      <Specialists />
      <Appointment />
      <Articles />
      <Slider />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
