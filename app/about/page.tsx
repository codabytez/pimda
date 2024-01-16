import { Metadata, NextPage } from "next";
import About from "@/components/AboutPage/About";

export const metadata: Metadata = {
  title: "About",
  description: "More info about Pimda",
};

const AboutPage: NextPage = () => {
  return <About />;
};

export default AboutPage;
