import React from "react";
import Link from "next/link";
import Image from "next/image";
import dailyDealsIcon from "@/public/images/icons/daily-deals.svg";
import superOfferIcon from "@/public/images/icons/super-offer.svg";
import bookingIcon from "@/public/images/icons/booking.svg";
import weshop4uIcon from "@/public/images/icons/Bucket.svg";
import justFoodIcon from "@/public/images/icons/Food.svg";
import freshyFruitsIcon from "@/public/images/icons/apple.svg";
import fastFoodIcon from "@/public/images/icons/Fast-food.svg";
import jazaStockIcon from "@/public/images/icons/Profit.svg";
import merchantsIcon from "@/public/images/icons/New-Product.svg";
import breakfastIcon from "@/public/images/icons/Free-Breakfast.svg";
import paintIcon from "@/public/images/icons/Paint-Roller.svg";
import kyFishIcon from "@/public/images/icons/fish.svg";
import farmerIcon from "@/public/images/icons/Farmer.svg";
import pastriesIcon from "@/public/images/icons/Cake.svg";
import drinksIcon from "@/public/images/icons/Drinks.svg";
import { More } from "iconsax-react";
import { NextPage } from "next";

const ProductCategories: NextPage<productCategoriesProps> = ({
  limit,
  showMore,
  className,
}) => {
  const categories = [
    {
      name: "Daily Deals",
      icon: dailyDealsIcon,
    },
    {
      name: "Super Offers",
      icon: superOfferIcon,
    },
    {
      name: "Booking and Services",
      icon: bookingIcon,
    },
    {
      name: "WeShop4U",
      icon: weshop4uIcon,
    },
    {
      name: "Just Food",
      icon: justFoodIcon,
    },
    {
      name: "Freshy Fruits",
      icon: freshyFruitsIcon,
    },
    {
      name: "Fast Food",
      icon: fastFoodIcon,
    },
    {
      name: "Jaza Stock Your Biz",
      icon: jazaStockIcon,
    },
    {
      name: "Merchants and Merchandises",
      icon: merchantsIcon,
    },
    {
      name: "Fresh Sweet Breakfast",
      icon: breakfastIcon,
    },
    {
      name: "Just Fast Food",
      icon: jazaStockIcon,
    },
    {
      name: "Paints and Arts",
      icon: paintIcon,
    },
    {
      name: "Ky Fish",
      icon: kyFishIcon,
    },
    {
      name: "Farmers Market",
      icon: farmerIcon,
    },
    {
      name: "Whole Fresh Pastries",
      icon: pastriesIcon,
    },
    {
      name: "Drinks & Juices",
      icon: drinksIcon,
    },
  ];

  const displayedCategories = categories.slice(0, limit || categories.length);

  return (
    <div
      className={
        className
          ? className
          : "w-[233px] p-4 flex flex-col justify-end items-start rounded-lg bg-white shadow-shaf gap-3.5"
      }
    >
      {displayedCategories.map((category) => (
        <div key={category.name} className="flex items-end gap-2">
          <Image
            src={category.icon}
            width={24}
            height={24}
            alt={category.name}
          />
          <h5 className="text-Text-sm">{category.name}</h5>
        </div>
      ))}
      {showMore && (
        <Link href="/categories" className="flex items-end gap-2">
          <More color="#00BED7" />
          <span className="text-Text-sm font-inter">Other Categories</span>
        </Link>
      )}
    </div>
  );
};

export default ProductCategories;
