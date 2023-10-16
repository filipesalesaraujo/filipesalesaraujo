import {GetStaticProps, GetStaticPropsContext} from "next";
import Link from "next/link";
import Image from "next/image";

import moment from 'moment';
import 'moment/locale/pt-br';
import Head from "next/head";

export interface TPost {
    _embedded: any;
    title: {
        rendered: string
    };
    excerpt: {
        rendered: string
    };
    slug: string;
    id: string;
    date: string;
}

export interface IBlog {
    posts: TPost[]
    stickys: TPost[]
}

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext) => {

    const postsFetch = await fetch('https://painel.filipesalesaraujo.com/wp-json/wp/v2/posts?_embed=true&per_page=3&categories_exclude=5');
    const postsArr = await postsFetch.json();
    const posts = await postsArr

    const stickysFetch = await fetch('https://painel.filipesalesaraujo.com/wp-json/wp/v2/posts?_embed=true&sticky=true');
    const stickysArr = await stickysFetch.json()
    const stickys = await stickysArr

    return {
        props: {
            posts,
            stickys
        },
        revalidate: 10,
    }
}

export default function Home({posts, stickys}: IBlog) {

    return (
        <>
            <Head>
            <title>[filipesalesaraujo]</title>
            <meta name="description" content="Este portal é dedicado à Gestão Avançada de Dados e Análise, focando em tecnologias inovadoras em armazenamento, processamento e análise de dados. Explore a fundo tecnologias como bancos de dados NoSQL, aprendizado de máquina e inteligência artificial, além de estratégias de implementação. Descubra como essas soluções estão transformando indústrias como a automobilística, saúde, finanças e muito mais. Acesse artigos técnicos, estudos de caso e tutoriais para aprimorar seus conhecimentos e se manter atualizado sobre as últimas tendências em ciência de dados e tecnologia da informação."/>
            <meta name="keywords" content="gestão de dados, análise de dados, tecnologia da informação, NoSQL, aprendizado de máquina, inteligência artificial, automobilística, saúde, finanças, ciência de dados, inovação tecnológica, Big Data, armazenamento de dados, processamento de dados, estratégias de implementação, tendências tecnológicas"/>
            <meta name="author" content="Filipe Sales Araujo"/>
            <link rel="canonical" content="https://filipesalesaraujo.com/"/>
            <meta property="og:title" content="[filipesalesaraujo]"/>
            <meta property="og:description" content="Este portal é dedicado à Gestão Avançada de Dados e Análise, focando em tecnologias inovadoras em armazenamento, processamento e análise de dados. Explore a fundo tecnologias como bancos de dados NoSQL, aprendizado de máquina e inteligência artificial, além de estratégias de implementação. Descubra como essas soluções estão transformando indústrias como a automobilística, saúde, finanças e muito mais. Acesse artigos técnicos, estudos de caso e tutoriais para aprimorar seus conhecimentos e se manter atualizado sobre as últimas tendências em ciência de dados e tecnologia da informação."/>
            <meta property="og:image" content="https://filipesalesaraujo.com/_next/image?url=https%3A%2F%2Fpainel.filipesalesaraujo.com%2Fwp-content%2Fuploads%2F2023%2F09%2FJetBrains.png&w=1920&q=75"/>
            <meta property="og:url" content="https://filipesalesaraujo.com/"/>
            <meta property="og:type" content="article"/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:title" content="[filipesalesaraujo]"/>
            <meta name="twitter:description" content="Este portal é dedicado à Gestão Avançada de Dados e Análise, focando em tecnologias inovadoras em armazenamento, processamento e análise de dados. Explore a fundo tecnologias como bancos de dados NoSQL, aprendizado de máquina e inteligência artificial, além de estratégias de implementação. Descubra como essas soluções estão transformando indústrias como a automobilística, saúde, finanças e muito mais. Acesse artigos técnicos, estudos de caso e tutoriais para aprimorar seus conhecimentos e se manter atualizado sobre as últimas tendências em ciência de dados e tecnologia da informação."/>
            <meta name="twitter:image" content="https://filipesalesaraujo.com/_next/image?url=https%3A%2F%2Fpainel.filipesalesaraujo.com%2Fwp-content%2Fuploads%2F2023%2F09%2FJetBrains.png&w=1920&q=75"/>
            <meta name="google-adsense-account" content="ca-pub-5173897460796128"/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "http://schema.org",
                    "@type": "Organization",
                    "name": "[filipesalesaraujo]",
                    "url": "https://filipesalesaraujo.com/",
                    "logo": "http://www.seusite.com.br/logo.png",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+55-11-98458-3529",
                        "contactType": "customer support"
                    }
                })
            }}
            />
        </Head>
            <main className="flex items-center justify-center flex-col bg-home bg-cover bg-no-repeat bg-[center_-10px]">

            <section className="max-w-7xl px-5 py-10 flex flex-wrap gap-10 flex-col ">
                <h1 className="text-2xl lg:text-4xl text-center">
                    <span>Bem-vindo ao </span>
                    <strong className=" text-3xl lg:text-7xl block">[filipesalesaraujo]</strong>
                </h1>
                <div className="flex gap-5 items-start flex-col md:flex-row">
                    <div className="flex flex-col gap-5 items-start">
                        <p className="text-2xl">A análise rigorosa da ciência de dados aplicada ao desenvolvimento web foca nos mecanismos que influenciam o ranqueamento e a performance online. <strong>É este o tipo de conteúdo que se espera encontrar aqui:</strong> um olhar profundo sobre a eficácia de uma plataforma digital, determinada não só pelo design, mas também pela forma como os dados são processados, analisados e implementados. </p>
                        <p className="text-2xl">Ferramentas como PageSpeed Insights, Google Search Console e GA4 são indispensáveis para medir e otimizar a experiência do usuário. Estas, aliadas ao poder do Looker Studio, permitem uma visualização clara e concisa do comportamento do usuário, conduzindo a ajustes e melhorias contínuas. </p>
                        <p className="text-2xl">Além disso, o campo do SEO, apesar de seu caráter técnico, é abordado não apenas como uma ferramenta, mas como uma arte - a arte de tornar o conteúdo acessível, relevante e eficaz em um espaço digital saturado. Aqui, a dedicação é voltada para desvendar e compartilhar essas práticas, estabelecendo padrões de excelência para uma presença online robusta.
                        </p>
                    </div>
                </div>
            </section>


            <section className=" w-full flex items-center justify-center">
                <div className="max-w-7xl px-5 py-10 flex gap-5 flex-col lg:flex-row">

                    <div className="shadow-md bg-white w-[100%] rounded-2xl flex flex-col justify-between overflow-hidden bg-purple-gradient">
                        <div className="gap-5 p-5 flex flex-col justify-between h-[100%] items-start rounded-md overflow-hidden">
                            <div className="flex flex-col gap-5 ">
                                <h1 className="text-white font-bold text-lg">Next.js: A Revolução da Performance e Produtividade no Front-End</h1>
                                <p className="text-white text-lg">O Next.js, framework popular para React, otimiza a performance via Renderização no Lado do Servidor e geração estática de páginas. Ele promove desenvolvimento eficiente através de rotas simples e recarga automática, adaptando-se às demandas do projeto, desde blogs pessoais até plataformas empresariais.</p>
                            </div>
                            <Link href="/nextjs-revolucao-performance-produtividade-frontend" className="text-lg border-[1px] border-blue-600 px-5 py-1 rounded-3xl text-white bg-blue-600 hover:opacity-80 transition-opacity">Saiba mais</Link>
                        </div>
                    </div>

                    <div className="shadow-md bg-white rounded-2xl w-[100%] flex flex-col justify-between overflow-hidden bg-blue-gradient">
                        <div className="gap-5 p-5 flex flex-col justify-between h-[100%] items-start rounded-md overflow-hidden">
                            <div className="flex flex-col gap-5 ">
                                <h1 className="text-white font-bold text-lg">WordPress Headless: Reinventando o CMS para a Era Moderna</h1>
                                <p className="text-white text-lg">O WordPress Headless desvincula a gestão de conteúdo de sua apresentação tradicional, permitindo liberdade na criação de interfaces usando tecnologias variadas. Esta abordagem eleva a performance, oferece experiências fluidas ao usuário e proporciona adaptabilidade, integrando-se facilmente com outras plataformas e ferramentas.</p>
                            </div>
                            <Link href="/wordpress-headless-reinventando-cms-era-moderna" className="text-lg border-[1px] border-blue-600 px-5 py-1 rounded-3xl text-white bg-blue-600 hover:opacity-80 transition-opacity">Saiba mais</Link>
                        </div>
                    </div>

                </div>
            </section>

            <section className=" w-full flex items-center justify-center ">
                <div className="max-w-7xl px-5 py-10 flex gap-5 flex-col">

                    <div className="w-[100%] flex flex-col lg:flex-row justify-between gap-2 items-start">
                        <p className="text-3xl ">Artigos recentes</p>
                        <Link href="/blog/" className="text-lg border-[1px] border-blue-600 px-5 py-1 rounded-3xl text-white bg-blue-600 hover:opacity-80 transition-opacity">ver todos</Link>
                    </div>

                    <div className="flex gap-5 flex-col lg:flex-row">
                        {stickys.map((sticky) => (
                            <div key={sticky.id} className="shadow-md bg-white rounded-2xl w-[100%] flex flex-col lg:flex-row  justify-between overflow-hidden">
                                <Image className="w-full" width={398} height={223} src={sticky._embedded['wp:featuredmedia']['0'].source_url} alt={sticky.title.rendered}/>
                                <div
                                    className="gap-5 p-5 flex flex-col justify-between h-[100%] items-start rounded-md overflow-hidden">
                                    <div className="flex flex-col gap-5">
                                        <h1 className="font-bold text-lg">{sticky.title.rendered}</h1>
                                        <p className="text-lg">{sticky.excerpt?.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}</p>
                                    </div>
                                    <Link href={`/blog/${sticky.slug}`} className="text-lg border-[1px] border-blue-600 px-5 py-1 rounded-3xl text-white bg-blue-600 hover:opacity-80 transition-opacity">Ler mais</Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-5 flex-col lg:flex-row">
                        {posts.map((post) => (
                            <div key={post.id} className="shadow-md bg-white rounded-2xl w-[100%] flex flex-col justify-between overflow-hidden">
                                <Image className="w-full" width={398} height={223} src={post._embedded['wp:featuredmedia']['0'].source_url} alt={post.title.rendered}/>
                                <div
                                    className="gap-5 p-5 flex flex-col justify-between h-[100%] items-start rounded-md overflow-hidden">
                                    <div className="flex flex-col gap-5" >
                                        {moment(post.date).format('D [de] MMMM [de] YYYY')}
                                        <h1 className="font-bold text-lg">{post.title.rendered}</h1>
                                        <p className="text-lg">{post.excerpt?.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}</p>
                                    </div>
                                    <Link href={`/blog/${post.slug}`} className="text-lg border-[1px] border-blue-600 px-5 py-1 rounded-3xl text-white bg-blue-600 hover:opacity-80 transition-opacity">Ler mais</Link>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
        </>
    )
}
