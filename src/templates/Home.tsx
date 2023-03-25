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
                gap={5}
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

                <Heading fontSize="4xl">
                    Next.js como minha plataforma preferida para desenvolvimento web. 
                </Heading>

                <Text fontSize="3xl">
                    Acredito que suas funcionalidades de geração de páginas estáticas (SSG), renderização do lado do servidor (SSR) e revalidação incremental do servidor (ISR) trazem muitas vantagens para o desenvolvimento de aplicações modernas.
                </Text>

                <Text fontSize="3xl">
                    O SSG, por exemplo, é uma funcionalidade que permite que o Next.js pré-renderize todas as páginas do site durante o processo de construção, o que significa que o conteúdo estático pode ser entregue diretamente ao usuário sem precisar de uma nova requisição ao servidor. Isso acelera muito o tempo de carregamento e melhora a experiência do usuário.
                </Text>

                <Text fontSize="3xl">
                    O SSR é uma funcionalidade que permite que o Next.js gere as páginas dinamicamente no servidor, em vez de fazê-lo no navegador do usuário. Isso é particularmente útil em casos em que a página precisa ser personalizada com base nas informações do usuário ou em dados dinâmicos do servidor.
                </Text>

                <Text fontSize="3xl">
                A funcionalidade de revalidação incremental do servidor (ISR) é uma evolução do SSG e do SSR, que permite que as páginas sejam atualizadas automaticamente em intervalos regulares, sem a necessidade de uma nova requisição do usuário. Isso é especialmente útil em casos em que o conteúdo precisa ser atualizado frequentemente, como notícias ou preços de ações.
                </Text>
                
                <Text fontSize="3xl">
                Além disso, o Next.js suporta o TypeScript, uma linguagem de programação tipada que fornece mais segurança ao desenvolvimento, pois permite detectar erros de digitação e erros de lógica antes mesmo do código ser executado.
                </Text>

                <Text fontSize="3xl">
                Em resumo, eu escolhi o Next.js como minha plataforma preferida porque suas funcionalidades de SSG, SSR e ISR permitem que eu crie aplicações web rápidas e eficientes, enquanto o suporte ao TypeScript garante um desenvolvimento mais seguro e confiável.
                </Text>

            </VStack>
        </Flex>
    )
}