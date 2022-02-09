import { Flex, HStack, Link, Stack, Text, theme } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export function Header() {
  return (
    <Flex as="header" bg="polarNight.900">
      <HStack w={1280} justify="space-between" m="auto" px={5} py={5}>
        <Text color="text.100">filipesalesaraujo</Text>
        <HStack spacing={10}>
          <Link href="https://github.com/filipesalesaraujo" target="_blank">
            <FaGithub color="white" size={25} />
          </Link>
          <Link href="www.linkedin.com/in/filipesales21">
            <FaLinkedinIn color="white" size={25} />
          </Link>
        </HStack>
      </HStack>
    </Flex>
  );
}
