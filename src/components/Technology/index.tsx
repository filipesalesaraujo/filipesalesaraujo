import {
  Flex,
  Heading,
  HStack,
  VStack,
  Text,
  Spacer,
  Hide,
} from "@chakra-ui/react";
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
        px="20px"
        py="20px"
        justify="space-between"
        flexDir={flexDir}
      >
        <Hide breakpoint="(max-width: 768px)">
          <Image height={200} width={200} src={logo} alt="Logo" />
        </Hide>
        <Spacer />
        <VStack w={{xl: '80%', lg: '1000px', md: '700px'}} color={color} align="flex-start">
          <Heading>{title}</Heading>
          <Text>{description}</Text>
        </VStack>
      </HStack>
    </Flex>
  );
}
