"use client";
import {
  HStack,
  Heading,
  VStack,
  Stack,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import BreadCrumbs from "@/components/UI/BreadCrumbs";
import { usePathname } from "next/navigation";

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Stack maxW={"1440px"} mt={"200px"} pb={28} mx={"auto"} spacing={20}>
      <HStack w={"full"} justifyContent={"space-between"} alignItems={"center"}>
        <HStack alignItems={"center"}>
          <BreadCrumbs />
        </HStack>

        <Text fontSize={14} color={"#000"}>
          Welcome!{" "}
          <Text as={"span"} color={"#80DEEB"}>
            username
          </Text>
        </Text>
      </HStack>
      <HStack w={"full"} alignItems={"flex-start"}>
        <VStack w={"300px"} spacing={5} alignItems={"flex-start"}>
          <Heading as={"h4"} color={"#000"} fontSize={16} fontWeight={500}>
            Manage my profile
          </Heading>
          <VStack spacing={2} alignItems={"flex-start"}>
            <ChakraLink
              as={Link}
              href={`/seller-zone/${"username"}`}
              color={pathname.endsWith("username") ? "blue.500" : "inherit"}
            >
              My Profile
            </ChakraLink>
            <ChakraLink
              as={Link}
              href={`/seller-zone/${"username"}/e-wallet`}
              color={pathname.includes("e-wallet") ? "blue.500" : "inherit"}
            >
              My E-wallet
            </ChakraLink>

            <ChakraLink
              as={Link}
              href={`/seller-zone/${"username"}/transaction-history`}
              color={
                pathname.includes("transaction-history")
                  ? "blue.500"
                  : "inherit"
              }
            >
              Transaction History
            </ChakraLink>
          </VStack>

          <Heading as={"h4"} color={"#000"} fontSize={16} fontWeight={500}>
            Manage my products
          </Heading>

          <VStack spacing={2} alignItems={"flex-start"}>
            <ChakraLink
              as={Link}
              href={`/seller-zone/${"username"}/listed-products`}
              color={
                pathname.includes("listed-products") ? "blue.500" : "inherit"
              }
            >
              Listed Products
            </ChakraLink>

            <ChakraLink
              as={Link}
              href={`/seller-zone/${"username"}/draft-products`}
              color={
                pathname.includes("draft-products") ? "blue.500" : "inherit"
              }
            >
              Drafts
            </ChakraLink>
          </VStack>
        </VStack>

        <HStack
          p={10}
          borderRadius={"4px"}
          bg={"#FFF"}
          spacing={5}
          boxShadow={"0px 1px 13px 0px rgba(0, 0, 0, 0.05)"}
          alignItems={"flex-start"}
          w={"full"}
        >
          {children}
        </HStack>
      </HStack>
    </Stack>
  );
}
