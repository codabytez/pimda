// pages/style-guide.tsx
import { Metadata } from "next";
import StyleGuide from "@/components/StyleGuide";
import React from "react";

export const metadata: Metadata = {
  title: "Style guide",
  description: "Style guide for the components used in the app",
};

const StyleGuidePage: React.FC = () => {
  return (
    <main className="max-w-[1440px] mt-[200px] mb-28">
      <StyleGuide />;
    </main>
  );
};

export default StyleGuidePage;
