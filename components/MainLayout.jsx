import { Box, Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainPanel from "./Panels/MainPanel";
import PanelContainer from "./Panels/PanelContainer";
import PanelContent from "./Panels/PanelContent";
import Navbar from "./Navbar";

function MainLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const background = useColorModeValue("white", "gray.700");
  let sidebarRadius = "16px";
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <HStack
      w="full"
      h={{ sm: "100%", xl: "100%" }}
      minHeight={"100vh"}
      alignItems={"start"}
      bg={background}
      color={textColor}
      transition={"all .3s ease"}
    >
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      {/* Main */}
      {/* Top Menu */}
      {/* Content */}
      <MainPanel
        transition={"all .3s ease"}
        w={{
          base: "100%",
        }}
      >
        {/* Top Menu */}
        <Navbar collapsed={collapsed} />
        {/* Content */}
        <PanelContainer transition={"all .3s ease"}>
          <PanelContent transition={"all .3s ease"}>{children}</PanelContent>
        </PanelContainer>
      </MainPanel>
    </HStack>
  );
}

export default MainLayout;
