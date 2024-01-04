import React from "react";
import HeroCategories from "./HeroCategories";
import TopProducts from "./TopProducts";
import RecommendedProduct from "./RecommendedProduct";

const Hero: React.FC = () => {
  return (
    <section className="flex items-stretch justify-stretch gap-6 py-4 max-w-[1240px] m-auto">
      <HeroCategories />
      <TopProducts />
      <RecommendedProduct />
    </section>
  );
};

export default Hero;
