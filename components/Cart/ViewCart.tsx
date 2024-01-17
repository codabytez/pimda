"use client";
import { NextPage } from "next";
import CartTotal from "./CartTotal";
import BreadCrumbs from "../UI/BreadCrumbs";
import CartSection from "./CartSection";
import lcdMonitor from "@/public/images/products/gaming-monitor.png";
import gamepad from "@/public/images/products/g92-hv-pad.png";
import { useState } from "react";

const ViewCart: NextPage = () => {
  // const [newQuantity, setNewQuantity] = useState<number | null>(null);

  const [cartItems, setCartItems] = useState<CartItemProps[]>([
    {
      productName: "IPS LCD Gaming Monitor",
      productImage: lcdMonitor.src,
      price: 400,
      quantity: 1,
      index: 0,
    },
    {
      productName: "HAVIT HV-G92 Gamepad",
      productImage: gamepad.src,
      price: 160,
      quantity: 1,
      index: 1,
    },
  ]);

  const setQuantity = (index: number, value: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, quantity: value } : item
      )
    );
  };

  return (
    <div className="max-w-[1170px] mx-auto mt-[200px] pb-28">
      <BreadCrumbs />
      <div className="flex flex-col gap-20">
        <CartSection cartItems={cartItems} setQuantity={setQuantity} />
        <CartTotal cartItems={cartItems} />
      </div>
    </div>
  );
};

export default ViewCart;
