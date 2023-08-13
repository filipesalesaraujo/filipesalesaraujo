import {Metadata} from "next";
import {Article, WithContext} from "schema-dts";

export const metadata: Metadata = {
    title: 'A otimização na resolução do problema das 8 rainhas via inteligência artificial',
    description: 'O problema das 8 rainhas é um dos desafios clássicos da computação e da inteligência artificial, demandando formulações precisas e técnicas avançadas para sua solução otimizada.',
    keywords: '8 rainhas, otimização, inteligência artificial, backtracking, Hill Climbing, algoritmos genéticos',
    robots: 'index,follow',
    openGraph: {
        title: 'A otimização na resolução do problema das 8 rainhas via inteligência artificial',
        description: 'O problema das 8 rainhas é um dos desafios clássicos da computação e da inteligência artificial, demandando formulações precisas e técnicas avançadas para sua solução otimizada.',
        type: 'article',
        url: 'https://filipesalesaraujo.com/artigos/otimizacao-resolucao-problema-8-rainhas-inteligencia-artificial',
    }
}

const jsonLd: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": 'A otimização na resolução do problema das 8 rainhas via inteligência artificial',
    "description": 'O problema das 8 rainhas é um dos desafios clássicos da computação e da inteligência artificial, demandando formulações precisas e técnicas avançadas para sua solução otimizada.',
    "datePublished": "2023-08-12",
    "author": {
        "@type": "Person",
        "name": "Filipe Sales Araujo"
    },
    "articleBody": 'O problema das 8 rainhas é um dos desafios clássicos da computação e da inteligência artificial, demandando formulações precisas e técnicas avançadas para sua solução otimizada (Russell & Norvig, 2010). Com os avanços na área de algoritmos e a crescente importância da otimização em diversos campos da ciência da computação, explorar como as máquinas podem eficientemente resolver tais problemas torna-se não apenas um exercício acadêmico, mas uma necessidade prática. Neste contexto, investigaremos a formulação aprimorada do problema das 8 rainhas e as técnicas contemporâneas de otimização que permitem sua resolução (Eiben & Smith, 2015). Formulação otimizada do problema das 8 rainhas: O jogo das 8 rainhas pode ser definido através de uma formulação aprimorada que limita o espaço de estados. Ao invés de uma representação completa do tabuleiro de xadrez, adotamos uma representação compacta: uma lista de oito números, conforme delineado por Russell & Norvig (2010). Cada posição indica a coluna, e o número representa a linha da rainha, restringindo assim os estados possíveis a 8! configurações. O estado inicial pode ser qualquer disposição aleatória das rainhas. A função sucessor, por sua vez, gera estados ao mover uma rainha em sua coluna. O teste objetivo avalia a disposição das rainhas, sendo uma solução considerada apenas quando nenhuma rainha estiver em posição de ataque. Técnicas de otimização para jogos de tabuleiro: O backtracking e o Hill Climbing são técnicas cruciais para a resolução eficiente do problema das 8 rainhas. O backtracking é uma técnica que posiciona as rainhas sequencialmente e retrocede quando um impasse é encontrado (Sipser, 2012). A busca local, como o Hill Climbing, começa com uma configuração aleatória e faz ajustes para minimizar os ataques (Dechter & Pearl, 1985). Os algoritmos genéticos, influenciados por princípios biológicos, partem de várias soluções e utilizam operações de seleção, cruzamento e mutação para refinar a disposição (Eiben & Smith, 2015). O domínio da inteligência artificial evoluiu ao ponto de tornar viável a solução de problemas anteriormente considerados complexos, como o das 8 rainhas, de forma otimizada. Com uma formulação adequada e o uso de técnicas sofisticadas de otimização, a máquina é equipada para explorar e resolver tal desafio (Russell & Norvig, 2010). O backtracking, a busca local e os algoritmos genéticos demonstram ser ferramentas poderosas nesta empreitada, sendo sua eficácia notável ao se trabalhar em conjunto com uma formulação aprimorada do problema (Eiben & Smith, 2015; Sipser, 2012). A confluência dessas metodologias não apenas fornece soluções para jogos de tabuleiro, mas também pavimenta o caminho para abordagens mais eficientes em outros problemas computacionais complexos. Em última análise, esta evolução reitera a importância da otimização e da inovação contínuas na arena da inteligência artificial.',
    "keywords": '8 rainhas, otimização, inteligência artificial, backtracking, Hill Climbing, algoritmos genéticos'
};

export default function Otimizacao8RainhasIA() {
    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
            <section className="flex justify-center items-center">
                <div className="max-w-[1140px] w-[100%] p-5 gap-5 flex flex-col">
                    <h1 className="text-3xl text-white uppercase">A otimização na resolução do problema das 8 rainhas via inteligência artificial.</h1>
                    <hr className="text-white"/>
                    <p className="text-white">O problema das 8 rainhas é um dos desafios clássicos da computação e da inteligência artificial, demandando formulações precisas e técnicas avançadas para sua solução otimizada (Russell & Norvig, 2010). Com os avanços na área de algoritmos e a crescente importância da otimização em diversos campos da ciência da computação, explorar como as máquinas podem eficientemente resolver tais problemas torna-se não apenas um exercício acadêmico, mas uma necessidade prática. Neste contexto, investigaremos a formulação aprimorada do problema das 8 rainhas e as técnicas contemporâneas de otimização que permitem sua resolução (Eiben & Smith, 2015).</p>
                    <h2 className="text-white text-2xl">Formulação otimizada do problema das 8 rainhas</h2>
                    <p className="text-white">O jogo das 8 rainhas pode ser definido através de uma formulação aprimorada que limita o espaço de estados. Ao invés de uma representação completa do tabuleiro de xadrez, adotamos uma representação compacta: uma lista de oito números, conforme delineado por Russell & Norvig (2010). Cada posição indica a coluna, e o número representa a linha da rainha, restringindo assim os estados possíveis a 8! configurações. O estado inicial pode ser qualquer disposição aleatória das rainhas. A função sucessor, por sua vez, gera estados ao mover uma rainha em sua coluna. O teste objetivo avalia a disposição das rainhas, sendo uma solução considerada apenas quando nenhuma rainha estiver em posição de ataque.</p>
                    <h3 className="text-white text-2xl">Técnicas de otimização para jogos de tabuleiro</h3>
                    <p className="text-white">O backtracking e o Hill Climbing são técnicas cruciais para a resolução eficiente do problema das 8 rainhas. O backtracking é uma técnica que posiciona as rainhas sequencialmente e retrocede quando um impasse é encontrado (Sipser, 2012). A busca local, como o Hill Climbing, começa com uma configuração aleatória e faz ajustes para minimizar os ataques (Dechter & Pearl, 1985). Os algoritmos genéticos, influenciados por princípios biológicos, partem de várias soluções e utilizam operações de seleção, cruzamento e mutação para refinar a disposição (Eiben & Smith, 2015).</p>
                    <p className="text-white">O domínio da inteligência artificial evoluiu ao ponto de tornar viável a solução de problemas anteriormente considerados complexos, como o das 8 rainhas, de forma otimizada. Com uma formulação adequada e o uso de técnicas sofisticadas de otimização, a máquina é equipada para explorar e resolver tal desafio (Russell & Norvig, 2010). O backtracking, a busca local e os algoritmos genéticos demonstram ser ferramentas poderosas nesta empreitada, sendo sua eficácia notável ao se trabalhar em conjunto com uma formulação aprimorada do problema (Eiben & Smith, 2015; Sipser, 2012). A confluência dessas metodologias não apenas fornece soluções para jogos de tabuleiro, mas também pavimenta o caminho para abordagens mais eficientes em outros problemas computacionais complexos. Em última análise, esta evolução reitera a importância da otimização e da inovação contínuas na arena da inteligência artificial.</p>
                    <hr className="text-white"/>
                    <p className="text-white">RUSSELL, S. J.; NORVIG, P. Artificial Intelligence: A Modern Approach. 3ª ed. Prentice Hall, 2010.</p>
                    <p className="text-white">EIBEN, A. E.; SMITH, J. E. Introduction to Evolutionary Computing. Springer, 2015.</p>
                    <p className="text-white">SIPSER, M. Introduction to the Theory of Computation. 3ª ed. Cengage Learning, 2012.</p>
                    <p className="text-white">DECHTER, R.; PEARL, J. Generalized best-first search strategies and the optimality of A*. Journal of the Association for Computing Machinery, v. 32, n. 3, p. 505-536, 1985.</p>
                </div>
            </section>
        </main>
    )
}