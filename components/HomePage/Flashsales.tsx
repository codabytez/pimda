"use client";
import React from "react";
import Countdown from "./Countdown";
import Button from "../UI/Button";
import { ArrowRight2 } from "iconsax-react";
import Cart from "../UI/Cart";
import havitPad from "@/public/images/products/g92-hv-pad.png";
import akKeyboard from "@/public/images/products/ak-900-keyboard.png";
import lcdMonitor from "@/public/images/products/gaming-monitor.png";
import sSeriesChair from "@/public/images/products/s-series-chair.png";
import canonCamera from "@/public/images/products/canon-camera.png";
import asusLaptop from "@/public/images/products/asus-fnd-laptop.png";
import ClientOnly from "../ClientOnly";
import { NextPage } from "next";

const Flashsales: NextPage = () => {
  const flashsales: itemProps[] = [
    {
      name: "HAVIT HV-G92 Gamepad",
      price: 160,
      images: [havitPad.src],
      discount: 40,
      variants: ["red"],
      rating: 5,
      totalRatings: 88,
    },
    {
      name: "AK-900 Wired Keyboard",
      price: 1160,
      images: [akKeyboard.src],
      discount: 35,
      rating: 4,
      totalRatings: 75,
    },
    {
      name: "IPS LCD Gaming Monitor",
      price: 400,
      images: [lcdMonitor.src],
      discount: 30,
      variants: ["black"],
      rating: 5,
      totalRatings: 99,
    },
    {
      name: "S Series Comfort Chair",
      price: 400,
      images: [sSeriesChair.src],
      discount: 25,
      rating: 4.5,
      totalRatings: 99,
    },
    {
      name: "Canon EOS DSLR Camera",
      price: 360,
      images: [canonCamera.src],
      variants: ["black"],
      discount: 30,
      rating: 4,
      totalRatings: 95,
    },

    {
      name: "ASUS FND Gaming Laptop",
      price: 700,
      images: [asusLaptop.src],
      variants: ["black"],
      discount: 10,
      rating: 5,
      totalRatings: 325,
    },
  ];

  return (
    <section className="max-w-[1240px] mx-auto py-4">
      <div className="flex py-2.5 px-6 items-center justify-between bg-gray-10 rounded-t-lg">
        <div className="flex gap-6 items-center">
          <h4 className="text-dark-fray text-Display-xs font-medium">
            Flash Sales
          </h4>
          <ClientOnly>
            <Countdown endTime={new Date("2024-01-31T00:00:00")} />
          </ClientOnly>
        </div>
        <Button
          variant="text"
          rightIcon={<ArrowRight2 size={16} color="#0F0F0F" />}
        >
          <span className="text-sm uppercase font-medium text-dark-gray">
            View All
          </span>
        </Button>
      </div>
      <div className="flex w-full overflow-x-auto bg-gray-9 rounded-b-lg">
        <div className="flex px-3.5 gap-7 py-8 items-stretch">
          {flashsales &&
            flashsales.map((item, i) => <Cart key={i} item={item} />)}
        </div>
      </div>

      <style jsx>{`
        ::-webkit-scrollbar {
          display: none;
        }

         {
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-behavior: smooth;
          border: 10px solid red;
        }
      `}</style>
    </section>
  );
};

export default Flashsales;
