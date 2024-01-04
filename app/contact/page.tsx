import Contact from "@/components/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page",
};

const ContactPage: React.FC = () => {
  return (
    <main className="max-w-[1440px] mt-[200px] mb-28">
      <Contact />;
    </main>
  );
};

export default ContactPage;
