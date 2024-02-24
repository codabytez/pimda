import React from "react";
import Hero from "./Hero";
import Brands from "./Brands";
import Flashsales from "./Flashsales";
import ProductHighlight from "./ProductHighlight";
import BestSellingProducts from "./BestSellingProducts";
import FeaturedProducts from "./FeaturedProducts";
import Collections from "./Collections";
import Services from "../AboutPage/Services";
import { NextPage } from "next";
import SecondaryNav from "@/components/HomePage/SecondaryNav";

const Homepage: NextPage = () => {
  return (
    <main className="max-w-[1440px] mt-[150px] pb-28 mx-auto">
      <SecondaryNav />

      <Hero />
      <Brands />
      <Flashsales />
      <section className="py-4 max-w-[1240px] mx-auto">
        <ProductHighlight />
      </section>
      <BestSellingProducts />
      <FeaturedProducts />
      <ProductHighlight />
      <Collections />
      <section className="pt-20 max-w-[1240px] mx-auto">
        <Services />
      </section>
    </main>
  );
};

export default Homepage;
