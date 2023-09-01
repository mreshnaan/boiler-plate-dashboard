import { Link, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function PageTitle({ routes }) {
  let mainText = useColorModeValue("gray.700", "gray.200");
  return (
    <>
      {routes.map((item, index) => {
        const { title, isLast } = item;

        return (
          // component to avoid adding unnecessary elements to the DOM.
          <React.Fragment key={index}>
            {isLast && (
              <Link
                color={mainText}
                href="#"
                bg="inherit"
                borderRadius="inherit"
                fontWeight="bold"
                _hover={{ color: mainText }}
                _active={{
                  bg: "inherit",
                  transform: "none",
                  borderColor: "transparent",
                }}
                _focus={{
                  boxShadow: "none",
                }}
              >
                {title}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}

export default PageTitle;
