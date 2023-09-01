import React from "react";
import { Flex } from "@chakra-ui/react";

export default function IconBox({ children, ...additional } ) {

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"12px"}
      {...additional}
    >
      {children}
    </Flex>
  );
}
