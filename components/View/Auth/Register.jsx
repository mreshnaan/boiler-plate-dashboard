import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { Form } from "antd";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

function Register() {
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");

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
      <Flex
        direction="column"
        alignSelf="center"
        justifySelf="center"
        overflow="hidden"
      >
        <Box
          position="absolute"
          minH={{ base: "70vh", md: "50vh" }}
          w={{ md: "calc(100vw - 50px)" }}
          borderRadius={{ md: "15px" }}
          left="0"
          right="0"
          bgRepeat="no-repeat"
          overflow="hidden"
          zIndex="-1"
          top="0"
          bgImage={"/assets/img/BgSignUp.png"}
          bgSize="cover"
          mx={{ md: "auto" }}
          mt={{ md: "14px" }}
        ></Box>
        <Flex
          direction="column"
          textAlign="center"
          justifyContent="center"
          align="center"
          mt="6.5rem"
          mb="30px"
        >
          <Text fontSize="4xl" color="white" fontWeight="bold">
            Welcome!
          </Text>
          <Text
            fontSize="md"
            color="white"
            fontWeight="normal"
            mt="10px"
            mb="26px"
            w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}
          >
            Use these awesome forms to login or create new account in your
            project for free.
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
          <Flex
            direction="column"
            w="445px"
            background="transparent"
            borderRadius="15px"
            p="40px"
            mx={{ base: "100px" }}
            bg={bgColor}
            boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
          >
            <Text
              fontSize="xl"
              color={textColor}
              fontWeight="bold"
              textAlign="center"
              mb="22px"
            >
              Admin Register
            </Text>

            <Form onFinish={onFinish}>
              <Form.Item
                name="fullname"
                rules={[
                  { required: true, message: "Please enter your Full-Name" },
                ]}
              >
                <Input
                  color={textColor}
                  borderRadius="15px"
                  mb="4px"
                  type="text"
                  fontSize="sm"
                  placeholder="Your Full Name"
                  size="lg"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Please enter your email" }]}
              >
                <Input
                  color={textColor}
                  borderRadius="15px"
                  mb="4px"
                  type="email"
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
                  borderRadius="15px"
                  mb="4px"
                  fontSize="sm"
                  type="password"
                  placeholder="Your password"
                  size="lg"
                />
              </Form.Item>
              {/* <Form.Item
                  name="date"
                  rules={[{ required: true, message: "Please select a date" }]}
                >
                  <DatePicker
                    size="lg"
                    style={{
                      background: "transparent",
                      color: `${textColor}`,
                      borderRadius: "15px",
                      marginBottom: "4px",
                      fontSize: "sm",
                      height: "50px",
                      width: "100%",
                    }}
                  />
                </Form.Item> */}
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
                {loading ? "LOADING..." : "REGISTER"}
              </Button>
            </Form>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Already have an account?
                <Link
                  color={titleColor}
                  as="a"
                  ms="5px"
                  href="/"
                  fontWeight="bold"
                >
                  Sign In
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Register;
