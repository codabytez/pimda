"use client";
import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { AddCircle, ArrowDown2, ArrowUp2 } from "iconsax-react";

const CartItem: NextPage<CartItemProps> = ({
  productName,
  productImage,
  price,
  quantity,
  setQuantity,
  index,
}) => {
  const increaseQuantity = () => {
    if (setQuantity) setQuantity(index, quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      if (setQuantity) setQuantity(index, quantity - 1);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1) {
      if (setQuantity) setQuantity(index, value);
    }
  };

  return (
    <div className="w-full h-[102px] flex justify-between items-center py-6 px-10 rounded bg-white shadow-category-5">
      <div className="flex flex-1 items-center relative gap-5">
        <AddCircle
          color="#DB4444"
          className="rotate-45 absolute -top-1.5 -left-3"
          variant="Bold"
        />
        <Image
          width={54}
          height={54}
          src={productImage}
          alt="LCD Monitor"
          className="py-2 px-0.5"
        />
        <p className="text-dark-gray">{productName}</p>
      </div>
      <p className="flex-1">${price}</p>

      <div className="flex flex-1 max-w-[72px] h-[44px] py-1.5 px-3 justify-center items-center rounded border border-black/40 relative">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleInputChange}
          className="h-full w-full text-center text-dark-gray font-medium border-none outline-none bg-transparent"
        />
        <div>
          <ArrowUp2
            onClick={increaseQuantity}
            className="cursor-pointer"
            size="16"
            color="#000"
          />
          <ArrowDown2
            onClick={decreaseQuantity}
            className="cursor-pointer"
            size="16"
            color="#000"
          />
        </div>
      </div>
      <p className="flex-1 flex justify-end">${quantity * price}</p>
    </div>
  );
};

export default CartItem;
