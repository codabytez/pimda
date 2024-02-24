import React from "react";
import HeroSection from "./HeroSection";
import WhyUs from "./WhyUs";
import Team from "./Team";
import Services from "./Services";
import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main className="max-w-[1440px] mt-[150px] pb-28 mx-auto">
      <HeroSection />
      <WhyUs />
      <Team />
      <Services />
    </main>
  );
};

export default About;
