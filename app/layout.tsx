import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
        <Navbar savedItemsCount={10} cartItemsCount={10} />
        <main className="max-w-[1440px] mt-[150px] mb-28 mx-auto">
          {children}
        </main>
        <Footer />
        <ToastContainer />
        <SpeedInsights />
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
