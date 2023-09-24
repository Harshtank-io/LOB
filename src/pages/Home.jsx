import React from "react";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import Info from "../components/Info";
import Me from "../components/Me";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Info />
      <Me />
      <Footer />
    </>
  );
}

export default Home;
