import {
  Box,
  Flex,
  Icon,
  Text,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiFillThunderbolt } from "react-icons/ai";
import { FiMenu, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import React from "react";

function Logo({ collapse, setCollapsed }) {
  let background = useColorModeValue("white", "gray.700");

  let textColor = useColorModeValue("gray.700", "white");

  const handleToggle = () => {
    setCollapsed(!collapse);
  };

  return (
    <>
      <Flex
        w="full"
        alignItems="center"
        justifyContent="center"
        flexDirection={collapse ? "row" : "column"}
        mb={"25px"}
        gap={4}
        position="relative"
      >
        <IconButton
          aria-label="Toggle Sidebar"
          icon={
            collapse ? (
              <Icon color={textColor} as={FiChevronRight} />
            ) : (
              <Icon color={textColor} as={FiChevronLeft} />
            )
          }
          position="absolute"
          variant="unstyled"
          bg={background}
          borderRadius="full"
          borderWidth="2px"
          borderColor="gray.200"
          top="54px"
          left="100%"
          transform="translate(-50%, -50%)"
          onClick={handleToggle}
        />
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems="center"
          gap={2}
          transition={"all .3s"}
          marginRight={collapse ? "0px" : "50px"}
        >
          {!collapse ? (
            <>
              <Icon color={textColor} as={AiFillThunderbolt} fontSize={30} />
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Text
                  fontWeight="bold"
                  fontSize={16}
                  textTransform={"uppercase"}
                  transition={"all .3s"}
                >
                  Dashboard
                </Text>
              </motion.div>
            </>
          ) : (
            <>
              <Icon
                textColor={textColor}
                as={AiFillThunderbolt}
                fontSize={30}
              />
            </>
          )}
        </Box>
      </Flex>
    </>
  );
}

export default Logo;
