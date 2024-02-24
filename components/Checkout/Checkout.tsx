import React from "react";
import { NextPage } from "next";
import BreadCrumbs from "../UI/BreadCrumbs";
import CheckoutForm from "./CheckoutForm";
import CheckoutDetails from "./CheckoutDetails";

const Checkout: NextPage = () => {
  return (
    <div className="max-w-[1170px] mx-auto mt-[200px] pb-28">
      <BreadCrumbs />
      <h3 className="font-medium text-Display-md pb-10 mt-20">
        Billing Details
      </h3>
      <div className="flex justify-between">
        <CheckoutForm />
        <CheckoutDetails />
      </div>
    </div>
  );
};

export default Checkout;
