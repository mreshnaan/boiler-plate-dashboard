import React, { useState, useEffect } from "react";
import { Box, Button, Flex, HStack, Select, Text } from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowForwardIcon,
  ArrowBackIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@chakra-ui/icons";

function DataTablePagination({
  data,
  setCurrentData,
  onChangePage,
  currentPage,
  setCurrentPage,
}) {
  const pageSizeOptions = [2, 20, 30, 40, 50];
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]);

  const totalPages = Math.ceil(data?.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data?.length);
  const currentData = data?.slice(startIndex, endIndex);

  const canPreviousPage = currentPage > 1;
  const canNextPage = currentPage < totalPages;

  useEffect(() => {
    setCurrentData(currentData);
  }, [currentPage, pageSize, data, setCurrentData]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      onChangePage({ page: newPage, size: pageSize });
    }
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setCurrentPage(1);
    onChangePage({ page: 1, size: newSize });
  };

  return (
    <div>
      <Flex alignItems="center" justifyContent="space-between" p={2}>
        <Text fontSize="sm" color="gray.500">
          {currentData?.length} of {data?.length} row(s) selected.
        </Text>
        <Flex alignItems="center" gap="30px">
          <HStack spacing={2}>
            <Text fontSize="sm" fontWeight="medium">
              Rows per page
            </Text>
            <Select
              value={pageSize}
              onChange={(e) => handlePageSizeChange(Number(e.target.value))}
              size="sm"
              width="70px"
            >
              {pageSizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>
          </HStack>
          <Text fontSize="sm" fontWeight="medium">
            Page {currentPage} of {totalPages === 0 ? 1 : totalPages}
          </Text>
          <HStack>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handlePageChange(1)}
              isDisabled={!canPreviousPage}
            >
              <ArrowLeftIcon />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handlePageChange(currentPage - 1)}
              isDisabled={!canPreviousPage}
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handlePageChange(currentPage + 1)}
              isDisabled={!canNextPage}
            >
              <ChevronRightIcon />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handlePageChange(totalPages)}
              isDisabled={!canNextPage}
            >
              <ArrowRightIcon />
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </div>
  );
}

export default DataTablePagination;
