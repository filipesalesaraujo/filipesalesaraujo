import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

import ReactJSLogo from "../../public/images/reactjs-logo.svg";
import NextJSLogo from "../../public/images/nextjs-logo.svg";
import ReactNativeLogo from "../../public/images/react-native-logo.svg";
import ExpoLogo from "../../public/images/expo-logo.svg";
import JavaScript from "../../public/images/javascript-logo.svg";
import TypeScript from "../../public/images/typescript-logo.svg";
import PHPLogo from "../../public/images/php-logo.svg";
import WordPressLogo from "../../public/images/wordpress-logo.svg";

import CertificadoRockeseatReactJS from "../../public/images/certificado-rockeseat-reactjs.png";

import { Technology } from "../components/Technology";
import { Certification } from "../components/Certification";

export default function Home() {
  return (
    <>
      {/* Sobre */}
      <VStack px="20px" py="20px">
        <Heading textAlign="center" m={[0, "auto"]}>
          Sobre mim
        </Heading>
        <Text
          fontSize={20}
          w={{ xl: "1280px", lg: "1000px", md: "700px" }}
          m={[0, "auto"]}
        >
          Desenvolvedor full-stack com mais de três anos de experiência no
          mercado de desenvolvimento de sites e aplicações. Com um portfólio
          composto por mais de 50 projetos no ar, sou especialista em
          desenvolvimento front.
        </Text>
      </VStack>

      <Flex>
        <Heading textAlign="center" m={[0, "auto"]} px="20px" py="20px">
          Conheça minhas stacks de desenvolvimento
        </Heading>
      </Flex>

      {/* ReactJS */}
      <Technology
        flexDir="row"
        bg="reactJs.900"
        logo={ReactJSLogo}
        color="text.100"
        title="ReactJS"
        description="React faz com que a criação de UIs interativas seja uma tarefa fácil. Criação de views simples para cada estado da aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam. Views declarativas fazem com que seu código seja mais previsível e simples de depurar."
      />

      {/* Next.js */}
      <Technology
        flexDir="row-reverse"
        bg="nextJs.900"
        logo={NextJSLogo}
        color="text.100"
        title="Next.js"
        description="O Next.js oferece a melhor experiência de desenvolvedor com todos os recursos necessários para produção: hybrid static e server rendering, suporte a TypeScript, smart bundling, route pre-fetching."
      />

      {/* React Native */}
      <Technology
        flexDir="row"
        bg="reactJs.900"
        logo={ReactNativeLogo}
        color="text.100"
        title="React Native"
        description="O React Native permite a crição de aplicativos verdadeiramente nativos e não compromete a experiência de seus usuários. Ele fornece um conjunto principal de componentes nativos agnósticos de plataforma, como View, Texte Image que mapeiam diretamente para os blocos de construção de interface do usuário nativos da plataforma. "
      />

      {/* Expo */}
      <Technology
        flexDir="row-reverse"
        bg="expo.100"
        logo={ExpoLogo}
        color="text.900"
        title="Expo"
        description="Expo é um framework e uma plataforma para aplicações React. É um conjunto de ferramentas e serviços construídos em torno de plataformas nativas e React Native que ajudam a desenvolver, construir, implantar e iterar rapidamente em aplicativos iOS, Android e web a partir da mesma base de código JavaScript/TypeScript."
      />

      {/* JavaScript */}
      <Technology
        flexDir="row"
        bg="javaScript.500"
        logo={JavaScript}
        color="text.900"
        title="JavaScript"
        description="JavaScript é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser, tais como node.js,  Apache CouchDB e Adobe Acrobat. O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos (como por exemplo a programação funcional)."
      />

      {/* TypeScript */}
      <Technology
        flexDir="row-reverse"
        bg="typeScript.500"
        logo={TypeScript}
        color="text.100"
        title="TypeScript"
        description="TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala. O principal benefício do TypeScript é que ele pode destacar comportamentos inesperados no código, diminuindo a chance de bugs."
      />

      {/* PHP */}
      <Technology
        flexDir="row"
        bg="php.300"
        logo={PHPLogo}
        color="text.900"
        title="PHP"
        description="O PHP é focado principalmente nos scripts do lado do servidor, portanto, pode fazer qualquer coisa que outro programa CGI pode fazer, como coletar dados de formulários, gerar páginas com conteúdo dinâmico ou enviar e receber cookies. Mas o PHP pode fazer muito mais: scripts no lado do servidor (server-side), scripts de linha de comando, desenvolvedor aplicações desktop."
      />

      {/* WordPress */}
      <Technology
        flexDir="row-reverse"
        bg="wordpress.500"
        logo={WordPressLogo}
        color="text.100"
        title="WordPress"
        description="Sistema de Gerenciamento de Conteúdo (CMS) que alimenta mais de 35% de todos os sites da internet. Um CMS é uma aplicação para a internet que permite que donos de sites, editores e autores gerenciem seus sites e publiquem conteúdo sem precisar de conhecimentos em programação.. O WordPress usa PHP e MySQL, linguagens que são suportadas por todos os serviços de hospedagem de site."
      />

      {/* Titulo da Certificações */}
      <Flex>
        <Heading textAlign="center" m={[0, "auto"]} px="20px" py="20px">
          Conheça minhas principais certificações
        </Heading>
      </Flex>

      <Certification
        title="Trilha ReactJS"
        imgCertification={CertificadoRockeseatReactJS}
        bg="rocketseat.500"
        color="text.100"
        flexDir="row"
        description="Desenvolvimento interfaces modernas e reativas na web utilizando uma biblioteca modular e escalável."
      />
    </>
  );
}
