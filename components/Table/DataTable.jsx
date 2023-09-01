import {
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";
import _ from "lodash";
import DataTableToolbar from "./DataTableToolbar";
import DataTablePagination from "./DataTablePagination";

function DataTable({ title, filters, data, initialColumns, handleChangePage }) {
  const textColor = "white";
  const paginationBg = "gray.800";
  const tableColor = "teal";

  const [columns, setColumns] = useState(
    initialColumns.map((column) => ({
      ...column,
      show: true,
    }))
  );
  const [filteredData, setFilteredData] = useState(data);
  const [currentData, setCurrentData] = useState(filteredData);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDataFiltered = (filteredData) => {
    setFilteredData(filteredData);
  };

  const onChangeFilterHandler = ({ filter, value, reset }) => {
    setCurrentPage(1);
  };

  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }} gap={"14px"}>
      <CardHeader
        display={"flex"}
        flexDirection={"column"}
        p="6px 0px 22px 0px"
        gap={"20px"}
      >
        <Flex justifyContent={"space-between"} alignItems="center" gap="20px">
          <Flex alignItems="center" gap="20px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              {title}
            </Text>
          </Flex>
        </Flex>
        {/* DataTableFacetedFilter */}
        <DataTableToolbar
          columns={columns}
          filters={filters}
          data={data}
          onDataFiltered={handleDataFiltered}
          onChangeFilter={onChangeFilterHandler}
          setColumns={setColumns}
        />
      </CardHeader>
      <CardBody>
        <Table
          variant="striped"
          colorScheme={tableColor}
          color={textColor}
          transition="all 0.3s ease"
        >
          <Thead>
            <Tr my=".8rem" pl="0px" color="gray.400">
              {columns.map((column) => {
                if (column.show) {
                  // Check if the column should be visible
                  return (
                    <Th color="gray.400" key={column.key}>
                      {column.title}
                    </Th>
                  );
                }
                return null; // If not visible, skip rendering the column header
              })}
            </Tr>
          </Thead>
          <Tbody transition="all 0.3s ease">
            {currentData?.length === 0 ? (
              <Tr>
                <Td
                  bg={"transparent !important"}
                  colSpan={columns.length}
                  color={textColor}
                  transition="all 0.3s ease"
                  textAlign="center"
                >
                  <Text fontSize="sm" color={textColor}>
                    Data Not Found
                  </Text>
                </Td>
              </Tr>
            ) : (
              currentData?.map((item, index) => (
                <Tr key={item._id}>
                  {columns.map((column) => {
                    if (column.show) {
                      // Check if the column should be visible
                      return (
                        <Td
                          key={column.key}
                          color={textColor}
                          transition="all 0.3s ease"
                        >
                          {
                            column.render
                              ? column.render(index, item)
                              : _.get(item, column.dataIndex) // Use _.get to access nested data
                          }
                        </Td>
                      );
                    }
                    return null; // If not visible, skip rendering the cell
                  })}
                </Tr>
              ))
            )}
          </Tbody>
          <Tfoot bg={paginationBg} borderRadius={"16px"}>
            <Tr>
              <Td colSpan={columns.length}>
                {/* Display your filtered data using DataTablePagination */}
                <DataTablePagination
                  data={filteredData}
                  setCurrentData={setCurrentData}
                  onChangePage={handleChangePage}
                  currentPage={currentPage} // Pass currentPage to DataTablePagination
                  setCurrentPage={setCurrentPage} // Pass setCurrentPage to DataTablePagination
                />
              </Td>
            </Tr>
          </Tfoot>
        </Table>
      </CardBody>
    </Card>
  );
}

export default DataTable;
