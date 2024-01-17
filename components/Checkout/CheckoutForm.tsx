import { NextPage } from "next";
import { Input } from "../UI/Input";

const CheckoutForm: NextPage = () => {
  return (
    <div className="inline-flex flex-col gap-6">
      <div className="flex flex-col gap-8 w-[470px]">
        <Input label="Full Name" variant="secondary" />
        <Input label="Company Name (optional)" variant="secondary" />
        <Input label="Street Address" variant="secondary" />
        <Input label="Apartment, floor, etc. (optional)" variant="secondary" />
        <Input label="Town / City" variant="secondary" />
        <Input label="Phone Number" variant="secondary" />
        <Input label="Email Address" variant="secondary" />
      </div>
      <div className="flex gap-4 items-center">
        <input
          type="checkbox"
          className="w-5 h-5 border-2 border-black relative z-10 rounded-sm outline-0 focus:ring-0 checked:bg-primary-5 cursor-pointer disabled:opacity-50"
          name="save"
        />
        <label htmlFor="save">
          Save this information for faster check-out next time
        </label>
      </div>
    </div>
  );
};

export default CheckoutForm;
