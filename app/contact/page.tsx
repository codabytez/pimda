import Contact from "@/components/ContactPage/Contact";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page",
};

const ContactPage: NextPage = () => {
  return <Contact />;
};

export default ContactPage;
