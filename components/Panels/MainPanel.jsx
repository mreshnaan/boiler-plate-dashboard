import { Box, useStyleConfig } from "@chakra-ui/react";
function MainPanel({ variant, children, ...additional }) {
  const styles = useStyleConfig("MainPanel", { variant });
  return (
    <Box __css={styles} {...additional}>
      {children}
    </Box>
  );
}

export default MainPanel;
