import { About, Contact, Experience, Hero, Navbar, Works } from "../components";
import React from "react";

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero/>
      </div>
      <About />
      <Experience />
      <Works />

      <div className="relative z-0 w-full">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
