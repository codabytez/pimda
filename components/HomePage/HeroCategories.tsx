import React from "react";
import ProductCategories from "../Categories/ProductCategories";

const HeroCategories: React.FC = () => {
  return (
    // <div className="flex p-4 flex-col flex-1 items-center rounded-lg bg-white">
    <ProductCategories
      limit={8}
      showMore
      className="flex p-4 flex-col flex-1 items-start gap-3 rounded-lg bg-white"
    />
    // </div>
  );
};

export default HeroCategories;
