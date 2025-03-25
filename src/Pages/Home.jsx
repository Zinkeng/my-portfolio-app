import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
    </div>
  );
}

export default Home;
