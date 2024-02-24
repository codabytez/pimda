import React from "react";
import { NextPage } from "next";
import { Text, VStack } from "@chakra-ui/react";

const steps = [
  "Product Information",
  "Product Detail Information",
  "Product Variant Creation",
  "Logistics and Shipment",
  "Bulk Purchase Discounts",
];

const SideBar: NextPage = () => {
  return (
    <VStack justifyContent={"center"} spacing={6} mt={12} minW={"214px"}>
      {steps.map((step, index) => (
        <VStack key={index} spacing={2}>
          <VStack
            justifyContent={"center"}
            w={8}
            h={8}
            bg={index === 0 ? "#082326" : "#FFF"}
            borderRadius={40}
            border={"1px solid #082326"}
          >
            <Text
              textAlign={"center"}
              fontSize={16}
              fontWeight={500}
              color={index === 0 ? "#FFF" : "#082326"}
              lineHeight={"normal"}
            >
              {index + 1}
            </Text>
          </VStack>

          <Text color={"#848485"} fontSize={16} textAlign={"center"}>
            {step}
          </Text>
        </VStack>
      ))}
    </VStack>
  );
};

export default SideBar;
