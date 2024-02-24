// pages/style-guide.tsx
import React from "react";
import { Metadata, NextPage } from "next";
import StyleGuide from "@/components/StyleGuide";

export const metadata: Metadata = {
  title: "Style guide",
  description: "Style guide for the components used in the app",
};

const StyleGuidePage: NextPage = () => {
  return <StyleGuide />;
};

export default StyleGuidePage;
