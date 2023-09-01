import React, { useState, useEffect } from "react";
import { Box, FormLabel, Input, useColorModeValue } from "@chakra-ui/react";
import moment from "moment";
import { Form } from "antd";

const DatePicker = ({
  disable,
  required = true,
  message,
  label,
  name,
  initialValue,
}) => {
  const textColor = useColorModeValue("gray.700", "white");
  const [selectedDate, setSelectedDate] = useState(""); // Initialize with an empty string

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  useEffect(() => {
    if (initialValue) {
      setSelectedDate(initialValue);
    }
  }, [initialValue]);

  return (
    <Box>
      <FormLabel
        ms="6px"
        fontSize="sm"
        color={textColor}
        fontWeight="normal"
        htmlFor={name}
      >
        {label}
      </FormLabel>
      <Form.Item
        name={name}
        style={{ marginBottom: "8px" }}
        rules={[{ required: required, message: message }]}
      >
        <Input
          disabled={disable}
          style={{
            color: textColor,
          }}
          type="date"
          value={selectedDate}
          defaultValue={selectedDate}
          onChange={handleDateChange}
        />
      </Form.Item>
    </Box>
  );
};

export default DatePicker;
