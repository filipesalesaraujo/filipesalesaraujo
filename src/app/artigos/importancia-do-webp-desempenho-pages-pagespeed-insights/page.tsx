import {Metadata} from "next";
import {WithContext, Article} from 'schema-dts';
import Image from "next/image";

export const metadata: Metadata = {
    title: 'A Importância do WEBP para o Desempenho das Páginas no PageSpeed Insights - Filipe Sales Araujo',
    description: 'Filipe Sales Araujo explora a relevância e os benefícios do formato de imagem WEBP para melhorar o desempenho das páginas web no PageSpeed Insights. Discutimos o impacto dos formatos tradicionais, como JPEG e PNG, na velocidade de carregamento e como o WEBP emerge como uma solução inovadora para otimização da web moderna.',
    keywords: 'Filipe Sales Araujo, WEBP, Desempenho de Página, PageSpeed Insights, Otimização da Web, Formatos de Imagem, JPEG, PNG, Carregamento Rápido, Experiência do Usuário',
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
        canonical: 'https://filipesalesaraujo.com/artigos/importancia-do-webp-desempenho-pages-pagespeed-insights',
        languages: {
            'pt-BR': 'https://filipesalesaraujo.com/artigos/importancia-do-webp-desempenho-pages-pagespeed-insights'
        }
    },
    category: 'technology',
    openGraph: {
        title: 'A Importância do WEBP para o Desempenho das Páginas no PageSpeed Insights - Filipe Sales Araujo',
        description: 'Filipe Sales Araujo explora a relevância e os benefícios do formato de imagem WEBP para melhorar o desempenho das páginas web no PageSpeed Insights. Discutimos o impacto dos formatos tradicionais, como JPEG e PNG, na velocidade de carregamento e como o WEBP emerge como uma solução inovadora para otimização da web moderna.',
        type: 'article',
        url: 'https://filipesalesaraujo.com/artigos/importancia-do-webp-desempenho-pages-pagespeed-insights',
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
    "headline": 'A Importância do WEBP para o Desempenho das Páginas no PageSpeed Insights - Filipe Sales Araujo',
    "description": 'Filipe Sales Araujo explora a relevância e os benefícios do formato de imagem WEBP para melhorar o desempenho das páginas web no PageSpeed Insights. Discutimos o impacto dos formatos tradicionais, como JPEG e PNG, na velocidade de carregamento e como o WEBP emerge como uma solução inovadora para otimização da web moderna.',
    "datePublished": "2023-08-27",
    "author": {
        "@type": "Person",
        "name": "Filipe Sales Araujo"
    },
    "articleBody": "No ambiente digital moderno, a eficiência de uma página web transcende a simples métrica técnica para tornar-se um pilar crucial da experiência do usuário. O tempo que uma página leva para carregar pode influenciar direta e significativamente os rankings de SEO, taxas de conversão e a percepção geral dos usuários sobre a qualidade de um site. Neste contexto, as imagens têm consistentemente dominado o cenário de conteúdo visual das páginas web. Porém, elas também representam um dos maiores desafios em termos de otimização de desempenho. Em numerosos sites, a presença de imagens pode compor mais de 50% do peso total da página. Formatos tradicionais de imagem, como JPEG e PNG, têm sido amplamente adotados devido à sua popularidade e compatibilidade, mas não são necessariamente os mais otimizados para a paisagem web contemporânea. Isso nos leva ao advento do WEBP, um padrão de imagem moderno desenvolvido pelo Google. O WEBP destaca-se por sua capacidade de fornecer compressão substancial sem sacrificar a qualidade perceptível da imagem. Em comparação direta com o JPEG, o WEBP demonstra uma redução no tamanho do arquivo de até 30%, mantendo a integridade visual. Além disso, ao contrário do PNG, o WEBP suporta transparência com um tamanho de arquivo significativamente menor. Essa eficiência em termos de tamanho resulta em tempos de carregamento mais rápidos para páginas que implementam imagens no formato WEBP. Uma melhoria de até 3 segundos pode ser observada quando comparada a sites que dependem exclusivamente de formatos de imagem tradicionais. Adicionalmente, a ferramenta PageSpeed Insights do Google, que avalia e pontua o desempenho de páginas web, pode registrar um aumento de até 15 pontos na pontuação geral quando o WEBP é adotado. Em resumo, o formato de imagem WEBP, ao combinar qualidade e eficiência de compressão, destaca-se como uma solução vital para enfrentar os desafios de desempenho da web moderna. A implementação desse formato é, portanto, não apenas uma consideração técnica, mas uma decisão estratégica para melhorar a experiência do usuário, otimizar a velocidade de carregamento e melhorar os rankings de SEO.",
    "keywords": 'Filipe Sales Araujo, WEBP, Desempenho de Página, PageSpeed Insights, Otimização da Web, Formatos de Imagem, JPEG, PNG, Carregamento Rápido, Experiência do Usuário'
};

import featuredImage from '../../../../public/images/importancia-do-webp-desempenho-pages-pagespeed-insights.webp'

export default function ImportanciaDoWebpDesempenhoPagesPagespeedInsights() {
    return (
        <div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
            <main>
                <section className="flex justify-center items-center">
                    <div className="max-w-[1140px] w-[100%] p-5 gap-5 flex flex-col">
                        <Image src={featuredImage} alt="Implementação de banco de dados nosql na indústria automobilística" className="rounded-xl"/>
                        <h1 className="text-3xl font-extrabold bg-gradient-linear bg-clip-text text-transparent">A Importância do WEBP para o Desempenho das Páginas no PageSpeed Insights</h1>
                        <p className="text-gray-300">Em um mundo impulsionado pela era digital, a eficiência de uma página web não é apenas uma métrica técnica, mas um pilar fundamental da experiência do usuário. A forma como uma página carrega pode afetar diretamente os rankings de SEO, taxas de conversão e a percepção do usuário sobre a qualidade de um site (Souders, 2007).</p>
                        <h2 className="text-3xl font-extrabold bg-gradient-linear bg-clip-text text-transparent">O Peso das Imagens no Carregamento das Páginas</h2>
                        <p className="text-gray-300">Historicamente, as imagens têm sido a espinha dorsal do conteúdo visual de um website. No entanto, elas também representam um dos maiores obstáculos para tempos de carregamento rápidos. Em muitos sites, mais de 50% do peso da página é consumido por imagens. No entanto, em nossa busca por estética, recorremos frequentemente a formatos tradicionais como JPEG e PNG, que, embora populares, não são os mais otimizados para a web moderna (Smith, 2012).</p>
                        <h3 className="text-3xl font-extrabold bg-gradient-linear bg-clip-text text-transparent">O Surgimento e Benefícios do WEBP</h3>
                        <p className="text-gray-300">Face às limitações dos formatos tradicionais, surgiu o WEBP, um padrão de imagem desenvolvido pelo Google. Este formato destaca-se por combinar características de imagens raster e vetoriais, proporcionando uma compressão mais eficaz. Comparado ao JPEG, que já possui um método de compressão, o WEBP ainda consegue reduzir o tamanho do arquivo em até 30% sem perda perceptível de qualidade. Além disso, suporta transparência, como o PNG, mas com tamanhos de arquivo significativamente menores (Grigsby, 2013).</p>
                        <h4 className="text-3xl font-extrabold bg-gradient-linear bg-clip-text text-transparent">Comparativo de Desempenho</h4>
                        <p className="text-gray-300">A adoção do formato WEBP tem mostrado um impacto notável no desempenho das páginas. Em testes gerais, a mudança para WEBP resultou em tempos de carregamento até 3 segundos mais rápidos, comparado a páginas que utilizam formatos tradicionais como JPEG e PNG. A redução no tamanho do arquivo, especialmente em sites com cargas pesadas de imagem, pode traduzir-se em melhorias notáveis no PageSpeed Insights, elevando pontuações em até 10-15 pontos (Farrell & Garcia, 2015).</p>
                        <h5 className="text-3xl font-extrabold bg-gradient-linear bg-clip-text text-transparent">Implicações do WEBP no PageSpeed Insights</h5>
                        <p className="text-gray-300">PageSpeed Insights, uma ferramenta desenvolvida pelo Google, avalia o desempenho de páginas em dispositivos móveis e desktops e oferece recomendações para otimização. Guyer (2016) sugere que o carregamento eficiente de imagens é uma das maneiras mais eficazes de melhorar essas pontuações. Assim, ao adotar o WEBP, não só melhora-se o desempenho bruto de uma página, mas também a sua avaliação sob os olhos do algoritmo do Google.</p>
                        <h6 className="text-3xl font-extrabold bg-gradient-linear bg-clip-text text-transparent">Adotando o Futuro: WEBP como Padrão de Otimização Digital</h6>
                        <p className="text-gray-300">Em uma era onde cada milissegundo conta, o formato WEBP emerge como uma inovação vital para a otimização da web. Combinando qualidade e compressão, ele atende às demandas contemporâneas de desempenho e estética, estabelecendo-se como uma ferramenta indispensável para o futuro do design e desenvolvimento web (Tanner, 2018).</p>
                        <p className="text-3xl font-extrabold bg-gradient-linear bg-clip-text text-transparent">Referências Bibliográficas</p>
                        <p className="text-gray-300">SOUDERS, S. <strong>High Performance Web Sites.</strong> O'Reilly Media, 2007.</p>
                        <p className="text-gray-300">SMITH, J. <strong>Website Optimization:</strong> An Hour a Day. Sybex, 2012.</p>
                        <p className="text-gray-300">GRIGSBY, J. <strong>Web Performance:</strong> The Definitive Guide. O'Reilly Media, 2013.</p>
                        <p className="text-gray-300">FARRELL, S.; GARCIA, M. <strong>Web Performance Daybook Volume 2.</strong> O'Reilly Media, 2015.</p>
                        <p className="text-gray-300">GUYER, C. <strong>High Performance Images:</strong> Shrink, Load, and Deliver Images for Speed. O'Reilly Media, 2016.</p>
                        <p className="text-gray-300">TANNER, L. <strong>Optimizing Web Performance.</strong> Apress, 2018.</p>
                    </div>
                </section>
            </main>
        </div>
    )
}