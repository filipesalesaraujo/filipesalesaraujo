import { Flex, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Flex
      as="footer"
      bg="polarNight.900"
      justifyContent="center"
      alignItems="center"
      padding={5}
    >
      <Text color="text.100">2021</Text>
    </Flex>
  );
}
