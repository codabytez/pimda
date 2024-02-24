import React from "react";
import { NextPage } from "next";
import { Button, HStack, Stack, VStack } from "@chakra-ui/react";
import BreadCrumbs from "../UI/BreadCrumbs";
import SideBar from "./sideBar";
import ProductInformation from "./productInformation";
import { ArrowRight2, Notepad2, Trash } from "iconsax-react";
import ProductDetailInformation from "./productDetailInformatiion";

const PostProduct: NextPage = () => {
  return (
    <Stack
      maxW={"1440px"}
      mt={"200px"}
      pb={28}
      mx={"auto"}
      spacing={20}
      alignItems={"flex-start"}
    >
      <HStack alignItems={"center"}>
        <BreadCrumbs />
      </HStack>
      <HStack alignItems={"flex-start"} spacing={16} w={"full"}>
        <SideBar />

        <VStack
          p={"50px 80px"}
          alignItems={"flex-start"}
          borderRadius={4}
          bg={"#FFF"}
          boxShadow={"0px 1px 13px 0px rgba(0, 0, 0, 0.05)"}
          w={"full"}
          spacing={20}
        >
          {/* <ProductInformation /> */}
          <ProductDetailInformation />

          <HStack w={"full"} spacing={6} justifyContent={"space-between"}>
            <Button
              size={"lg"}
              fontSize={20}
              lineHeight={28}
              color={"#66D8E7"}
              bg={"#FFF"}
              leftIcon={<Trash color="#1AC5DB" size={24} />}
              border={"1px solid #66D8E7"}
            >
              Cancel
            </Button>

            <HStack justifyContent={"flex-end"} spacing={6}>
              <Button
                size={"lg"}
                fontSize={20}
                lineHeight={28}
                color={"#66D8E7"}
                bg={"#FFF"}
                leftIcon={<Notepad2 color="#1AC5DB" size={24} />}
                border={"1px solid #66D8E7"}
              >
                Draft
              </Button>

              <Button
                size={"lg"}
                fontSize={20}
                lineHeight={28}
                color={"#000"}
                bg={"#66D8E7"}
                rightIcon={<ArrowRight2 color="#000" size={24} />}
                border={"1px solid #66D8E7"}
              >
                Cancel
              </Button>
            </HStack>
          </HStack>
        </VStack>
      </HStack>
    </Stack>
  );
};

export default PostProduct;
