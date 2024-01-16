import { NextPage } from "next";
import Button from "../UI/Button";

const CartTotal: NextPage<{ cartItems: CartItemProps[] }> = ({ cartItems }) => {
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);


  return (
    <div className="w-[470px] h-[324px] py-8 px-6 rounded border-2 border-gray-7 flex flex-col gap-6">
      <p className="text-Text-xl fomt-medium">Cart Total</p>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p>Subtotal:</p>
          <p>${subtotal}</p>
        </div>
        <span className="w-full h-[1px] bg-black/40" />
        <div className="flex justify-between items-center">
          <p>Shipping:</p>
          <p>Free</p>
        </div>
        <span className="w-full h-[1px] bg-black/40" />
        <div className="flex justify-between items-center">
          <p>Total:</p>
          <p>${subtotal}</p>
        </div>
        <div className="flex justify-center">
          <Button size="lg">Proceed to Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
