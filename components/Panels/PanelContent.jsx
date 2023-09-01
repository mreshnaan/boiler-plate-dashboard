import { Box, useStyleConfig } from "@chakra-ui/react";
function PanelContent({ variant, children, ...additional }) {
  const styles = useStyleConfig("PanelContent", { variant });
  return (
    <Box __css={styles} {...additional}>
      {children}
    </Box>
  );
}

export default PanelContent;
