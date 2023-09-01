import { Box, useStyleConfig } from "@chakra-ui/react";
function Card({ variant, children, ...additional }) {
  const styles = useStyleConfig("Card", { variant });
  return (
    <Box __css={styles} {...additional}>
      {children}
    </Box>
  );
}

export default Card;
