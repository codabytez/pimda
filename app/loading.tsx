import { Stack } from "@chakra-ui/react";
import React from "react";
import { ImSpinner8 } from "react-icons/im";
const Loading = () => {
  return (
    <Stack
      w={"full"}
      h={"50vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <ImSpinner8 className="w-6 h-6  text-primary-green-600 animate-spin" />
    </Stack>
  );
};

export default Loading;
