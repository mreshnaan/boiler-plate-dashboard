import React from "react";
import { List, ListItem } from "@chakra-ui/react";

import NavItem from "./NavItem";
import { items } from "../../Data/menuItems";

function Navlist({ collapse }) {
  return (
    <List w="full" my={8}>
      {items.map((item, index) => (
        <ListItem w={"full"} key={index}>
          <NavItem item={item} collapse={collapse} />
        </ListItem>
      ))}
    </List>
  );
}

export default Navlist;
