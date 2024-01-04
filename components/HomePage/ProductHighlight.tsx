"use client";
import React, { useEffect, useState } from "react";
import Countdown from "./Countdown";
import Button from "../UI/Button";
import ClientOnly from "../ClientOnly";
import Image from "next/image";

const ProductHighlight: React.FC = () => {
  const products: topProduct[] = [
    {
      id: 1,
      name: "Enhance Your Music Experience",
      category: "Speakers",
      image: "/images/speaker.png",
    },
    {
      id: 2,
      name: "Be connected directly to farmers",
      category: "Farmers Market",
      image: "/images/farmers-market.png",
    },
    {
      id: 3,
      name: "Excitement to your taste buds",
      category: "Fast Food",
      image: "/images/fast-food.png",
    },
    {
      id: 4,
      name: "Get well furnished houses",
      category: "House rentals",
      image: "/images/house-rentals.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % products.length);
    }, 3000); // Change every 3 seconds

    return () => {
      clearInterval(timer);
    };
  }, [products.length]);

  return (
    <div className="w-[1240px] mx-auto rounded-lg bg-primary-green-600 flex items-center justify-center relative">
      <div className="flex flex-col h-[528px] items-start justify-center gap-8">
        <p className="text-primary-5 text-[17px] leading-[21.2px] font-semibold">
          {products[current].category}
        </p>
        <h2 className="w-[470px] text-text font-semibold text-[50.9px] leading-[63.6px] tracking-[2.035px]">
          {products[current].name}
        </h2>
        <ClientOnly>
          <Countdown
            endTime={new Date("2024-01-04T00:00:00")}
            style={{ timeAboveLabel: true, rounded: true, noSeparator: true }}
          />
        </ClientOnly>
        <div className="w-[180px]">
          <Button size="lg" fullWidth>
            Buy Now
          </Button>
        </div>
      </div>

      <div className="w-[534.2px] h-[523px] rounded-full opacity-30 bg-[#D9D9D9] filter blur-[126px] "></div>

      <Image
        src={products[current].image}
        alt={products[current].category}
        width={500}
        height={300}
        className="absolute right-12 z-10"
      />
    </div>
  );
};

export default ProductHighlight;
