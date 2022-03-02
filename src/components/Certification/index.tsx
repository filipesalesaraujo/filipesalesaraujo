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

interface CertificationProps {
  title: string;
  description: string;
  color: string;
  imgCertification: string;
  bg: string;
  flexDir: "row" | "row-reverse";
}

export function Certification({
  title,
  description,
  color,
  imgCertification,
  bg,
  flexDir,
}: CertificationProps) {
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
        <Image src={imgCertification} alt="Logo" />
        <Spacer />
        <VStack
          w={{ xl: "100%", lg: "1000px", md: "700px" }}
          color={color}
          align="flex-start"
        >
          <Hide breakpoint="(max-width: 768px)">
            <Heading>{title}</Heading>
            <Text>{description}</Text>
          </Hide>
        </VStack>
      </HStack>
    </Flex>
  );
}
