import React, { useState } from "react";
import {
  Box,
  Flex,
  Button,
  Heading,
  Input,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Form } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

function Login() {
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray", "white");

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    const toastId = toast.loading("Logging in...");
    setLoading(true);
    console.log("Success:", values);
    router.replace("/dashboard");
  };
  return (
    <>
      <Flex position="relative" mb="40px">
        <Flex
          h={{ sm: "initial", md: "75vh", lg: "85vh" }}
          w="100%"
          maxW="1044px"
          mx="auto"
          justifyContent="space-between"
          mb="30px"
          pt={{ sm: "100px", md: "0px" }}
        >
          <Flex
            alignItems="center"
            justifyContent="start"
            style={{ userSelect: "none" }}
            w={{ base: "100%", md: "50%", lg: "42%" }}
          >
            <Flex
              direction="column"
              w="100%"
              background="transparent"
              p="48px"
              mt={{ md: "150px", lg: "80px" }}
            >
              <Heading color={titleColor} fontSize="32px" mb="10px">
                Welcome Back
              </Heading>
              <Text
                mb="36px"
                ms="4px"
                color={textColor}
                fontWeight="bold"
                fontSize="14px"
              >
                Enter your email and password to sign in
              </Text>
              <Form onFinish={onFinish}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                  ]}
                >
                  <Input
                    color={textColor}
                    prefix={<UserOutlined />}
                    borderRadius="15px"
                    mb="4px"
                    fontSize="sm"
                    placeholder="Your email address"
                    size="lg"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please enter your password" },
                  ]}
                >
                  <Input
                    color={textColor}
                    prefix={<LockOutlined />}
                    borderRadius="15px"
                    mb="4px"
                    fontSize="sm"
                    type="password"
                    placeholder="Your password"
                    size="lg"
                  />
                </Form.Item>

                <Button
                  fontSize="10px"
                  type="submit"
                  bg="teal.300"
                  w="100%"
                  h="45"
                  mb="20px"
                  color="white"
                  mt="20px"
                  _hover={{
                    bg: "teal.200",
                  }}
                  _active={{
                    bg: "teal.400",
                  }}
                  isLoading={loading}
                  loadingText="LOADING..."
                >
                  {loading ? "LOADING..." : "  SIGN IN"}
                </Button>
              </Form>
            </Flex>
          </Flex>
          <Box
            display={{ base: "none", md: "block" }}
            overflowX="hidden"
            h="100%"
            w="40vw"
            position="absolute"
            right="0px"
          >
            <Box
              bgImage={"/assets/img/signInImage.png"}
              w="100%"
              h="100%"
              bgSize="cover"
              bgPosition="50%"
              position="absolute"
              borderBottomLeftRadius="20px"
            ></Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default Login;
