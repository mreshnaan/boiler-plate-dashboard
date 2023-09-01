import { useEffect, useState } from "react";
import {
  Box,
  Text,
  Input,
  VStack,
  FormLabel,
  useColorModeValue,
} from "@chakra-ui/react";
import { Form } from "antd";

const CustomAutoComplete = ({
  disable,
  setSelectedData,
  data,
  label,
  name,
  message,
  placeholder,
  required,
  defaultValue,
}) => {
  const textColor = useColorModeValue("gray.700", "white");
  const [searchValue, setSearchValue] = useState("");
  const [selected, setSelected] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (defaultValue) {
      const initialSelectedEvent = data.find(
        (item) => item.name === defaultValue
      );
      if (initialSelectedEvent) {
        setSelectedData(initialSelectedEvent);
        setSelected(initialSelectedEvent);
        setSearchValue(initialSelectedEvent.name);
      }
    }
  }, [data, defaultValue]);


  const handleChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    const filteredEvents = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredEvents(filteredEvents);
    setSelectedData(null);
    setSelected(null);
  };

  const handleSelectEvent = (event) => {
    setSelectedData(event);
    setSelected(event);
    setSearchValue(event.name);
    setFilteredEvents([]);
  };

  const handleInputClick = () => {
    if (!searchValue) {
      setFilteredEvents(data);
    } else {
      const filteredEvents = data.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredEvents(filteredEvents);
    }
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <Box position="relative">
      <FormLabel
        ms="6px"
        fontSize="sm"
        color={textColor}
        fontWeight="normal"
        htmlFor={name}
      >
        {label}
      </FormLabel>
      <Form.Item name={name} rules={[{ required: required, message: message }]}>
        <Input
          disabled={disable}
          color={textColor}
          m={"0px"}
          onFocus={handleInputFocus}
          placeholder={placeholder}
          value={searchValue}
          onChange={handleChange}
          onClick={handleInputClick}
        />
        {filteredEvents.length > 0 && isFocused && (
          <VStack
            zIndex={10}
            position="absolute"
            top="calc(100% + 0px)"
            w={"100%"}
            maxH="200px"
            overflowY="auto"
            mt={2}
            align="start"
            spacing={1}
            bg="white"
            p={2}
            boxShadow="md"
          >
            {filteredEvents.map((event) => (
              <Box
                w={"100%"}
                key={event._id}
                p={2}
                cursor="pointer"
                _hover={{ bg: "gray.200" }}
                onClick={() => { 
                  handleSelectEvent(event);
                  setIsFocused(false)
                }}
              >
                <Text>{event.name}</Text>
              </Box>
            ))}
          </VStack>
        )}
      </Form.Item>
      {selected && (
        <Box>
          <Text color={textColor} fontSize="xs">
            ID: {selected.id}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default CustomAutoComplete;
