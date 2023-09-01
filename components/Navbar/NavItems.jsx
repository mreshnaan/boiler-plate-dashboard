import React from "react";
import Link from "next/link";
import { Button, Flex, Text, Icon } from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";

function NavItems() {
  return (
    <>
      <Flex
        pe={{ sm: "0px", md: "16px" }}
        w={{ sm: "100%", md: "auto" }}
        alignItems="center"
        flexDirection="row"
      >
        <Link href="/auth/signin">
          <Button
            ms="0px"
            px="0px"
            me={{ sm: "2px", md: "16px" }}
            colorScheme="blue"
            variant="transparent-with-icon"
            rightIcon={<Icon as={FaSignInAlt} boxSize={4} mr={2} />}
          >
            <Text display={{ sm: "none", md: "flex" }}>Sign In</Text>
          </Button>
        </Link>
      </Flex>
    </>
  );
}

export default NavItems;
