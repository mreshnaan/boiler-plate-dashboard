import { Box, useStyleConfig } from "@chakra-ui/react";
function CardHeader( { variant, children, ...additional }) {
  const styles = useStyleConfig("CardHeader", { variant });
  return (
    <Box __css={styles} {...additional}>
      {children}
    </Box>
  );
}

export default CardHeader;
