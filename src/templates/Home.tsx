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

                <Heading as="h1" fontSize="4xl" fontWeight="bold">
                    Olá, meu nome é Filipe Sales Araujo
                </Heading>

                <Text fontSize="3xl">
                     Sou um desenvolvedor full-stack. Meu foco principal está no desenvolvimento de aplicações web, onde utilizo React e seu framework Next.js para criar interfaces de usuário ricas e dinâmicas.
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

                <Heading as="h2" fontSize="4xl" fontWeight="bold">
                    Next.js como minha plataforma preferida para desenvolvimento web
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
                    Escolhi o Next.js como minha plataforma preferida porque suas funcionalidades de SSG, SSR e ISR permitem que eu crie aplicações web rápidas e eficientes, enquanto o suporte ao TypeScript garante um desenvolvimento mais seguro e confiável.
                </Text>

                <Heading as="h3" fontSize="4xl" fontWeight="bold">
                    Porque WordPress HeadLess
                </Heading>

                <Text fontSize="3xl">
                    O WordPress Headless é uma abordagem em que o WordPress é utilizado como um CMS (Sistema de Gerenciamento de Conteúdo), mas sem a parte "front-end" (a interface visual que os usuários veem). Em vez disso, os desenvolvedores usam uma camada intermediária para acessar os dados do WordPress e exibi-los em diferentes plataformas, como aplicativos móveis, sites estáticos e outros sistemas.
                </Text>

                <Text fontSize="3xl">
                    Uma das principais vantagens do WordPress Headless é a flexibilidade. Como desenvolvedor, posso criar qualquer tipo de interface de usuário ou aplicativo que desejar, sem me preocupar com as limitações do WordPress. Isso significa que posso criar experiências personalizadas para meus usuários e atender às suas necessidades específicas.
                </Text>

                <Text fontSize="3xl">
                    Outra vantagem é a escalabilidade. Com o WordPress Headless, posso usar a tecnologia que melhor se adapta às necessidades do meu projeto. Se precisar de mais desempenho, posso adicionar mais recursos de servidor ou usar uma solução de cache. Se precisar de mais segurança, posso usar as mais recentes tecnologias de autenticação e autorização.
                </Text>

                <Text fontSize="3xl">
                    Além disso, o WordPress Headless permite a integração fácil com outros serviços e plataformas. Posso conectar meu site com sistemas de comércio eletrônico, sistemas de gerenciamento de clientes, plataformas de marketing e muito mais. Isso me ajuda a criar uma solução completa para meus usuários e atender às suas necessidades.
                </Text>

                <Text fontSize="3xl">
                    Outra vantagem do WordPress Headless é a rapidez no desenvolvimento. Posso desenvolver meu site mais rapidamente, pois não preciso me preocupar com a interface do usuário. Isso me permite me concentrar no desenvolvimento da lógica de negócios, bancos de dados e outras funcionalidades avançadas.
                </Text>

                <Text fontSize="3xl">
                    O WordPress Headless é uma abordagem flexível, escalável e fácil de integrar que permite aos desenvolvedores criar soluções personalizadas para atender às necessidades de seus usuários. Estou muito animado para continuar explorando essa tecnologia e criar soluções ainda mais avançadas no futuro.
                </Text>

            </VStack>
        </Flex>
    )
}