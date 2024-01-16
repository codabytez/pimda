import { NextPage } from "next";
import Button from "../UI/Button";
import north_coat from "@/public/images/products/The-North-Face-x-Gucci-coat.png";
import gucci_bag from "@/public/images/products/Gucci-Savoy-medium-duffle-bag.png";
import cpu_cooler from "@/public/images/products/cpu-cooler.png";
import havit_pad from "@/public/images/products/g92-hv-pad.png";
import Cart from "../UI/Cart";

const WishlistProducts: NextPage = () => {
  const wishlistProducts: itemProps[] = [
    {
      name: "Gucci duffle bag",
      price: 1160,
      images: [gucci_bag.src],
      discount: 35,
      rating: 4.5,
      totalRatings: 65,
    },
    {
      name: "RGB liquid CPU cooler",
      price: 170,
      images: [cpu_cooler.src],
      variants: ["black"],
      rating: 4.5,
      totalRatings: 65,
    },
    {
      name: "HAVIT HV-G92 Gamepad",
      price: 160,
      images: [havit_pad.src],
      variants: ["red"],
      rating: 5,
      totalRatings: 88,
    },
    {
      name: "The north coat",
      price: 360,
      images: [north_coat.src],
      variants: ["red"],
      rating: 5,
      totalRatings: 65,
    },
  ];
  return (
    <section className="flex flex-col items-start gap-[60px] w-full">
      <div className="flex items-center justify-between w-full">
        <p className="text-dark-gray text-center text-Text-xl">Wishlist (4)</p>
        <Button variant="tertiary" size="lg">
          Move All to Cart
        </Button>
      </div>
      <div className="flex gap-[30px]">
        {wishlistProducts.map((item, index) => (
          <Cart key={index} item={item} isRed={false} wishlist />
        ))}
      </div>
    </section>
  );
};

export default WishlistProducts;
