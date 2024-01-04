import React from "react";
import Cart from "../UI/Cart";
import kids_electric_car from "@/public/images/products/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car.png";
import soccer_cleats from "@/public/images/products/soccer-cleats.png";
import shooter_usb_gamepad from "@/public/images/products/gp11-shooter-gamepad.png";
import satin_jacket from "@/public/images/products/quilted-satin-jacket.png";
import dry_dog_food from "@/public/images/products/breed-dry-dog-food.png";
import canon_camera from "@/public/images/products/canon-camera.png";
import asus_laptop from "@/public/images/products/asus-fnd-laptop.png";
import curology_product_set from "@/public/images/products/curology-product-set.png";

const FeaturedProducts: React.FC = () => {
  const featuredProducts: itemProps[] = [
    {
      name: "Kids Electric Car",
      price: 960,
      images: [kids_electric_car.src, kids_electric_car.src],
      variants: ["#FB1314", "#082326"],
      rating: 5,
      totalRatings: 65,
      isNew: true,
    },
    {
      name: "Jr. Zoom Soccer Cleats",
      price: 1160,
      images: [soccer_cleats.src, soccer_cleats.src],
      variants: ["#FBBC04", "#082326"],
      rating: 5,
      totalRatings: 35,
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
      name: "Quilted Satin Jacket",
      price: 660,
      images: [satin_jacket.src, satin_jacket.src],
      variants: ["#31484A", "#082326"],
      rating: 4.5,
      totalRatings: 55,
    },
    {
      name: "Breed Dry Dog Food",
      price: 100,
      images: [dry_dog_food.src],
      rating: 3,
      totalRatings: 35,
    },
    {
      name: "Canon Camera",
      price: 360,
      images: [canon_camera.src],
      rating: 4,
      totalRatings: 95,
    },
    {
      name: "Asus FHD Gaming Laptop",
      price: 700,
      images: [asus_laptop.src],
      rating: 5,
      totalRatings: 325,
    },
    {
      name: "Curology Product Set",
      price: 500,
      images: [curology_product_set.src],
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
