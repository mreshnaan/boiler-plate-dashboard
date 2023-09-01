import { Box, useStyleConfig } from "@chakra-ui/react";
function PanelContainer({ variant, children, ...additional }) {
  const styles = useStyleConfig("PanelContainer", { variant });
  return (
    <Box __css={styles} {...additional}>
      {children}
    </Box>
  );
}

export default PanelContainer;
