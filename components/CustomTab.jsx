import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const tabs = [
  {
    title: "Tab 1",
    view: "EventView",
  },
  {
    title: "Tab 2",
    view: "EventView 2",
  },
];

function CustomTab() {
  return (
    <Tabs variant="unstyled" size="sm" isLazy>
      <TabList
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
        margin="0"
        padding="0"
        borderBottom="1px solid #e2e8f0"
        mb="4"
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            _selected={{
              color: "#2d3748",
              borderBottom: "3px solid #2d3748",
            }}
            _focus={{
              boxShadow: "none",
            }}
            _hover={{
              color: "#2d3748",
              borderBottom: "3px solid #2d3748",
            }}
            borderBottom="3px solid transparent"
            padding="1rem"
            fontSize="16px"
            fontWeight="bold"
            cursor="pointer"
            outline="none"
          >
            {tab.title}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabs.map((tab, index) => (
          <TabPanel key={index}>{tab.view}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

export default CustomTab;
