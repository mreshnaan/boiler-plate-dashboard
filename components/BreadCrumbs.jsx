import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function BreadCrumbs({ routes }) {
  let mainText = useColorModeValue("gray.700", "gray.200");
  let secondaryText = useColorModeValue("gray.800", "gray.200");

  const router = useRouter();
  const path = router.asPath;

  return (
    <>
      <Breadcrumb>
        {routes.map((item, index) => {
          const { title, link, isLast } = item;
          const isActive = path === link;

          return (
            <BreadcrumbItem
              color={isActive ? mainText : secondaryText}
              key={index}
            >
              {isLast ? (
                <BreadcrumbLink
                  key={index}
                  as={Link}
                  href={link}
                  color={isActive ? mainText : secondaryText}
                >
                  {title}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbLink
                  key={index}
                  as={Link}
                  href={link}
                  color={isActive ? mainText : secondaryText}
                >
                  {title}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </>
  );
}

export default BreadCrumbs;
