import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import BreadCrumbs from "@/components/BreadCrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Pimda",
  description:
    "Get access to premium offers from popular brands with variety of categories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${poppins.variable}`}>
        <Navbar isLoggedIn={true} savedItemsCount={10} cartItemsCount={10} />
        <BreadCrumbs
          homeElement={"Home"}
          separator={
            <span className="w-[1px] h-4 flex bg-black/50 rotate-12" />
          }
          activeClasses="!text-black"
          containerClasses="flex items-end h-6 gap-2 text-Text-sm my-5"
          listClasses="text-black/50 capitalize hover:text-black transition-colors duration-300"
          capitalizeLinks
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
