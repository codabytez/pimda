import React from "react";
import { Metadata } from "next";
import About from "@/components/AboutPage/About";

export const metadata: Metadata = {
  title: "About",
  description: "More info about Pimda",
};

const AboutPage: React.FC = () => {
  return (
    <main className="mt-[150px] mb-28">
      <About />
    </main>
  );
};

export default AboutPage;
