import { NextPage } from "next";
import BreadCrumbs from "../UI/BreadCrumbs";
import CheckoutForm from "./CheckoutForm";
import CheckoutDetails from "./CheckoutDetails";

const Checkout: NextPage = () => {
  return (
    <div className="pt-10 max-w-[1170px] mx-auto">
      <BreadCrumbs />
      <h3 className="font-medium text-Display-md pb-10">Billing Details</h3>
      <div className="flex justify-between">
        <CheckoutForm />
        <CheckoutDetails />
      </div>
    </div>
  );
};

export default Checkout;
