import { NextPage } from "next";
import Image from "next/image";

const CheckoutProduct: NextPage<CartItemProps> = ({
  productName,
  productImage,
  price,
}) => {
  return (
    <div className="w-full flex justify-between items-center gap-8">
      <div className="flex items-center relative gap-6 w-full">
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
    </div>
  );
};

export default CheckoutProduct;
