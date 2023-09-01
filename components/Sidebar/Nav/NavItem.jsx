import {
  Button,
  Flex,
  Icon,
  Link,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import IconBox from "../../Icons/IconBox";

function Navitem({ item, collapse }) {
  const location = useRouter();

  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };
  const activeBg = useColorModeValue("#0000001f", "#f0f8ff17");
  const inactiveBg = useColorModeValue("white", "gray.700");
  const activeColor = useColorModeValue("gray.700", "white");
  const inactiveColor = useColorModeValue("gray.400", "gray.400");

  return (
    <>
      <Link href={item.path}>
        {collapse && (
          <>
            <Tooltip
              label={item.label}
              aria-label="A tooltip"
              hasArrow
              fontSize="md"
              placement="right"
            >
              <Button
                boxSize="initial"
                justifyContent={"center"}
                alignItems="center"
                bg={
                  activeRoute(item.path) === "active" ? activeBg : "transparent"
                }
                mb={{
                  xl: "12px",
                }}
                mx={{
                  xl: "auto",
                }}
                ps={{
                  sm: "10px",
                  xl: "16px",
                }}
                py="12px"
                borderRadius="15px"
                _hover="none"
                w="100%"
                _active={{
                  bg: "inherit",
                  transform: "none",
                  borderColor: "transparent",
                }}
                _focus={{
                  boxShadow: "none",
                }}
              >
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={"12px"}
                >
                  <IconBox bg="teal.300" color="white" h="30px" w="30px">
                    {item.icon}
                  </IconBox>
                </Flex>
              </Button>
            </Tooltip>
          </>
        )}

        {!collapse && (
          <>
            <Button
              boxSize="initial"
              justifyContent={"flex-start"}
              alignItems="center"
              bg={
                activeRoute(item.path) === "active" ? activeBg : "transparent"
              }
              mb={{
                xl: "12px",
              }}
              mx={{
                xl: "auto",
              }}
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="12px"
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                gap={"12px"}
              >
                <IconBox bg="teal.300" color="white" h="30px" w="30px">
                  {item.icon}
                </IconBox>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Text
                    color={
                      activeRoute(item.path) === "active"
                        ? activeColor
                        : inactiveColor
                    }
                    my="auto"
                  >
                    {item.label}
                  </Text>
                </motion.div>
              </Flex>
            </Button>
          </>
        )}
      </Link>
    </>
  );
}

export default Navitem;
