"use client";
import React from "react";
import { NextPage } from "next";
import lcdMonitor from "@/public/images/products/gaming-monitor.png";
import gamepad from "@/public/images/products/g92-hv-pad.png";
import CheckoutProduct from "./CheckoutProduct";
import { Input } from "../UI/Input";
import Button from "../UI/Button";
import mastercard from "@/public/images/mastercard.png";
import visa from "@/public/images/visacard.png";
import nagad from "@/public/images/nagadcard.png";
import bkash from "@/public/images/bkashcard.png";
import Image from "next/image";
import { Modal } from "../UI/Modal";
import { useState } from "react";
import Feedback from "./Feedback";

const CheckoutDetails: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const checkoutProducts: CartItemProps[] = [
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
  ];

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="inline-flex flex-col gap-8">
      {checkoutProducts.map((product, index) => (
        <CheckoutProduct key={index} {...product} />
      ))}

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p>Subtotal:</p>
          <p>$1750</p>
        </div>
        <span className="w-full h-[1px] bg-black/40" />
        <div className="flex justify-between items-center">
          <p>Shipping:</p>
          <p>Free</p>
        </div>
        <span className="w-full h-[1px] bg-black/40" />
        <div className="flex justify-between items-center">
          <p>Total:</p>
          <p>$1750</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <label className="checkbox">
            <input type="radio" name="paymentMethod" value="bank" />
            <span className="checkbox"></span>
          </label>
          <label htmlFor="bank">Bank</label>
        </div>
        <div className="flex gap-2 items-center">
          <Image src={bkash} alt="bkash" width={42} height={28} />
          <Image src={visa} alt="visa" width={42} height={28} />
          <Image src={mastercard} alt="mastercard" width={42} height={28} />
          <Image src={nagad} alt="nagad" width={42} height={28} />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <label className="checkbox">
            <input type="radio" name="paymentMethod" value="cashOnDelivery" />
            <span className="checkbox"></span>
          </label>
          <label htmlFor="cashOnDelivery">Cash on Delivery</label>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <Input variant="primary" width="300px" placeholder="coupon code" />
        <Button variant="tertiary">Apply Coupon</Button>
      </div>
      <Button width="190px" size="lg" onClick={handleModalOpen}>
        Place Order
      </Button>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <Feedback onClose={handleModalClose} feedback={true} />
      </Modal>

      <style jsx>{`
        .checkbox {
          display: inline-block;
          width: 24px;
          height: 24px;
          position: relative;
        }
        .checkbox::before {
          content: "";
          position: absolute;
          width: 24px;
          height: 24px;
          border: 2px solid black;
          border-radius: 50%;
          background: white;
          box-sizing: border-box;
        }
        .checkbox::after {
          content: "";
          position: absolute;
          width: 16px;
          height: 16px;
          background: black;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
        }
        .checkbox input {
          display: none;
        }
        .checkbox input:checked ~ .checkbox::after {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default CheckoutDetails;
