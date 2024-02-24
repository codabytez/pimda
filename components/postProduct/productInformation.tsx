"use client";
import React, { useRef } from "react";
import { NextPage } from "next";
import {
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { GalleryAdd } from "iconsax-react";

const ProductInformation: NextPage = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onVStackClick = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  };

  return (
    <VStack alignItems={"flex-start"} spacing={6} w={"full"}>
      <Heading as={"h4"} fontSize={20} fontWeight={500} color={"#082326"}>
        Product Information
      </Heading>

      <FormControl id={"productName"}>
        <FormLabel htmlFor="productName">Product name</FormLabel>
        <Input h={"50px"} bg={"#F5F5F5"} w={"full"} />
      </FormControl>

      <FormControl id={"productImages"}>
        <FormLabel htmlFor="productImages">Product images</FormLabel>
        <Input
          type="file"
          display={"none"}
          ref={fileInputRef}
          multiple
          accept="image/*"
          onChange={(event) => {
            const files = event.target.files;
            console.log(files);
          }}
        />
        <HStack
          h={"198px"}
          p={"67px"}
          justifyContent={"center"}
          flex={"1 0 0"}
          borderRadius={4}
          bg={"#FFF"}
          border={"0.6px dashed #62676C"}
        >
          <VStack spacing={3} onClick={onVStackClick} cursor={"pointer"}>
            <GalleryAdd size={37} color="#7F8389" />
            <Text color={"#62676C"} fontSize={13}>
              Browser or Desktop
            </Text>
          </VStack>
        </HStack>
      </FormControl>

      <VStack spacing={10} alignItems={"flex-start"} w={"90%"} maxW={"600px"}>
        <HStack spacing={16} w={"full"}>
          <FormControl id={"productCurrency"}>
            <FormLabel htmlFor="productCurrency">Product currency</FormLabel>
            <Select placeholder={"Unselected"} w={"210px"} h={"50px"}>
              <option value={"usd"}>USD</option>
              <option value={"ngn"}>NGN</option>
            </Select>
          </FormControl>

          <FormControl id={"productPrice"}>
            <FormLabel htmlFor="productPrice">Price</FormLabel>
            <Input h={"50px"} bg={"#F5F5F5"} w={"full"} />
          </FormControl>
        </HStack>

        <Checkbox defaultChecked size={"lg"}>
          Negotiable
        </Checkbox>
      </VStack>

      <FormControl id={"productDescription"}>
        <FormLabel htmlFor="productDescription">Description</FormLabel>
        <Textarea
          bg={"#F5F5F5"}
          h={"150px"}
          w={"full"}
          resize={"none"}
          size={"lg"}
          placeholder="Write product description"
        />
      </FormControl>

      <FormControl id={"productQuantity"}>
        <FormLabel htmlFor="productQuantity">Quantity</FormLabel>
        <Input h={"50px"} bg={"#F5F5F5"} w={"330px"} />
      </FormControl>
    </VStack>
  );
};

export default ProductInformation;
