import React from "react";
import Cart from "../UI/Cart";
import kidsElectricCarRed from "@/public/images/products/mercedes-benz-toy-car_red.png";
import kidsElectricCarGrey from "@/public/images/products/mercedes-benz-toy-car_grey.png";
import nintendoSwitchBlue from "@/public/images/products/nintendo-switch_blue.png";
import nintendoSwitchPink from "@/public/images/products/nintendo-switch_pink.png";
import shooterUsbGamepadWhite from "@/public/images/products/gp11-shooter-gamepad_white.png";
import shooterUsbGamepadBlack from "@/public/images/products/gp11-shooter-gamepad_black.png";
import satinJacketGreen from "@/public/images/products/quilted-satin-jacket_green.png";
import satinJacketBlack from "@/public/images/products/quilted-satin-jacket_black.png";
import dryDogFood from "@/public/images/products/breed-dry-dog-food.png";
import canonCamera from "@/public/images/products/canon-camera.png";
import asusLaptop from "@/public/images/products/asus-fnd-laptop.png";
import curologyProductSet from "@/public/images/products/curology-product-set.png";
import { NextPage } from "next";

const FeaturedProducts: NextPage = () => {
  const featuredProducts: itemProps[] = [
    {
      name: "Kids Electric Car",
      price: 960,
      images: [kidsElectricCarRed.src, kidsElectricCarGrey.src],
      variants: ["red", "grey"],
      rating: 5,
      totalRatings: 65,
      isNew: true,
    },
    {
      name: "Quilted Satin Jacket",
      price: 660,
      images: [satinJacketGreen.src, satinJacketBlack.src],
      variants: ["darkGreen", "black"],
      rating: 4.5,
      totalRatings: 55,
    },
    {
      name: "GP11 Shooter USB Gamepad",
      price: 660,
      images: [shooterUsbGamepadWhite.src, shooterUsbGamepadBlack.src],
      variants: ["white", "black"],
      rating: 4.5,
      totalRatings: 55,
      isNew: true,
    },

    {
      name: "Jr. Zoom Soccer Cleats",
      price: 1160,
      images: [nintendoSwitchBlue.src, nintendoSwitchPink.src],
      variants: ["blue", "pink"],
      rating: 5,
      totalRatings: 35,
    },
    {
      name: "Breed Dry Dog Food",
      price: 100,
      images: [dryDogFood.src],
      rating: 3,
      totalRatings: 35,
    },
    {
      name: "Canon Camera",
      price: 360,
      images: [canonCamera.src],
      rating: 4,
      totalRatings: 95,
    },
    {
      name: "Asus FHD Gaming Laptop",
      price: 700,
      images: [asusLaptop.src],
      rating: 5,
      totalRatings: 325,
    },
    {
      name: "Curology Product Set",
      price: 500,
      images: [curologyProductSet.src],
      rating: 4,
      totalRatings: 145,
    },
  ];

  return (
    <section className="max-w-[1240px] mx-auto">
      <h4 className="w-full flex py-2.5 items-center justify-center text-center text-dark-gray text-Display-xs font-medium">
        Featured Products
      </h4>

      <div className="flex py-9 px-8 justify-start items-center bg-gray-9 gap-x-7 gap-y-16 flex-wrap">
        {featuredProducts.map((item, index) => (
          <Cart key={index} item={item} isNew={item.isNew} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
