import { useColorModeValue } from "@chakra-ui/react";

export const useColorSchema = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const paginationBg = useColorModeValue("white", "gray.800");
  const tableColor = useColorModeValue("gray", "teal");

  return {
    textColor,
    paginationBg,
    tableColor,
  };
};
