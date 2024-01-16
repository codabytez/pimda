import { NextPage } from "next";
import CartItem from "./CartItem";

const CartSection: NextPage<{
  cartItems: any[];
  setQuantity: (index: number, value: number) => void;
}> = ({ cartItems, setQuantity }) => {
  return (
    <div className="flex flex-col items-start gap-10 w-full">
      <div className="flex w-full max-w-[1170px] h-[72px] py-6 px-10 justify-between items-center rounded bg-white shadow-category-5">
        <p className="text-black">Product</p>
        <p className="text-black">Price</p>
        <p className="text-black">Quantity</p>
        <p className="text-black">Subtotal</p>
      </div>
      {cartItems.map((item: any, index: any) => (
        <CartItem key={index} {...item} setQuantity={setQuantity} />
      ))}
    </div>
  );
};

export default CartSection;
