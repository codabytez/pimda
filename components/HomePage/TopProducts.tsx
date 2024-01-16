"use client";
import React, { useEffect, useState } from "react";
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";
import Button from "../UI/Button";
import { NextPage } from "next";

const products: topProduct[] = [
  {
    id: 1,
    name: "Kitchen Appliances",
    image: "/images/kitchen_appliances.png",
    category: "Category 1",
  },
  {
    id: 2,
    name: "Men’s Clothing",
    image: "/images/men_clothing.png",
    // image: "/images/kitchen_appliances.png",
    category: "Category 2",
  },
  {
    id: 3,
    name: "Agriculture Products",
    image: "/images/agriculture_products.png",
    // image: "/images/kitchen_appliances.png",
    category: "Category 3",
  },
  {
    id: 4,
    name: "Housing sales and renting",
    image: "/images/housing.png",
    // image: "/images/kitchen_appliances.png",
    category: "Category 4",
  },
];

const TopProducts: NextPage = () => {
  const [current, setCurrent] = useState(0);

  const nextProduct = () => {
    setCurrent(current === products.length - 1 ? 0 : current + 1);
  };

  const prevProduct = () => {
    setCurrent(current === 0 ? products.length - 1 : current - 1);
  };

  useEffect(() => {
    const timer = setInterval(nextProduct, 3000); // Change every 3 seconds

    return () => {
      clearInterval(timer); // Clean up the timer when the component unmounts
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <div className="w-[608px] h-[371px] rounded-lg bg-primary-green-600 relative">
      <div className="flex justify-center items-center h-[calc(100%-50px)] ">
        <div className="flex flex-col gap-10 items-start justify-start">
          <div className="flex flex-col justify-center items-start gap-2">
            <p className="text-primary-6 text-[8.356px] font-semibold leading-[10.44px]">
              Categories
            </p>
            <h3 className="w-[231.344px] text-text text-[25.067px] font-semibold leading-[31.333px] tracking-[1.003px]">
              {products[current].name}
            </h3>
            <h5 className="text-text w-[179px] text-Text-xs leading-[31.333px] tracking-[0.48px]">
              Get 50% discount
            </h5>
          </div>
          <Button
            href={`/product/${products[current].id}`}
            width="146px"
            variant="tertiary"
          >
            Buy Now
          </Button>
        </div>
        <div className="w-[263.2px] h-[261.111px] shrink-0 rounded-full opacity-30 bg-gray-10 filter blur-[53px] relative" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={products[current].image}
          alt={products[current].name}
          className="absolute right-12 z-10"
        />
      </div>
      <ArrowCircleLeft
        color="#80DEEB"
        size={40}
        className="bg-[#D9D9D933] rounded-full absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
        onClick={prevProduct}
      />
      <ArrowCircleRight
        color="#80DEEB"
        size={40}
        className="bg-[#D9D9D933] rounded-full absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
        onClick={nextProduct}
      />

      <div className="bottom-0 max-w-14 min-w-14 m-auto h-2 flex justify-between relative">
        {products.map((product, index) => (
          <span
            key={product.id}
            className="h-2 w-2 rounded-full bg-gray-5 inline-block transition-all duration-200 cursor-pointer"
            onClick={() => setCurrent(index)}
          />
        ))}
        <div
          style={{ left: `calc(${current * 30}% - ${current * 0.9}px)` }}
          className="h-2 w-2 rounded-full bg-primary-5 absolute bottom-0 transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default TopProducts;
