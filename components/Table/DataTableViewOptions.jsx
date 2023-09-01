import React from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { FaSlidersH, FaEye, FaEyeSlash } from "react-icons/fa";

function DataTableViewOptions({
   columns, 
   setColumns
   }) {
  // Function to toggle the visibility of a column
  const toggleColumnVisibility = (dataIndex) => {
    const updatedColumns = columns.map((column) => {
      if (column.dataIndex === dataIndex) {
        return {
          ...column,
          show: !column.show,
        };
      }
      return column;
    });
    setColumns(updatedColumns);
  };

  return (
    <div>
      <Menu>
        <MenuButton
          as={IconButton}
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
          icon={<FaSlidersH className="mr-2 h-4 w-4" />}
        >
          Column Visibility
        </MenuButton>
        <MenuList align="end" className="w-[150px]">
          <MenuItem isDisabled>Toggle column visibility</MenuItem>
          <MenuDivider />
          {columns.map((column) => (
            <MenuItem
              key={column.key}
              onClick={() => toggleColumnVisibility(column.dataIndex)}
            >
              <span style={{ marginRight: "8px" }}>
                {column.show ? <FaEye /> : <FaEyeSlash />}
              </span>
              {column.title}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}

export default DataTableViewOptions;
