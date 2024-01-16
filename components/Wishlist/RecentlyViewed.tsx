import { NextPage } from "next";
import Button from "../UI/Button";
import { ArrowRight2 } from "iconsax-react";
import shooter_usb_gamepad from "@/public/images/products/gp11-shooter-gamepad.png";
import asus_laptop from "@/public/images/products/asus-fnd-laptop.png";
import lcd_monitor from "@/public/images/products/gaming-monitor.png";
import ak_keyboard from "@/public/images/products/ak-900-keyboard.png";
import Cart from "../UI/Cart";

const RecentlyViewed: NextPage = () => {
  const recentlyViewedProducts: itemProps[] = [
    {
      name: "Asus FHD Gaming Laptop",
      price: 700,
      images: [asus_laptop.src],
      rating: 5,
      totalRatings: 325,
    },
    {
      name: "GP11 Shooter USB Gamepad",
      price: 660,
      images: [shooter_usb_gamepad.src, shooter_usb_gamepad.src],
      variants: ["#000000", "#082326"],
      rating: 4.5,
      totalRatings: 55,
      isNew: true,
    },
    {
      name: "IPS LCD Gaming Monitor",
      price: 400,
      images: [lcd_monitor.src],
      variants: ["black"],
      rating: 5,
      totalRatings: 99,
    },
    {
      name: "AK-900 Wired Keyboard",
      price: 1160,
      images: [ak_keyboard.src],
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
