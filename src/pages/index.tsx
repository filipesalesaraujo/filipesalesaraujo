import { Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

import ReactJSLogo from "../../public/images/reactjs-logo.svg";
import NextJSLogo from "../../public/images/nextjs-logo.svg";
import ReactNativeLogo from "../../public/images/react-native-logo.svg";
import ExpoLogo from "../../public/images/expo-logo.svg";
import JavaScript from "../../public/images/javascript-logo.svg";
import TypeScript from "../../public/images/typescript-logo.svg";
import PHPLogo from "../../public/images/php-logo.svg";
import WordPressLogo from "../../public/images/wordpress-logo.svg";

export default function Home() {
  return (
    <>
      <Flex>
        <Text w={1280} m={[0, "auto"]} px={5} py={10}>
          Ut condimentum id nulla sed ultricies. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. In sagittis nunc id nulla dictum gravida.
          Etiam eget tortor vitae ex porta auctor. Praesent tincidunt sapien
          urna, vitae vestibulum nisl finibus vitae. Nullam tempus placerat
          faucibus. Donec dictum porttitor nunc, nec volutpat sapien hendrerit
          sodales. Sed pulvinar dignissim leo, at eleifend urna fermentum et.
          Maecenas odio sem, congue vel nunc ac, laoreet porttitor lectus.
        </Text>
      </Flex>
      <Flex bg="reactJs.900">
        <HStack
          w={1280}
          m="auto"
          px={5}
          py={10}
          justify="space-between"
          spacing={20}
        >
          <Image height={200} width={200} src={ReactJSLogo} alt="React Logo" />
          <VStack w="80%" color="text.100" align="flex-start">
            <Heading as="h1">ReactJS</Heading>
            <Text>
              Ut condimentum id nulla sed ultricies. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. In sagittis nunc id nulla dictum
              gravida. Etiam eget tortor vitae ex porta auctor. Praesent
              tincidunt sapien urna, vitae vestibulum nisl finibus vitae. Nullam
              tempus placerat faucibus. Donec dictum porttitor nunc, nec
              volutpat sapien hendrerit sodales. Sed pulvinar dignissim leo, at
              eleifend urna fermentum et. Maecenas odio sem, congue vel nunc ac,
              laoreet porttitor lectus.
            </Text>
          </VStack>
        </HStack>
      </Flex>
      <Flex bg="nextJs.900">
        <HStack
          w={1280}
          m="auto"
          px={5}
          py={10}
          justify="space-between"
          spacing={20}
        >
          <VStack w="80%" color="text.100" align="flex-end">
            <Heading>Next.js</Heading>
            <Text>
              Ut condimentum id nulla sed ultricies. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. In sagittis nunc id nulla dictum
              gravida. Etiam eget tortor vitae ex porta auctor. Praesent
              tincidunt sapien urna, vitae vestibulum nisl finibus vitae. Nullam
              tempus placerat faucibus. Donec dictum porttitor nunc, nec
              volutpat sapien hendrerit sodales. Sed pulvinar dignissim leo, at
              eleifend urna fermentum et. Maecenas odio sem, congue vel nunc ac,
              laoreet porttitor lectus.
            </Text>
          </VStack>
          <Image src={NextJSLogo} alt="NextJs Logo" />
        </HStack>
      </Flex>
      <Flex bg="reactJs.900">
        <HStack
          w={1280}
          m="auto"
          px={5}
          py={10}
          justify="space-between"
          spacing={20}
        >
          <Image height={200} width={200} src={ReactNativeLogo} alt="React Native Logo" />
          <VStack w="80%" color="text.100" align="flex-start">
            <Heading as="h1">React Native</Heading>
            <Text>
              Maecenas odio sem, congue vel nunc ac, laoreet porttitor lectus.
              Ut condimentum id nulla sed ultricies. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. In sagittis nunc id nulla dictum
              gravida. Etiam eget tortor vitae ex porta auctor. Praesent
              tincidunt sapien urna, vitae vestibulum nisl finibus vitae. Nullam
              tempus placerat faucibus. Donec dictum porttitor nunc, nec
              volutpat sapien hendrerit sodales. Sed pulvinar dignissim leo, at
              eleifend urna fermentum et.
            </Text>
          </VStack>
        </HStack>
      </Flex>
      <Flex bg="expo.100">
        <HStack
          w={1280}
          m="auto"
          px={5}
          py={10}
          justify="space-between"
          spacing={20}
        >
          <VStack w="80%" color="text.900" align="flex-end">
            <Heading>Expo</Heading>
            <Text>
              Ut condimentum id nulla sed ultricies. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. In sagittis nunc id nulla dictum
              gravida. Etiam eget tortor vitae ex porta auctor. Praesent
              tincidunt sapien urna, vitae vestibulum nisl finibus vitae. Nullam
              tempus placerat faucibus. Donec dictum porttitor nunc, nec
              volutpat sapien hendrerit sodales. Sed pulvinar dignissim leo, at
              eleifend urna fermentum et. Maecenas odio sem, congue vel nunc ac,
              laoreet porttitor lectus.
            </Text>
          </VStack>
          <Image width={200} height={200} src={ExpoLogo} alt="Expo Logo" />
        </HStack>
      </Flex>
      <Flex bg="javaScript.500">
        <HStack
          w={1280}
          m="auto"
          px={5}
          py={10}
          justify="space-between"
          spacing={20}
        >
          <Image height={200} width={200} src={JavaScript} alt="Javascript Logo" />
          <VStack w="80%" color="text.900" align="flex-start">
            <Heading as="h1">JavaScript</Heading>
            <Text>
              Maecenas odio sem, congue vel nunc ac, laoreet porttitor lectus.
              Ut condimentum id nulla sed ultricies. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. In sagittis nunc id nulla dictum
              gravida. Etiam eget tortor vitae ex porta auctor. Praesent
              tincidunt sapien urna, vitae vestibulum nisl finibus vitae. Nullam
              tempus placerat faucibus. Donec dictum porttitor nunc, nec
              volutpat sapien hendrerit sodales. Sed pulvinar dignissim leo, at
              eleifend urna fermentum et.
            </Text>
          </VStack>
        </HStack>
      </Flex>
      <Flex bg="typeScript.500">
        <HStack
          w={1280}
          m="auto"
          px={5}
          py={10}
          justify="space-between"
          spacing={20}
        >
          <VStack w="80%" color="text.100" align="flex-end">
            <Heading>TypeScript</Heading>
            <Text>
              Ut condimentum id nulla sed ultricies. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. In sagittis nunc id nulla dictum
              gravida. Etiam eget tortor vitae ex porta auctor. Praesent
              tincidunt sapien urna, vitae vestibulum nisl finibus vitae. Nullam
              tempus placerat faucibus. Donec dictum porttitor nunc, nec
              volutpat sapien hendrerit sodales. Sed pulvinar dignissim leo, at
              eleifend urna fermentum et. Maecenas odio sem, congue vel nunc ac,
              laoreet porttitor lectus.
            </Text>
          </VStack>
          <Image width={200} height={200} src={TypeScript} alt="TypeScript Logo" />
        </HStack>
      </Flex>
      <Flex bg="php.300">
        <HStack
          w={1280}
          m="auto"
          px={5}
          py={10}
          justify="space-between"
          spacing={20}
        >
          <Image height={200} width={200} src={PHPLogo} alt="PHP Logo" />
          <VStack w="80%" color="text.900" align="flex-start">
            <Heading as="h1">PHP</Heading>
            <Text>
              Maecenas odio sem, congue vel nunc ac, laoreet porttitor lectus.
              Ut condimentum id nulla sed ultricies. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. In sagittis nunc id nulla dictum
              gravida. Etiam eget tortor vitae ex porta auctor. Praesent
              tincidunt sapien urna, vitae vestibulum nisl finibus vitae. Nullam
              tempus placerat faucibus. Donec dictum porttitor nunc, nec
              volutpat sapien hendrerit sodales. Sed pulvinar dignissim leo, at
              eleifend urna fermentum et.
            </Text>
          </VStack>
        </HStack>
      </Flex>
      <Flex bg="wordpress.500">
        <HStack
          w={1280}
          m="auto"
          px={5}
          py={10}
          justify="space-between"
          spacing={20}
        >
          <VStack w="80%" color="text.100" align="flex-end">
            <Heading>WordPress</Heading>
            <Text>
              Ut condimentum id nulla sed ultricies. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. In sagittis nunc id nulla dictum
              gravida. Etiam eget tortor vitae ex porta auctor. Praesent
              tincidunt sapien urna, vitae vestibulum nisl finibus vitae. Nullam
              tempus placerat faucibus. Donec dictum porttitor nunc, nec
              volutpat sapien hendrerit sodales. Sed pulvinar dignissim leo, at
              eleifend urna fermentum et. Maecenas odio sem, congue vel nunc ac,
              laoreet porttitor lectus.
            </Text>
          </VStack>
          <Image width={200} height={200} src={WordPressLogo} alt="WordPress Logo" />
        </HStack>
      </Flex>
    </>
  );
}
