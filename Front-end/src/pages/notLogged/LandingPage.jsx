import React from "react";
import Header from "../../components/header";
import Banner from "../../components/Banner";
import Features from "../../components/Features";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#030712] relative ">
      <Header />
      <Banner />
      <Features />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
};

export default LandingPage;
