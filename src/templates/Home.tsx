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
                <Text fontSize="3xl">
                    Olá, meu nome é Filipe Sales Araujo e sou um desenvolvedor full-stack. Meu foco principal está no desenvolvimento de aplicações web, onde utilizo React e seu framework Next.js para criar interfaces de usuário ricas e dinâmicas.
                </Text>

                <Text fontSize="3xl">
                    Além disso, no back-end, utilizo a plataforma WordPress Headless para fornecer serviços e dados necessários para alimentar essas aplicações. Acredito que a combinação dessas tecnologias me permite criar soluções web altamente escaláveis, flexíveis e fáceis de manter.
                </Text>

                <Text fontSize="3xl">
                    Embora minha formação acadêmica inicial tenha sido em educação física, percebi que meu verdadeiro interesse estava em tecnologia e, por isso, decidi seguir carreira na área. Atualmente, estou cursando graduação em ciência da computação e também realizando uma pós-graduação em ciência de dados, o que me permite aprofundar meus conhecimentos em áreas como aprendizado de máquina, análise de dados e visualização.
                </Text>

                <Text fontSize="3xl">
                    Além disso, estou sempre buscando aprender novas habilidades e tecnologias para melhorar minhas habilidades como desenvolvedor. No momento, estou focado em estudar C# e Python, já que acredito que essas linguagens são essenciais para a criação de aplicativos desktop e soluções de backend escaláveis.
                </Text>

                <Text fontSize="3xl">
                    Como um desenvolvedor full-stack, acredito que a minha habilidade de trabalhar em todas as camadas de uma aplicação me permite ter uma visão geral do projeto, o que é essencial para criar soluções web altamente eficientes e escaláveis. Estou sempre procurando desafios e novas oportunidades para aplicar minhas habilidades e conhecimentos em projetos interessantes e inovadores.
                </Text>

            </VStack>
        </Flex>
    )
}