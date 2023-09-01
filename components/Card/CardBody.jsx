import { Box, useStyleConfig } from "@chakra-ui/react";
function CardBody({ variant, children, ...additional }) {
  const styles = useStyleConfig("CardBody", { variant });
  return (
    <Box __css={styles} {...additional}>
      {children}
    </Box>
  );
}

export default CardBody;
