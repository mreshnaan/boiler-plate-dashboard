import { Box, FormLabel, Input, useColorModeValue } from "@chakra-ui/react";
import { Form } from "antd";
const InputField = ({
  required = true,
  name,
  type,
  label,
  message,
  placeholder,
  disable,
}) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <>
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
          style={{ marginBottom: "8px" }}
          name={name}
          rules={[{ required: required, message: message }]}
        >
          <Input
            disabled={disable}
            color={textColor}
            fontSize="sm"
            size="lg"
            type={type}
            id={name}
            placeholder={placeholder ? placeholder : `Enter your ${label}`}
          />
        </Form.Item>
      </Box>
    </>
  );
};

export default InputField;
