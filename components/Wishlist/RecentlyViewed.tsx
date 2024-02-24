import React from "react";
import { NextPage } from "next";
import Button from "../UI/Button";
import { ArrowRight2 } from "iconsax-react";
import shooterUsbGamepad from "@/public/images/products/gp11-shooter-gamepad_white.png";
import asusLaptop from "@/public/images/products/asus-fnd-laptop.png";
import lcdMonitor from "@/public/images/products/gaming-monitor.png";
import akKeyboard from "@/public/images/products/ak-900-keyboard.png";
import Cart from "../UI/Cart";

const RecentlyViewed: NextPage = () => {
  const recentlyViewedProducts: itemProps[] = [
    {
      name: "Asus FHD Gaming Laptop",
      price: 700,
      images: [asusLaptop.src],
      rating: 5,
      totalRatings: 325,
    },
    {
      name: "GP11 Shooter USB Gamepad",
      price: 660,
      images: [shooterUsbGamepad.src],
      rating: 4.5,
      totalRatings: 55,
      isNew: true,
    },
    {
      name: "IPS LCD Gaming Monitor",
      price: 400,
      images: [lcdMonitor.src],
      variants: ["black"],
      rating: 5,
      totalRatings: 99,
    },
    {
      name: "AK-900 Wired Keyboard",
      price: 1160,
      images: [akKeyboard.src],
      rating: 4,
      totalRatings: 75,
    },
  ];
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex py-2.5 px-6 items-center justify-between bg-gray-10">
        <h4 className="text-Display-xs font-medium">Recently Viewed</h4>

        <Button
          variant="text"
          rightIcon={<ArrowRight2 size={16} color="#0F0F0F" />}
        >
          <span className="text-sm uppercase font-medium text-dark-gray">
            View All
          </span>
        </Button>
      </div>

      <div className="flex gap-[30px]">
        {recentlyViewedProducts.map((item, index) => (
          <Cart key={index} item={item} recentlyViewed isNew={item?.isNew} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
