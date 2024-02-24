import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Gallery } from "iconsax-react";
import React from "react";

const ProfilePage = ({ username }: { username: string }) => {
  return (
    <VStack spacing={4} alignItems={"flex-start"}>
      <Heading as={"h2"} color={"#80DEEB"} fontSize={20} fontWeight={500}>
        Edit Your Profile {username}
      </Heading>

      <VStack spacing={6} align={"flex-start"}>
        <HStack spacing={8} alignItems={"flex-end"}>
          <Gallery size={98} color={"#323234"} />
          <FormControl display={"flex"} gap={"0px"}>
            <Input type="file" display={"none"} id="file" />
            <FormLabel
              htmlFor="file"
              w={"370px"}
              h={"56px"}
              borderRadius={4}
              bg={"#F5F5F5"}
              m={0}
            />

            <Button
              h={"56px"}
              p={"16px 48px"}
              borderRadius={4}
              border={"1px solid #80DEEB"}
              bg={"#FFF"}
            >
              Update image
            </Button>
          </FormControl>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ProfilePage;
