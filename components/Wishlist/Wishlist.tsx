import { NextPage } from "next";
import WishlistProducts from "./WishlistProducts";
import RecentlyViewed from "./RecentlyViewed";

const Wishlist: NextPage = () => {
  return (
    <div className="flex flex-col items-start gap-20 pt-12 max-w-[1240px] mx-auto">
      <WishlistProducts />
      <RecentlyViewed />
    </div>
  );
};

export default Wishlist;