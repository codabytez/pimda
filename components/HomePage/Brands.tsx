import React from "react";
import Button from "../UI/Button";
import { ArrowRight2 } from "iconsax-react";
import Image from "next/image";

const Brands: React.FC = () => {
  const brands = [
    "oraimo",
    "tecno",
    "nivea",
    "nestle",
    "pernod_ricard",
    "coca_cola",
    "binatone",
    "mi",
    "efacto",
    "diageo",
    "unilever",
    "thermocool",
  ];

  return (
    <section className="max-w-[1240px] flex flex-col gap-6 py-4 mx-auto">
      <div className="flex py-2.5 px-6 items-center justify-between bg-gray-10 rounded-t-lg">
        <h4 className="text-dark-fray text-Display-xs font-medium">Brands</h4>
        <Button
          variant="text"
          rightIcon={<ArrowRight2 size={16} color="#0F0F0F" />}
        >
          <span className="text-sm uppercase font-medium text-dark-gray">
            View All
          </span>
        </Button>
      </div>

      <div className="flex items-start p-6 gap-6 bg-gray-9 rounded-b-lg flex-wrap">
        {brands &&
          brands.map((brand, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-[178px] h-[132px] bg-gray-6 rounded-lg overflow-hidden shrink-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/brands/${brand}.png`}
                alt={brand}
                // width={178}
                // height={132}
                className="w-full h-auto object-cover object-center"
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Brands;
