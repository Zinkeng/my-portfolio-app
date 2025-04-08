import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Project from "../components/Project";
import Footer from "../components/footer";


function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
      <Services />
      <Project />
      <Footer />
    </div>
  );
}

export default Home;
