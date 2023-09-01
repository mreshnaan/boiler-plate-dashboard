import {
  Box,
  IconButton,
  Icon,
  Text,
  useColorModeValue,
  Tooltip,
  Button,
} from "@chakra-ui/react";

import Link from "next/link";
import { ListIcon, Link as LinkChakra, Heading, Badge } from "@chakra-ui/react";
import { FiMenu, FiHome, FiSettings, FiUser, FiLogOut } from "react-icons/fi";
import { FaChartLine } from "react-icons/fa";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navlist from "./Nav/Navlist";
import { Separator } from "../Separator";
import { DashboardLogo } from "../Icons/Icons";
import Logo from "../Logo";

const Sidebar = ({ collapsed, setCollapsed }) => {
  let sidebarMargins = "16px 0px 16px 16px";

  let sidebarBg = useColorModeValue("white", "gray.800");
  let borderColor = useColorModeValue("teal", "gray");
  let textColor = useColorModeValue("gray.700", "white");
  let sidebarRadius = "16px";

  // const [alignItems, setAlignItems] = useState("flex-start");

  // useEffect(() => {
  //   if (collapsed) {
  //     const timeout = setTimeout(() => {
  //       setAlignItems("center");
  //     }, 300);

  //     return () => clearTimeout(timeout);
  //   } else {
  //     setAlignItems("flex-start");
  //   }
  // }, [collapsed]);

  return (
    <Box
      width={collapsed ? "80px" : "250px"}
      bg={sidebarBg}
      color={textColor}
      display={{ sm: "none", xl: "flex" }}
      flexDirection="column"
      alignItems={collapsed ? "center" : "flex-start"}
      justifyContent="space-between"
      p={4}
      transition="width 0.3s ease"
      maxW="250px"
      ms={{
        sm: "16px",
      }}
      my={{
        sm: "16px",
      }}
      h="calc(100vh - 32px)"
      m={sidebarMargins}
      borderRadius={sidebarRadius}
    >
      <Box w={"full"}>
        <Box pt={"15px"} mb="12px">
          <Logo collapse={collapsed} setCollapsed={setCollapsed} />
          <Separator></Separator>
        </Box>

        <Navlist collapse={collapsed} />
      </Box>
      {collapsed ? (
        <>
          <Tooltip
            label={"Logout"}
            aria-label="A tooltip"
            hasArrow
            fontSize="md"
            placement="right"
          >
            <IconButton
              color={textColor}
              aria-label="Logout"
              icon={<Icon as={FiLogOut} />}
              mb={"12px"}
              variant="unstyled"
              onClick={() => {
                // Handle logout functionality here
              }}
            />
          </Tooltip>
        </>
      ) : (
        <>
          <Button
            border={`.5px solid ${borderColor}`}
            color={textColor}
            w={"full"}
            mb={"12px"}
            bg={sidebarBg}
            _hover={{ bg: "teal.300" }}
          >
            Logout
          </Button>
        </>
      )}
    </Box>
  );
};

export default Sidebar;
