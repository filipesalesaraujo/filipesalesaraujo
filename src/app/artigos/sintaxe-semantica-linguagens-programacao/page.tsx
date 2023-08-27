import {Metadata} from "next";
import {WithContext, Article} from 'schema-dts';
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Sintaxe e Semântica em Linguagens de Programação: Entendendo a Estrutura e o Significado no Código - Filipe Sales Araujo',
    description: 'Filipe Sales Araujo discute as diferenças e importâncias da sintaxe e semântica em linguagens de programação, ilustradas através de exemplos práticos.',
    keywords: 'Filipe Sales Araujo, sintaxe, semântica, linguagens de programação, estrutura de código, significado de código',
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
        canonical: 'https://filipesalesaraujo.com/artigos/sintaxe-semantica-linguagens-programacao',
        languages: {
            'pt-BR': 'https://filipesalesaraujo.com/artigos/sintaxe-semantica-linguagens-programacao'
        }
    },
    category: 'technology',
    openGraph: {
        title: 'Sintaxe e Semântica em Linguagens de Programação: Entendendo a Estrutura e o Significado no Código - Filipe Sales Araujo',
        description: 'Filipe Sales Araujo discute as diferenças e importâncias da sintaxe e semântica em linguagens de programação, ilustradas através de exemplos práticos.',
        type: 'article',
        url: 'https://filipesalesaraujo.com/artigos/sintaxe-semantica-linguagens-programacao',
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

const jsonLd: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": 'Sintaxe e Semântica em Linguagens de Programação: Entendendo a Estrutura e o Significado no Código - Filipe Sales Araujo',
    "description": 'Filipe Sales Araujo discute as diferenças e importâncias da sintaxe e semântica em linguagens de programação, ilustradas através de exemplos práticos.',
    "datePublished": "2023-08-26",
    "author": {
        "@type": "Person",
        "name": "Filipe Sales Araujo"
    },
    "articleBody": "Dentro do vasto mundo da programação, os conceitos de sintaxe e semântica desempenham papéis fundamentais na estruturação e compreensão de códigos. Ambos, embora distintos, são essenciais para o desenvolvimento de programas eficientes e corretos. Neste texto, exploraremos suas diferenças e importâncias, ilustradas através de exemplos práticos (MCCONNELL, 2004).\n\nA ESSÊNCIA DA SINTAXE\n\nA sintaxe, em sua essência, pode ser comparada à gramática em linguagens humanas. É o conjunto de regras que define a estrutura correta das sentenças ou instruções em uma linguagem de programação (LUDWIG, 2015). Um código pode ser escrito seguindo rigorosamente essas regras, garantindo que o compilador ou interpretador o compreenda sem problemas.\n\nExemplo de erro de sintaxe em Python:\n\nfor i in range(5)\n    print(i)\n\nNo exemplo acima, a falta de dois pontos após range(5) resulta em um erro de sintaxe, impedindo o programa de ser executado.\n\nNAVEGANDO PELA SEMÂNTICA\n\nA semântica aborda a intenção por trás do código: o que realmente se espera que ele faça. Mesmo que um código seja sintaticamente correto, se não realizar a ação esperada, ele sofre de erros semânticos (MARTIN, 2019). Estes são, muitas vezes, mais desafiadores de identificar, pois emergem apenas durante a execução ou ao observar os resultados do programa.\n\nExemplo de erro semântico em Python:\n\ndef area_quadrado(lado):\n    return lado + lado\n\narea = area_quadrado(5)\nprint(area) # Deveria imprimir 25, mas imprime 10.\n\nNo trecho de código acima, embora a função area_quadrado esteja correta sintaticamente, ela tem um erro semântico, pois, ao invés de calcular a área do quadrado multiplicando o lado por si mesmo, ela simplesmente adiciona o lado a si mesmo.\n\nCONCLUSÃO\n\nSintaxe e semântica são pilares complementares em programação. Enquanto a sintaxe garante que o código seja interpretável pela máquina, a semântica assegura que ele execute as intenções desejadas. Para criar programas eficazes, ambos os aspectos devem ser meticulosamente considerados e revistos.\n\nREFERÊNCIAS\n\nMCCONNELL, Steve. Código Completo. 2ª ed. Microsoft Press, 2004.\n\nLUDWIG, Larry. Programação: Princípios e Prática Usando C++. 2ª ed. Pearson Education, 2015.\n\nMARTIN, Robert C. Código Limpo. Alta Books, 2019.",
    "keywords": 'Filipe Sales Araujo, sintaxe, semântica, linguagens de programação, estrutura de código, significado de código'
};

import featuredImage from '../../../../public/images/sintaxe-semantica-linguagens-programacao.webp'

export default function SintaxeSemanticaProg() {
    return (
        <div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
            <main>
                <section className="flex justify-center items-center">
                    <div className="max-w-[1140px] w-[100%] p-5 gap-5 flex flex-col">
                        <Image src={featuredImage} alt="A web semêntica como ferramenta facilitadora na gestão de pacientes diabéticos" className="rounded-xl" />
                        <h1 className="text-3xl text-white uppercase">Sintaxe e Semântica em Linguagens de Programação: Entendendo a Estrutura e o Significado no Código</h1>
                        <hr className="text-white"/>
                        <p className="text-white">Dentro do vasto mundo da programação, os conceitos de sintaxe e semântica desempenham papéis fundamentais na estruturação e compreensão de códigos. Ambos, embora distintos, são essenciais para o desenvolvimento de programas eficientes e corretos. Neste texto, exploraremos suas diferenças e importâncias, ilustradas através de exemplos práticos (MCCONNELL, 2004).</p>
                        <hr className="text-white"/>
                        <h2 className="text-white text-2xl">Sintaxe</h2>
                        <p className="text-white">A sintaxe, em sua essência, pode ser comparada à gramática em linguagens humanas. É o conjunto de regras que define a estrutura correta das sentenças ou instruções em uma linguagem de programação (LUDWIG, 2015). Um código pode ser escrito seguindo rigorosamente essas regras, garantindo que o compilador ou interpretador o compreenda sem problemas.</p>
                        <p className="text-white">Exemplo de erro de sintaxe em Python:</p>
                        <code className="text-white bg-black p-1 rounded-sm">for i in range(5) <br/>print(i)</code>
                        <p className="text-white">No exemplo acima, a falta de dois pontos após range(5) resulta em um erro de sintaxe, impedindo o programa de ser executado.</p>
                        <hr className="text-white"/>
                        <h3 className="text-white text-2xl">Semântica</h3>
                        <p className="text-white">A semântica aborda a intenção por trás do código: o que realmente se espera que ele faça. Mesmo que um código seja sintaticamente correto, se não realizar a ação esperada, ele sofre de erros semânticos (MARTIN, 2019). Estes são, muitas vezes, mais desafiadores de identificar, pois emergem apenas durante a execução ou ao observar os resultados do programa.</p>
                        <p className="text-white">Exemplo de erro semântico em Python:</p>
                        <code className="text-white bg-black p-1 rounded-sm">
                            def area_quadrado(lado): <br/>
                            return lado + lado<br/>
                            <br/>
                            area = area_quadrado(5)<br/>
                            print(area) # Deveria imprimir 25, mas imprime 10.
                        </code>
                        <p className="text-white">No trecho de código acima, embora a função area_quadrado esteja correta sintaticamente, ela tem um erro semântico, pois, ao invés de calcular a área do quadrado multiplicando o lado por si mesmo, ela simplesmente adiciona o lado a si mesmo.</p>
                        <hr className="text-white"/>
                        <p className="text-white">Sintaxe e semântica são pilares complementares em programação. Enquanto a sintaxe garante que o código seja interpretável pela máquina, a semântica assegura que ele execute as intenções desejadas. Para criar programas eficazes, ambos os aspectos devem ser meticulosamente considerados e revistos.</p>
                        <hr className="text-white"/>
                        <p className="text-white">MCCONNELL, Steve. <strong>Código Completo.</strong> 2ª ed. Microsoft Press, 2004.</p>
                        <p className="text-white">LUDWIG, Larry. <strong>Programação:</strong> Princípios e Prática Usando C++. 2ª ed. Pearson Education, 2015. </p>
                        <p className="text-white">MARTIN, Robert C. <strong>Código Limpo.</strong> Alta Books, 2019.</p>
                    </div>
                </section>
            </main>
        </div>
    )
}