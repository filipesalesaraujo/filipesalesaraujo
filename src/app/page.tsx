import {Metadata} from "next";
import {Person, WithContext} from "schema-dts";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Filipe Sales Araujo',
    description: 'Conheça Filipe Sales Araujo, com formação inicial em Educação Física, e sua transição para a Ciência da Computação. Atualmente, ele se aprofunda na Ciência de Dados e tem uma paixão pelo desenvolvimento web, incluindo ferramentas como Next.js, WordPress Headless e Tailwind CSS.',
    keywords: 'Filipe Sales Araujo, Educação Física, Ciência da Computação, Ciência de Dados, Next.js, WordPress Headless, Tailwind CSS, Vite, Chakra UI',
    robots: {
        follow: true,
        index: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    authors: {
        name: 'Filipe Sales Araujo',
    },
    alternates: {
        canonical: 'https://filipesalesaraujo.com/',
        languages: {
            'pt-BR': 'https://filipesalesaraujo.com/'
        }
    },
    category: 'technology',
    openGraph: {
        title: 'Filipe Sales Araujo - Sobre Mim',
        description: 'Conheça Filipe Sales Araujo e sua jornada desde a Educação Física até a Ciência da Computação. Aprofundando-se na Ciência de Dados e apaixonado pelo desenvolvimento web.',
        type: 'website',
        url: 'https://filipesalesaraujo.com/',
        images: [
            {
                url: 'https://filipesalesaraujo.com/images/open-graph-image.webp',
                width: 1024,
                height: 1024,
            }
        ],
        locale: "pt_BR",
        siteName: 'Filipe Sales Araujo'
    }
}

const jsonLd: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Filipe Sales Araujo',
    description: 'Conheça Filipe Sales Araujo, com formação inicial em Educação Física, e sua transição para a Ciência da Computação. Atualmente, ele se aprofunda na Ciência de Dados e é apaixonado pelo desenvolvimento web, incluindo ferramentas como Next.js, WordPress Headless e Tailwind CSS.',
    url: 'https://filipesalesaraujo.com/',
    jobTitle: 'Desenvolvedor Web e Cientista de Dados',
    worksFor: {
        '@type': 'Organization',
        name: 'Hotline Develpoer'
    },
    alumniOf: 'Universidade Anhembi Morumbi',
    knowsAbout: ['Educação Física', 'Ciência da Computação', 'Ciência de Dados', 'Next.js', 'WordPress Headless', 'Tailwind CSS']
};

import dominandoNextjsImage from '../../public/images/dominando-nextjs.webp'
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
            <main>
                <section className="flex justify-center items-center">
                    <div className="max-w-[1140px] w-[100%] p-5 gap-10 flex flex-col">

                        <div className="gap-5 flex flex-col">
                            <h1 className="text-[112px] font-bold leading-none flex flex-col">
                                <span className="bg-monitoramento-gradient text-transparent bg-clip-text">Monitoramento.</span>
                                <span className="bg-analise-gradient text-transparent bg-clip-text">Análise.</span>
                                <span className="bg-velocidade-gradient text-transparent bg-clip-text">Velocidade.</span>
                            </h1>
                            <h2 className="text-3xl font-extrabold bg-gradient-linear bg-clip-text text-transparent">Otimização Web Avançada: Acelere e Melhore Sua Presença Online</h2>
                            <p className="text-gray-300">Você está enfrentando problemas de indexação? <strong>Resolvo isso com monitoramento via Search Console.</strong> Está insatisfeito com a velocidade do seu site? <strong>Minha especialização em PageSpeed Insights otimizará seu site para carregar como um raio.</strong> Procura uma presença online otimizada para SEO? <strong>Com minha expertise em Next.js, garanto desenvolvimento de ponta e flexibilidade inigualável.</strong> Buscando entender melhor o comportamento do seu público? <strong>Com o GA4, faço uma análise profunda e entendo exatamente o que seus usuários procuram.</strong> Precisa de um design web adaptável e rápido? <strong>Uso o Tailwind CSS para entregar designs responsivos e o WordPress Headless para inovação e adaptabilidade.</strong> Se você procura mais do que apenas soluções, mas uma revolução na sua presença online, <strong>vamos conversar</strong>. Juntos, podemos enfrentar e superar qualquer desafio digital.</p>

                            <Image src={dominandoNextjsImage} alt="Imandem de um painel de uma nave"/>

                            <h2 className="text-3xl font-extrabold bg-gradient-linear bg-clip-text text-transparent">Dominando o Next.js</h2>
                            <p className="text-gray-300">No dinâmico universo do desenvolvimento de sites, o Next.js é mais do que apenas uma ferramenta; é um catalisador de eficiência e inovação. Optei por integrar o Next.js ao meu fluxo de trabalho pelos seguintes motivos:</p>

                            <ul className="text-gray-300 flex flex-col gap-5 list-disc pl-5">
                                <li><strong>Desenvolvimento Acelerado:</strong> O Next.js acelera a implementação de projetos, possibilitando que a fase de concepção até a conclusão seja ágil e eficiente. Com mais tempo disponível, posso focar em detalhes e refinamentos, assegurando um produto final de alta qualidade.</li>
                                <li><strong>Flexibilidade de Integração:</strong> Independentemente do CMS, o Next.js oferece uma integração fluida com qualquer API. Esta capacidade garante que eu possa criar soluções adaptadas e dinâmicas para cada necessidade.</li>
                                <li><strong>Diversidade de Abordagens:</strong> Seja por meio de Server Components, Client Components, SSR, SSG ou ISR, o Next.js oferece uma gama de estratégias de desenvolvimento, permitindo que eu escolha o melhor método para cada projeto específico.</li>
                                <li><strong>Extensa Biblioteca de Recursos:</strong> Uma das grandes vantagens do Next.js é sua rica coleção de bibliotecas. Para quase todo desafio ou requisito específico, há uma biblioteca disponível, aumentando exponencialmente a capacidade de resolver problemas e adaptar-se a diferentes cenários.</li>
                                <li><strong>Otimização e Performance:</strong> Com o Next.js, a entrega de conteúdo é otimizada ao máximo, assegurando tempos de carregamento velozes e uma experiência de usuário fluida.</li>
                                <li><strong>SEO Aprimorado:</strong> Com a crescente necessidade de visibilidade online, o Next.js traz ferramentas de otimização para mecanismos de busca, ampliando a presença online e impactando positivamente o alcance dos projetos.</li>
                            </ul>

                            <Link href="/contato" className="bg-indigo-500 bg-opacity-50 hover:bg-opacity-80 text-zinc-100 flex items-center justify-center p-1 rounded-md font-bold transition-colors">Quer aumentar a velocidade do seu site?</Link>

                        </div>

                        <div className="gap-5 flex flex-col">
                            <h3 className="text-3xl font-extrabold bg-gradient-linear bg-clip-text text-transparent">Expertise em PageSpeed Insights</h3>
                            <p className="text-gray-300">Um site rápido não é apenas agradável aos olhos; é vital para a retenção de usuários. Estudos mostram que cada segundo a mais no tempo de carregamento pode levar a uma significativa taxa de abandono. Os benefícios de uma excelente pontuação no PageSpeed Insights vão além do simples engajamento do usuário:</p>
                            <ul className="text-gray-300 flex flex-col gap-5 list-disc pl-5">
                                <li><strong>Melhor Ranking em Buscadores:</strong> Mecanismos de busca, como o Google, priorizam sites que carregam rapidamente. Um site otimizado tem maior probabilidade de aparecer nas primeiras posições em resultados de busca, trazendo mais tráfego orgânico.</li>
                                <li><strong>Aumento da Conversão:</strong> Usuários têm menos paciência na web atual. Um site que carrega rapidamente diminui as chances de um usuário desistir de uma compra ou ação importante devido à impaciência.</li>
                                <li><strong>Economia de Recursos:</strong> Sites otimizados geralmente usam menos recursos do servidor, o que pode reduzir os custos de hospedagem e aumentar a eficiência em ambientes de alta demanda.</li>
                                <li><strong>Experiência Positiva do Usuário:</strong> A velocidade é uma das primeiras impressões que um usuário tem de um site. Uma experiência de carregamento ágil pode estabelecer um tom positivo para toda a interação do usuário com a marca ou serviço.</li>
                                <li><strong>Adaptabilidade a Redes Diversas:</strong> Em regiões ou situações onde a conexão à Internet pode ser instável ou lenta, um site otimizado pode ainda assim oferecer uma experiência satisfatória.</li>
                            </ul>
                            <p className="text-gray-300">Por isso, dedica-se um esforço redobrado em garantir excelentes pontuações no PageSpeed Insights. O objetivo não é apenas ter um site que carrega rapidamente, mas criar plataformas que ofereçam a melhor experiência possível, otimizem recursos e maximizem o retorno sobre o investimento.</p>
                            <Link href="/contato" className="bg-cyan-500 bg-opacity-50 hover:bg-opacity-80 text-zinc-100 flex items-center justify-center p-1 rounded-md font-bold transition-colors">Quer melhorar a performance do seu site?</Link>
                        </div>


                        <div className="gap-5 flex flex-col">
                            <h4 className="text-3xl font-extrabold bg-gradient-linear bg-clip-text text-transparent">Decifrando o Search Console</h4>
                            <p className="text-gray-300">Ter um site é uma coisa; garantir que ele seja encontrado é outra. No universo digital, a visibilidade é tão crucial quanto a funcionalidade. É aqui que o Search Console brilha:</p>
                            <ul className="text-gray-300 flex flex-col gap-5 list-disc pl-5">
                                <li><strong>Insights Detalhados:</strong> Com o Search Console, não se fica apenas &quot;no escuro&quot; esperando que o site seja encontrado. Ele fornece dados detalhados sobre como os usuários chegam ao site, quais palavras-chave são mais eficazes e quais páginas são mais populares.</li>
                                <li><strong>Otimização para Motores de Busca (SEO):</strong> Esta ferramenta não apenas relata, mas também sugere. Ao identificar problemas ou oportunidades de otimização, pode-se ajustar o conteúdo para melhor se alinhar com as práticas recomendadas de SEO, garantindo uma classificação mais elevada nos resultados de pesquisa.</li>
                                <li><strong>Alertas Rápidos:</strong> Se algo der errado - como páginas quebradas, problemas de segurança ou penalizações - o Search Console avisa imediatamente. Esta resposta rápida permite correções ágeis, evitando que pequenos problemas se transformem em grandes dores de cabeça.</li>
                                <li><strong>Acompanhamento de Links Internos e Externos:</strong> Saber quem está vinculando ao site e como as páginas internas estão interligadas é vital para entender e melhorar a autoridade e a estrutura do site.</li>
                                <li><strong>Entendimento do Público:</strong> Com o Search Console, é possível ver de que países os usuários estão vindo, em quais dispositivos eles estão navegando e muito mais. Isso permite adaptar o conteúdo para atender melhor às necessidades e expectativas do público-alvo.</li>
                            </ul>
                            <p className="text-gray-300">Desta forma, ao utilizar o Search Console, não se está apenas monitorando a presença de um site nos motores de busca. Está-se ativamente moldando e aperfeiçoando essa presença, assegurando que o site não apenas exista, mas também seja visível, relevante e altamente sintonizado com as necessidades de seu público.</p>
                            <Link href="/contato" className="bg-emerald-500 bg-opacity-50 hover:bg-opacity-80 text-zinc-100 flex items-center justify-center p-1 rounded-md font-bold transition-colors">Quer aumentar a visibilidade do seu site nos mecanismos de busca?</Link>
                        </div>

                        <div className="gap-5 flex flex-col">
                            <h5 className="text-3xl font-extrabold bg-gradient-linear bg-clip-text text-transparent">GA4: Análise Avançada para Decisões Precisas</h5>
                            <p className="text-gray-300">Dados são o novo ouro do século. Em uma era digital onde cada clique, interação e comportamento pode ser monitorado, é imperativo ter as ferramentas certas para compreender e capitalizar essas informações. É aqui que o GA4 se destaca:</p>
                            <ul className="text-gray-300 flex flex-col gap-5 list-disc pl-5">
                                <li><strong>Análise de Jornada Completa:</strong> O GA4 não se limita a mostrar páginas vistas ou cliques isolados. Ele permite visualizar a jornada completa do usuário, desde a primeira interação até a conversão, identificando pontos de atrito e oportunidades de otimização.</li>
                                <li><strong>Eventos em Tempo Real:</strong> Ao rastrear eventos em tempo real, pode-se responder dinamicamente às tendências emergentes, adaptando estratégias e conteúdos com base no comportamento imediato dos usuários.</li>
                                <li><strong>Segmentação Avançada:</strong> Com o GA4, é possível segmentar o público de acordo com uma variedade de critérios, desde comportamentos específicos até detalhes demográficos. Isso facilita a personalização de campanhas e conteúdos para segmentos específicos.</li>
                                <li><strong>Integrações e Flexibilidade:</strong> A capacidade de integrar o GA4 com outras ferramentas e plataformas é vital. Isso proporciona uma visão holística, combinando dados de diferentes fontes e aplicando insights em várias plataformas.</li>
                                <li><strong>Machine Learning Integrado:</strong> As capacidades de aprendizado de máquina do GA4 auxiliam na detecção de tendências e padrões sutis que podem não ser imediatamente aparentes. Isso se traduz em previsões mais precisas e insights mais profundos.</li>
                            </ul>
                            <Link href="/contato" className="bg-amber-500 bg-opacity-50 hover:bg-opacity-80 text-zinc-100 flex items-center justify-center p-1 rounded-md font-bold transition-colors">Quer entender melhor o comportamento dos usuários no seu site?</Link>
                        </div>

                        <div className="gap-5 flex flex-col">
                            <h6 className="text-3xl font-extrabold bg-gradient-linear bg-clip-text text-transparent">O Poder do Design Consciente com Tecnologia de Ponta</h6>
                            <p className="text-gray-300">Design é mais do que estética; é sobre funcionalidade. Com Tailwind CSS, posso criar designs que não são apenas visualmente atraentes, mas também altamente responsivos e adaptados às necessidades do usuário.</p>
                            <ul className="text-gray-300 flex flex-col gap-5 list-disc pl-5">
                                <li><strong>Consistência e Eliminação de Hard Code:</strong> Em um cenário onde muitos projetos se perdem em ajustes manuais frequentes, causando erros e inconsistências, o Tailwind se destaca. Ele traz uma abordagem baseada em um sistema de valores pré-definidos, garantindo que os designs sejam consistentes e que a dependência de valores codificados seja minimizada. Isso significa menos erros visuais e uma estética mais harmoniosa.</li>
                                <li><strong>Prototipação Direta e Design Responsivo:</strong> A demanda atual é de sites que funcionem bem em qualquer dispositivo. Aqui, o Tailwind brilha, permitindo prototipações diretamente no navegador. Isto é, ao criar designs responsivos com ele, posso visualizar ajustes em tempo real e garantir que tudo esteja otimizado para todos os tipos de tela, desde smartphones até desktops.</li>
                                <li><strong>Flexibilidade e Eficiência em Estilos:</strong> Alterações em estilos frequentemente desencadeiam uma série de problemas relacionados à cascata do CSS. Com o Tailwind, este desafio é contornado. Seus estilos embutidos são desenhados para serem fáceis de modificar, mover ou até mesmo excluir, o que significa menos dores de cabeça e mais eficiência ao estilizar componentes.</li>
                                <li><strong>Simplificação e Foco na Entrega:</strong> A nomenclatura pode ser um obstáculo significativo em CSS. Nomear estilos se torna uma tarefa trabalhosa e, muitas vezes, redundante. No entanto, o Tailwind, ao promover estilos inline, elimina esse desafio, permitindo que eu me concentre mais em desenvolver e menos em decifrar nomes de classes complexas.</li>
                                <li><strong>Otimização de Performance e Escala: À medida que os sites crescem, manter uma performance aceitável se torna um desafio. Mas com o Tailwind, a escalabilidade não é uma preocupação. Ele otimiza o site para carregar rapidamente, mesmo em situações onde há uma grande quantidade de estilos e componentes envolvidos.</strong></li>
                                <li><strong>Abordagem Versátil:</strong> O mundo do desenvolvimento web está repleto de ferramentas e abordagens. Enquanto algumas são rígidas, o Tailwind CSS oferece uma base utilitária que pode ser expandida. Se for necessário algo mais específico ou customizado, ainda tenho a opção de integrar soluções como CSS-in-JS, tornando minha abordagem não apenas poderosa, mas também versátil.</li>
                            </ul>
                            <Link href="/contato" className="bg-violet-500 bg-opacity-50 hover:bg-opacity-80 text-zinc-100 flex items-center justify-center p-1 rounded-md font-bold transition-colors">Quer criar designs responsivos e visualmente atraentes?</Link>
                        </div>

                        <div className="gap-5 flex flex-col">
                            <p className="text-3xl font-extrabold bg-gradient-linear bg-clip-text text-transparent">Revolucionando com WordPress Headless</p>
                            <p className="text-gray-300">Ao longo dos anos, desenvolvi uma expertise íntima na criação de temas para WordPress. Como muitos no setor sabem, o WordPress não é apenas o CMS mais popular do mercado, mas também uma ferramenta poderosa, open source e gratuita. Porém, com as rápidas mudanças na paisagem digital, é vital se adaptar para permanecer relevante.</p>
                            <p className="text-gray-300">A abordagem headless surgiu como uma resposta revolucionária a esse desafio. Com ela, consigo alavancar tudo o que valorizo no WordPress no back-end, mas agora com uma flexibilidade sem precedentes no front-end. Assim, mantenho as vantagens de familiaridade e robustez do WordPress, porém sem as restrições de um desenvolvimento de tema tradicional.</p>
                            <p className="text-gray-300">O resultado é claro: entregas mais ágeis, adaptabilidade a novas tecnologias e experiências envolventes para os usuários. Combinando minha profunda experiência no WordPress com o poder do desenvolvimento headless, estou bem posicionado para oferecer soluções web que são ao mesmo tempo confiáveis e à vanguarda da inovação.</p>

                            <ul className="text-gray-300 flex flex-col gap-5 list-disc pl-5">
                                <li><strong>Performance e Velocidade:</strong> Eliminando a camada frontal padrão do WordPress e adotando tecnologias front-end mais ágeis, asseguro carregamentos de página rápidos e uma experiência do usuário mais fluida.</li>
                                <li><strong>Libertação das Restrições de Design:</strong> Com total liberdade no front-end, é possível criar experiências únicas, saindo do padrão tradicional e conferindo uma personalização mais profunda ao design.</li>
                                <li><strong>Segurança Reforçada:</strong> Servindo conteúdo via API e mantendo o front-end isolado, a abordagem headless amplifica a segurança, protegendo melhor contra vulnerabilidades e ameaças.</li>
                                <li><strong>Facilidade de Integração:</strong> A abordagem headless facilita a integração com frameworks modernos, como React ou Vue, permitindo a criação de aplicações interativas e inovadoras.</li>
                                <li><strong>Escalabilidade Aprimorada:</strong> Ao se integrar com CDNs modernas, o WordPress headless está mais apto para lidar com grandes volumes de tráfego, garantindo performance constante mesmo sob demanda intensa.</li>
                            </ul>
                            <Link href="/contato" className="bg-blue-500 bg-opacity-50 hover:bg-opacity-80 text-zinc-100 flex items-center justify-center p-1 rounded-md font-bold transition-colors">Quer aderir ao Next.js sem deixar de utilizar seu WordPress existente?</Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
