import React from "react";
import { NextPage } from "next";
import { Button, Divider, HStack, VStack } from "@chakra-ui/react";
import Cart from "../UI/Cart";
import northCoat from "@/public/images/products/The-North-Face-x-Gucci-coat.png";
import gucciBag from "@/public/images/products/Gucci-Savoy-medium-duffle-bag.png";
import cpuCooler from "@/public/images/products/cpu-cooler.png";
import bookshelf from "@/public/images/products/small-bookshelf.png";
import { Add } from "iconsax-react";
import Link from "next/link";

const ListedProducts: NextPage = () => {
  const listedItems: itemProps[] = [
    {
      name: "The north coat",
      price: 360,
      images: [northCoat.src],
      rating: 5,
      totalRatings: 65,
      isNew: true,
    },
    {
      name: "Gucci duffle bag",
      price: 1160,
      images: [gucciBag.src],
      rating: 4.5,
      totalRatings: 65,
      isNew: true,
    },
    {
      name: "RGB liquid CPU cooler",
      price: 170,
      images: [cpuCooler.src],
      rating: 4.5,
      totalRatings: 65,
    },
    {
      name: "Small bookshelf",
      price: 360,
      images: [bookshelf.src],
      rating: 5,
      totalRatings: 65,
    },
  ];
  return (
    <HStack alignItems={"flex-start"} h={"full"}>
      <HStack
        spacing={7}
        flexWrap={"wrap"}
        alignItems={"flex-start"}
        borderRight={"1px solid #D6D6D6"}
        pr={3}
      >
        {listedItems.map((item, index) => (
          <Cart
            key={index}
            item={item}
            isNew={item.isNew}
            wishlist
            cta={"Analytics"}
          />
        ))}
      </HStack>
      <Divider orientation="vertical" />
      <VStack w={"180px"} h={"full"} pl={3}>
        <Button
          as={Link}
          leftIcon={<Add size={24} />}
          fontSize={14}
          href={"/seller-zone/post-product"}
        >
          Post a product
        </Button>
      </VStack>
    </HStack>
  );
};

export default ListedProducts;
