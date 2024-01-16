import Link from "next/link";
import Image from "next/image";
import daily_deals_icon from "@/public/images/icons/daily-deals.svg";
import super_offer_icon from "@/public/images/icons/super-offer.svg";
import booking_icon from "@/public/images/icons/booking.svg";
import weshop4u_icon from "@/public/images/icons/Bucket.svg";
import just_food_icon from "@/public/images/icons/Food.svg";
import freshy_fruits_icon from "@/public/images/icons/apple.svg";
import fast_food_icon from "@/public/images/icons/Fast-food.svg";
import jaza_stock_icon from "@/public/images/icons/Profit.svg";
import merchants_icon from "@/public/images/icons/New-Product.svg";
import breakfast_icon from "@/public/images/icons/Free-Breakfast.svg";
import paint_icon from "@/public/images/icons/Paint-Roller.svg";
import ky_fish_icon from "@/public/images/icons/fish.svg";
import farmer_icon from "@/public/images/icons/Farmer.svg";
import pastries_icon from "@/public/images/icons/Cake.svg";
import drinks_icon from "@/public/images/icons/Drinks.svg";
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
      icon: daily_deals_icon,
    },
    {
      name: "Super Offers",
      icon: super_offer_icon,
    },
    {
      name: "Booking and Services",
      icon: booking_icon,
    },
    {
      name: "WeShop4U",
      icon: weshop4u_icon,
    },
    {
      name: "Just Food",
      icon: just_food_icon,
    },
    {
      name: "Freshy Fruits",
      icon: freshy_fruits_icon,
    },
    {
      name: "Fast Food",
      icon: fast_food_icon,
    },
    {
      name: "Jaza Stock Your Biz",
      icon: jaza_stock_icon,
    },
    {
      name: "Merchants and Merchandises",
      icon: merchants_icon,
    },
    {
      name: "Fresh Sweet Breakfast",
      icon: breakfast_icon,
    },
    {
      name: "Just Fast Food",
      icon: jaza_stock_icon,
    },
    {
      name: "Paints and Arts",
      icon: paint_icon,
    },
    {
      name: "Ky Fish",
      icon: ky_fish_icon,
    },
    {
      name: "Farmers Market",
      icon: farmer_icon,
    },
    {
      name: "Whole Fresh Pastries",
      icon: pastries_icon,
    },
    {
      name: "Drinks & Juices",
      icon: drinks_icon,
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
