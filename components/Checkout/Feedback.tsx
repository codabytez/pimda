import React from "react";
import { NextPage } from "next";
import success from "@/public/images/success.svg";
import Image from "next/image";
import Button from "../UI/Button";

const Feedback: NextPage<{ feedback: boolean; onClose: () => void }> = ({
  feedback,
  onClose,
}) => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center w-[700px] h-[480px]">
      <div className="flex flex-col justify-center items-center">
        <Image src={success} alt="Success" width={219} height={219} />
        <h3 className="text-gray-2 text-center text-Display-md font-semibold">
          Order placed successful {feedback}
        </h3>
      </div>
      <Button size="lg" width="305px" onClick={onClose}>
        Go to Homepage
      </Button>
    </div>
  );
};

export default Feedback;
