import React from "react";
import HeroSection from "./HeroSection";
import WhyUs from "./WhyUs";
import Team from "./Team";
import Services from "./Services";

const About: React.FC = () => {
  return (
    <>
      <HeroSection />
      <WhyUs />
      <Team />
      <Services />
    </>
  );
};

export default About;
