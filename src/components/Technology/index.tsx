import { Flex, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";

interface TechnologyProps {
  title: string;
  description: string;
  color: string;
  logo: string;
  bg: string;
  flexDir: "row" | "row-reverse";
}

export function Technology({
  title,
  description,
  color,
  logo,
  bg,
  flexDir,
}: TechnologyProps) {
  return (
    <Flex bg={bg}>
      <HStack
        w={1280}
        m="auto"
        px={5}
        py={10}
        justify="space-between"
        flexDir={flexDir}
      >
        <Image height={200} width={200} src={logo} alt="Logo" />
        <VStack w="80%" color={color} align="flex-start">
          <Heading>{title}</Heading>
          <Text>{description}</Text>
        </VStack>
      </HStack>
    </Flex>
  );
}
