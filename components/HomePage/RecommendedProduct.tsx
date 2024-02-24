import React from "react";
import bodyLotion from "@/public/images/body-lotion.png";
import cream from "@/public/images/cream.png";
import Image from "next/image";
import Button from "../UI/Button";
import { NextPage } from "next";

const RecommendedProduct: NextPage = () => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center  rounded-lg bg-gray-1 relative overflow-hidden">
      <div className="flex py-2.5 px-3 items-center gap-2.5 bg-[#1B1B1B4D] rounded-[15px] absolute top-0 left-0">
        <h5 className="text-gray-9 text-Text-md font-medium">
          Recommended Product
        </h5>
      </div>
      <Image
        src={bodyLotion}
        width={56}
        height={221}
        alt="body lotion"
        className="absolute top-0 right-0"
      />
      <div className="relative w-full flex justify-center">
        <div className="w-[263.2px] h-[261.111px] shrink-0 rounded-full opacity-30 bg-gray-9 filter blur-[52.2px] absolute left-0" />
        <div className="w-[165px] h-[221px] relative">
          <Image
            src={cream}
            width={165}
            height={221}
            alt="cream"
            className="absolute top-0 right-0"
          />
        </div>
      </div>
      <Button width="162px">Buy Now</Button>
    </div>
  );
};

export default RecommendedProduct;
