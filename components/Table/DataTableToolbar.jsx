import React, { useState, useMemo, useEffect } from "react";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Input,
  IconButton,
  Badge,
} from "@chakra-ui/react";
import { CheckIcon, PlusSquareIcon } from "@chakra-ui/icons";
import DataTableViewOptions from "./DataTableViewOptions";
import _ from "lodash";
import { formatString } from "../../helper";

function DataTableToolbar({
  columns,
  filters,
  data,
  onDataFiltered,
  onChangeFilter,// parent comonete can access the filter change
  setColumns,
}) {
  const [selectedValues, setSelectedValues] = useState({});
  const [searchValue, setSearchValue] = useState("");

  const handleSelect = (filter, value) => {
    setSelectedValues({
      ...selectedValues,
      [filter]: selectedValues[filter]
        ? [...selectedValues[filter], value]
        : [value],
    });
  };

  const handleDeselect = (filter, value) => {
    setSelectedValues({
      ...selectedValues,
      [filter]: selectedValues[filter].filter((item) => item !== value),
    });
  };

  const isValueSelected = (filter, value) =>
    selectedValues[filter] && selectedValues[filter].includes(value);

  // Recursive function to search for a value within nested properties
  function deepSearch(item, searchValue) {
    return _.some(item, (value) => {
      if (_.isObject(value)) {
        // If the current value is an object, continue searching within it
        return deepSearch(value, searchValue);
      }
      // Check if the value (or nested value) contains the search value
      return value.toString().toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  const filteredData = useMemo(() => {
    return data?.filter((item) => {
      return (
        // Check if all filters are satisfied
        filters.every((filter) => {
          const selectedFilterValues = selectedValues[filter];
          // If there are no selected filter values, consider this filter as satisfied
          if (!selectedFilterValues || selectedFilterValues.length === 0)
            return true;
          // Use lodash to access nested properties and filter based on selected values
          return selectedFilterValues.some((value) =>
            _.get(item, filter, "")
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase())
          );
        }) &&
        // Use the deepSearch function to search through all properties, including nested ones
        deepSearch(item, searchValue)
      );
    });
  }, [filters, selectedValues, data, searchValue]);

  // parent comonete can access the data
  useEffect(() => {
    onDataFiltered(filteredData);
  }, [filteredData, onDataFiltered]);

  // Reset All Filters
  const resetAllFilters = () => {
    setSelectedValues({});
    setSearchValue("");
  };

  const areFiltersSelected =
    Object.values(selectedValues).some(
      (selectedFilter) => selectedFilter.length > 0
    ) || searchValue.length > 0;

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <Input
          placeholder="Search ..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            onChangeFilter("", e.target.value);
          }}
          mr={4}
          size="sm"
          w="auto"
          h="auto"
          mt={4}
          mb={4}
        />
        {filters.map((filter) => (
          <Popover key={filter}>
            <PopoverTrigger>
              <Button
                variant="outline"
                size="sm"
                mr={4}
                className="h-8 border-dashed"
                disabled={!filters.includes(filter)}
              >
                <PlusSquareIcon mr={2} boxSize={4} />
                {formatString(filter)}
                {selectedValues[filter] &&
                  (selectedValues[filter].length > 2 ? (
                    <Badge
                      variant="subtle"
                      colorScheme="teal"
                      ml={2}
                      fontSize="sm"
                    >
                      {`${selectedValues[filter].length} selected`}
                    </Badge>
                  ) : (
                    selectedValues[filter].map((selectedValue) => (
                      <Badge
                        variant="subtle"
                        colorScheme="teal"
                        ml={2}
                        key={selectedValue}
                      >
                        {selectedValue}
                      </Badge>
                    ))
                  ))}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px]" align="start">
              <PopoverArrow />
              <PopoverBody>
                <Input
                  placeholder={`Search ${formatString(filter)}...`}
                  mb={3}
                />
                {data
                  ?.map((item) => _.get(item, filter))
                  .filter((value, index, self) => self.indexOf(value) === index)
                  .map((value) => (
                    <div
                      key={value}
                      onClick={() => {
                        if (isValueSelected(filter, value)) {
                          handleDeselect(filter, value);
                          onChangeFilter(filter, value);
                        } else {
                          handleSelect(filter, value);
                          onChangeFilter(filter, value);
                        }
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      {isValueSelected(filter, value) ? (
                        <IconButton
                          mr={2}
                          size="sm"
                          aria-label={value}
                          variant="solid"
                          colorScheme="teal"
                          icon={<CheckIcon />}
                        />
                      ) : (
                        <IconButton
                          mr={2}
                          size="sm"
                          aria-label={value}
                          variant="outline"
                          colorScheme="gray"
                          icon={<CheckIcon />}
                        />
                      )}
                      <span>{value}</span>
                    </div>
                  ))}

                {selectedValues[filter] &&
                  selectedValues[filter].length > 0 && (
                    <div>
                      <div
                        style={{
                          marginTop: "16px",
                          borderTop: "1px solid #E2E8F0",
                        }}
                      ></div>

                      <Button
                        size="sm"
                        display={"flex"}
                        justifyContent={"center"}
                        p={"8px"}
                        variant="link"
                        cursor={"pointer"}
                        colorScheme="gray"
                        onClick={() => {
                          onChangeFilter(filter, value);
                          setSelectedValues((prevSelectedValues) => ({
                            ...prevSelectedValues,
                            [filter]: [],
                          }));
                        }}
                      >
                        Clear filter
                      </Button>
                    </div>
                  )}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ))}
        {areFiltersSelected && (
          <Button
            variant="outline"
            size="sm"
            className="h-8 border-dashed"
            onClick={resetAllFilters}
            colorScheme="teal"
          >
            Reset Filters
          </Button>
        )}
      </div>
      <DataTableViewOptions columns={columns} setColumns={setColumns} />
    </div>
  );
}

export default DataTableToolbar;
