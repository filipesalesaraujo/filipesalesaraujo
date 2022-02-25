import { Flex, Text } from "@chakra-ui/react";

import ReactJSLogo from "../../public/images/reactjs-logo.svg";
import NextJSLogo from "../../public/images/nextjs-logo.svg";
import ReactNativeLogo from "../../public/images/react-native-logo.svg";
import ExpoLogo from "../../public/images/expo-logo.svg";
import JavaScript from "../../public/images/javascript-logo.svg";
import TypeScript from "../../public/images/typescript-logo.svg";
import PHPLogo from "../../public/images/php-logo.svg";
import WordPressLogo from "../../public/images/wordpress-logo.svg";

import { Technology } from "../components/Technology";

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

      <Technology
        flexDir="row"
        bg="reactJs.900"
        logo={ReactJSLogo}
        color="text.100"
        title="ReactJS"
        description="Ut condimentum id nulla sed ultricies. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. In sagittis nunc id nulla dictum
        gravida. Etiam eget tortor vitae ex porta auctor. Praesent
        tincidunt sapien urna, vitae vestibulum nisl finibus vitae. Nullam
        tempus placerat faucibus. Donec dictum porttitor nunc, nec
        volutpat sapien hendrerit sodales. Sed pulvinar dignissim leo, at
        eleifend urna fermentum et. Maecenas odio sem, congue vel nunc ac,
        laoreet porttitor lectus."
      />

      <Technology
        flexDir="row-reverse"
        bg="nextJs.900"
        logo={NextJSLogo}
        color="text.100"
        title="Next.js"
        description="Ut condimentum id nulla sed ultricies. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. In sagittis nunc id nulla dictum
        gravida. Etiam eget tortor vitae ex porta auctor. Praesent
        tincidunt sapien urna, vitae vestibulum nisl finibus vitae. Nullam
        tempus placerat faucibus. Donec dictum porttitor nunc, nec
        volutpat sapien hendrerit sodales. Sed pulvinar dignissim leo, at
        eleifend urna fermentum et. Maecenas odio sem, congue vel nunc ac,
        laoreet porttitor lectus."
      />

      <Technology
        flexDir="row"
        bg="reactJs.900"
        logo={ReactNativeLogo}
        color="text.100"
        title="React Native"
        description="Maecenas odio sem, congue vel nunc ac, laoreet porttitor lectus.
        Ut condimentum id nulla sed ultricies. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. In sagittis nunc id nulla dictum
        gravida. Etiam eget tortor vitae ex porta auctor. Praesent
        tincidunt sapien urna, vitae vestibulum nisl finibus vitae. Nullam
        tempus placerat faucibus. Donec dictum porttitor nunc, nec
        volutpat sapien hendrerit sodales. Sed pulvinar dignissim leo, at
        eleifend urna fermentum et."
      />

      <Technology
        flexDir="row-reverse"
        bg="expo.100"
        logo={ExpoLogo}
        color="text.900"
        title="Expo"
        description="Ut condimentum id nulla sed ultricies. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. In sagittis nunc id nulla dictum
        gravida. Etiam eget tortor vitae ex porta auctor. Praesent
        tincidunt sapien urna, vitae vestibulum nisl finibus vitae. Nullam
        tempus placerat faucibus. Donec dictum porttitor nunc, nec
        volutpat sapien hendrerit sodales. Sed pulvinar dignissim leo, at
        eleifend urna fermentum et. Maecenas odio sem, congue vel nunc ac,
        laoreet porttitor lectus."
      />

      <Technology
        flexDir="row"
        bg="javaScript.500"
        logo={JavaScript}
        color="text.900"
        title="JavaScript"
        description="Maecenas odio sem, congue vel nunc ac, laoreet porttitor lectus.
        Ut condimentum id nulla sed ultricies. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. In sagittis nunc id nulla dictum
        gravida. Etiam eget tortor vitae ex porta auctor. Praesent
        tincidunt sapien urna, vitae vestibulum nisl finibus vitae. Nullam
        tempus placerat faucibus. Donec dictum porttitor nunc, nec
        volutpat sapien hendrerit sodales. Sed pulvinar dignissim leo, at
        eleifend urna fermentum et."
      />

      <Technology
        flexDir="row-reverse"
        bg="typeScript.500"
        logo={TypeScript}
        color="text.100"
        title="TypeScript"
        description="Ut condimentum id nulla sed ultricies. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. In sagittis nunc id nulla dictum
        gravida. Etiam eget tortor vitae ex porta auctor. Praesent
        tincidunt sapien urna, vitae vestibulum nisl finibus vitae. Nullam
        tempus placerat faucibus. Donec dictum porttitor nunc, nec
        volutpat sapien hendrerit sodales. Sed pulvinar dignissim leo, at
        eleifend urna fermentum et. Maecenas odio sem, congue vel nunc ac,
        laoreet porttitor lectus."
      />

      <Technology
        flexDir="row"
        bg="php.300"
        logo={PHPLogo}
        color="text.900"
        title="PHP"
        description="Maecenas odio sem, congue vel nunc ac, laoreet porttitor lectus.
        Ut condimentum id nulla sed ultricies. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. In sagittis nunc id nulla dictum
        gravida. Etiam eget tortor vitae ex porta auctor. Praesent
        tincidunt sapien urna, vitae vestibulum nisl finibus vitae. Nullam
        tempus placerat faucibus. Donec dictum porttitor nunc, nec
        volutpat sapien hendrerit sodales. Sed pulvinar dignissim leo, at
        eleifend urna fermentum et."
      />

      <Technology
        flexDir="row-reverse"
        bg="wordpress.500"
        logo={WordPressLogo}
        color="text.100"
        title="WordPress"
        description="Maecenas odio sem, congue vel nunc ac, laoreet porttitor lectus.
        Ut condimentum id nulla sed ultricies. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. In sagittis nunc id nulla dictum
        gravida. Etiam eget tortor vitae ex porta auctor. Praesent
        tincidunt sapien urna, vitae vestibulum nisl finibus vitae. Nullam
        tempus placerat faucibus. Donec dictum porttitor nunc, nec
        volutpat sapien hendrerit sodales. Sed pulvinar dignissim leo, at
        eleifend urna fermentum et."
      />
    </>
  );
}
