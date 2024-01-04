"use client";
import React from "react";
import Countdown from "./Countdown";
import Button from "../UI/Button";
import { ArrowRight2 } from "iconsax-react";
import Cart from "../UI/Cart";
import havit_pad from "@/public/images/products/g92-hv-pad.png";
import ak_keyboard from "@/public/images/products/ak-900-keyboard.png";
import lcd_monitor from "@/public/images/products/gaming-monitor.png";
import s_series_chair from "@/public/images/products/s-series-chair.png";
import canon_camera from "@/public/images/products/canon-camera.png";
import asus_laptop from "@/public/images/products/asus-fnd-laptop.png";
import ClientOnly from "../ClientOnly";

const Flashsales: React.FC = () => {
  const flashsales: itemProps[] = [
    {
      name: "HAVIT HV-G92 Gamepad",
      price: 160,
      images: [havit_pad.src],
      discount: 40,
      variants: ["red"],
      rating: 5,
      totalRatings: 88,
    },
    {
      name: "AK-900 Wired Keyboard",
      price: 1160,
      images: [ak_keyboard.src],
      discount: 35,
      rating: 4,
      totalRatings: 75,
    },
    {
      name: "IPS LCD Gaming Monitor",
      price: 400,
      images: [lcd_monitor.src],
      discount: 30,
      variants: ["black"],
      rating: 5,
      totalRatings: 99,
    },
    {
      name: "S Series Comfort Chair",
      price: 400,
      images: [s_series_chair.src],
      discount: 25,
      rating: 4.5,
      totalRatings: 99,
    },
    {
      name: "Canon EOS DSLR Camera",
      price: 360,
      images: [canon_camera.src],
      variants: ["black"],
      discount: 30,
      rating: 4,
      totalRatings: 95,
    },

    {
      name: "ASUS FND Gaming Laptop",
      price: 700,
      images: [asus_laptop.src],
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
            <Countdown endTime={new Date("2024-01-04T00:00:00")} />
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

      {/* <style jsx>{`
        .flash-scroll {
          animation: scroll 40s linear 0s infinite;
          animation-play-state: running;
          animation-delay: 0s;
          animation-direction: normal;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style> */}
    </section>
  );
};

export default Flashsales;
