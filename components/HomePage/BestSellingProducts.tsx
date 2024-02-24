import React from "react";
import Button from "../UI/Button";
import { ArrowRight2 } from "iconsax-react";
import northCoat from "@/public/images/products/The-North-Face-x-Gucci-coat.png";
import gucciBag from "@/public/images/products/Gucci-Savoy-medium-duffle-bag.png";
import cpuCooler from "@/public/images/products/cpu-cooler.png";
import bookshelf from "@/public/images/products/small-bookshelf.png";
import Cart from "../UI/Cart";
import { NextPage } from "next";

const BestSellingProducts: NextPage = () => {
  const BestSellingProducts: itemProps[] = [
    {
      name: "The north coat",
      price: 360,
      images: [northCoat.src],
      discount: 10,
      variants: ["red"],
      rating: 5,
      totalRatings: 65,
    },
    {
      name: "Gucci duffle bag",
      price: 1160,
      images: [gucciBag.src],
      discount: 20,
      rating: 4.5,
      totalRatings: 65,
    },
    {
      name: "RGB liquid CPU cooler",
      price: 170,
      images: [cpuCooler.src],
      discount: 12,
      variants: ["black"],
      rating: 4.5,
      totalRatings: 65,
    },
    {
      name: "Small bookshelf",
      price: 360,
      images: [bookshelf.src],
      rating: 5,
      totalRatings: 65,
    },
  ];
  return (
    <section className="max-w-[1240px] mx-auto py-8">
      <div className="flex py-2.5 px-6 items-center justify-between bg-gray-10 rounded-t-lg">
        <h4 className="text-Display-xs font-medium">Best Selling Products</h4>

        <Button
          variant="text"
          rightIcon={<ArrowRight2 size={16} color="#0F0F0F" />}
        >
          <span className="text-sm uppercase font-medium text-dark-gray">
            View All
          </span>
        </Button>
      </div>
      <div className="flex py-9 px-8 justify-start items-center bg-gray-9 gap-x-7 gap-y-16 flex-wrap">
        {BestSellingProducts &&
          BestSellingProducts.map((item, i) => (
            <Cart key={i} item={item} showDiscount={false} isRed={false} />
          ))}
      </div>
    </section>
  );
};

export default BestSellingProducts;
