import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { FiLogOut, FiMoon, FiSun } from "react-icons/fi";
import BreadCrumbs from "../BreadCrumbs";
import { useRouter } from "next/router";
import PageTitle from "../PageTitle";

function Navbar({ collapsed }) {
  const { colorMode, toggleColorMode } = useColorMode();
  let navbarIcon = "gray.200";

  const router = useRouter();
  const currentPath = router.pathname;
  const pathSegments = currentPath
    .split("/")
    .filter((segment) => segment !== "");

  const breadcrumbs = pathSegments.map((segment, index) => {
    const breadcrumbPath = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLastSegment = index === pathSegments.length - 1;
    if (isLastSegment) {
      return {
        title: segment.charAt(0).toUpperCase() + segment.slice(1),
        link: breadcrumbPath,
        isLast: true,
      };
    }
    return {
      title: segment.charAt(0).toUpperCase() + segment.slice(1),
      link: breadcrumbPath,
      isLast: false,
    };
  });

  return (
    <>
      <Flex
        display="flex"
        mt={"28px"}
        minH="75px"
        transition="width 0.3s ease"
        alignItems={{ xl: "center" }}
        borderRadius="16px"
        justifyContent={"space-between"}
        lineHeight="25.6px"
        mx="auto"
        pb="8px"
        px={{
          sm: "15px",
          md: "30px",
        }}
        ps={{
          xl: "12px",
        }}
        w={{
          sm: "calc(100vw - 30px)",
          xl: `calc(100vw - 75px - ${collapsed ? "50px" : "200px"})`,
        }}
      >
        <Box mb={{ sm: "8px", md: "0px" }}>
          <BreadCrumbs routes={breadcrumbs} />
          <PageTitle  routes={breadcrumbs} />
        </Box>
        <Box display={"flex"} gap={"16px"}>
          <Button onClick={toggleColorMode} variant="transparent-with-icon">
            {colorMode === "light" ? (
              <>
                <FiMoon />
              </>
            ) : (
              <>
                <FiSun />
              </>
            )}
          </Button>
          <Link href="/">
            <Button
              ms="0px"
              px="0px"
              me={{ sm: "2px", md: "16px" }}
              color={navbarIcon}
              variant="transparent-with-icon"
              leftIcon={
                <FiLogOut color={navbarIcon} w="22px" h="22px" me="0px" />
              }
            >
              <Text display={{ sm: "none", md: "flex" }}>Log Out</Text>
            </Button>
          </Link>
        </Box>
      </Flex>
    </>
  );
}

export default Navbar;
