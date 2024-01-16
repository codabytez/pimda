import HeroSection from "./HeroSection";
import WhyUs from "./WhyUs";
import Team from "./Team";
import Services from "./Services";
import { NextPage } from "next";

const About: NextPage = () => {
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
