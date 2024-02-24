"use client";
import React from "react";
import { NextPage } from "next";
import { VStack, Heading, HStack, Text } from "@chakra-ui/react";
import { ArrowCircleLeft2 } from "iconsax-react";

const ProductDetailInformation: NextPage = () => {
  return (
    <VStack alignItems={"flex-start"} spacing={6} w={"full"}>
      <HStack spacing={2} cursor={"pointer"}>
        <ArrowCircleLeft2 size={24} color={"#62676C"} />
        <Text fontSize={20} color={"#62676C"} w={"100px"}>
          Back
        </Text>
      </HStack>
      <Heading as={"h4"} fontSize={20} fontWeight={500} color={"#082326"}>
        Product Detail Information
      </Heading>
    </VStack>
  );
};

export default ProductDetailInformation;
