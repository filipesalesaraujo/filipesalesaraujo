import {Box, Flex, Heading, Text, VStack} from "@chakra-ui/react";


export function Home() {
    return (
        <Flex as="header"
              justifyContent="center"
              backgroundColor="blue.50"
        >
            <VStack
                maxW="1200px"
                w="full"
                p={5}
                alignItems="flex-start"
            >
                <Text fontSize="3xl" >Oi, me chamo Filipe Sales Araujo. Sou desenvolvedor <Box as="i">Full
                    Stack.</Box> Graduado em licenciatura em Educação Física, graduando Ciência da Computação e pós-graduando em Ciência de Dados.</Text>

                <Text fontSize="3xl">Sou especilista em desenvolvimento <Box as="i">Front-end</Box>, sendo a minha principal <Box as="i">stack</Box> JavaScript. A biblioteca que mais utilizo é React, e seu framework Next.js.</Text>

                <Text fontSize="3xl">No <Box as="i">Back-end</Box> utilizo o <Box as="i">CMS</Box> WordPress <Box as="i">Headless</Box>.</Text>

                <Text fontSize="3xl">Atualmente estudando C# e Python.</Text>

            </VStack>
        </Flex>
    )
}