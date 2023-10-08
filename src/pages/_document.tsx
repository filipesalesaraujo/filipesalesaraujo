import {Html, Head, Main, NextScript} from 'next/document'

import Link from "next/link";

import {FaRegEnvelope, FaGithubAlt, FaWhatsapp, FaLinkedinIn} from "react-icons/fa6";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>[filipesalesaraujo]</title>
                <meta name="description"
                      content="Este portal é dedicado à Gestão Avançada de Dados e Análise, focando em tecnologias inovadoras em armazenamento, processamento e análise de dados. Explore a fundo tecnologias como bancos de dados NoSQL, aprendizado de máquina e inteligência artificial, além de estratégias de implementação. Descubra como essas soluções estão transformando indústrias como a automobilística, saúde, finanças e muito mais. Acesse artigos técnicos, estudos de caso e tutoriais para aprimorar seus conhecimentos e se manter atualizado sobre as últimas tendências em ciência de dados e tecnologia da informação."/>
                <meta name="keywords"
                      content="gestão de dados, análise de dados, tecnologia da informação, NoSQL, aprendizado de máquina, inteligência artificial, automobilística, saúde, finanças, ciência de dados, inovação tecnológica, Big Data, armazenamento de dados, processamento de dados, estratégias de implementação, tendências tecnológicas"/>
                <meta name="author" content="Filipe Sales Araujo"/>
                <link rel="canonical" content="https://filipesalesaraujo.com/"/>
                <meta property="og:title" content="[filipesalesaraujo]"/>
                <meta property="og:description"
                      content="Este portal é dedicado à Gestão Avançada de Dados e Análise, focando em tecnologias inovadoras em armazenamento, processamento e análise de dados. Explore a fundo tecnologias como bancos de dados NoSQL, aprendizado de máquina e inteligência artificial, além de estratégias de implementação. Descubra como essas soluções estão transformando indústrias como a automobilística, saúde, finanças e muito mais. Acesse artigos técnicos, estudos de caso e tutoriais para aprimorar seus conhecimentos e se manter atualizado sobre as últimas tendências em ciência de dados e tecnologia da informação."/>
                <meta property="og:image" content="https://filipesalesaraujo.com/_next/image?url=https%3A%2F%2Fpainel.filipesalesaraujo.com%2Fwp-content%2Fuploads%2F2023%2F09%2FJetBrains.png&w=1920&q=75"/>
                <meta property="og:url" content="https://filipesalesaraujo.com/"/>
                <meta property="og:type" content="article"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content="[filipesalesaraujo]"/>
                <meta name="twitter:description"
                      content="Este portal é dedicado à Gestão Avançada de Dados e Análise, focando em tecnologias inovadoras em armazenamento, processamento e análise de dados. Explore a fundo tecnologias como bancos de dados NoSQL, aprendizado de máquina e inteligência artificial, além de estratégias de implementação. Descubra como essas soluções estão transformando indústrias como a automobilística, saúde, finanças e muito mais. Acesse artigos técnicos, estudos de caso e tutoriais para aprimorar seus conhecimentos e se manter atualizado sobre as últimas tendências em ciência de dados e tecnologia da informação."/>
                <meta name="twitter:image" content="https://filipesalesaraujo.com/_next/image?url=https%3A%2F%2Fpainel.filipesalesaraujo.com%2Fwp-content%2Fuploads%2F2023%2F09%2FJetBrains.png&w=1920&q=75"/>
                <meta name="google-adsense-account" content="ca-pub-5173897460796128"/>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
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
            <body>
            <header className="flex items-center justify-center bg-[#27282c]">
                <div className="max-w-7xl w-[100%] flex justify-between items-center">
                    <div className="p-5 lg:min-w-[243px] lg:max-w-[19%] w-[100%] justify-start bg-black">
                        <Link href="/"
                              className="text-white hover:text-white transition-colors text-xs lg:text-2xl font-bold bg-black">
                            [filipesalesaraujo]
                        </Link>
                    </div>
                    <div className="p-5 lg:max-w-[81%] w-[100%] flex justify-end items-center gap-5">
                        <Link href="/"
                              className="text-gray-400 hover:text-white transition-colors text-xs lg:text-2xl">Início</Link>
                        <Link href='/blog'
                              className="text-gray-400 hover:text-white transition-colors text-xs lg:text-2xl">Blog</Link>
                        <a href="mailto:filipesalesaraujo@gmail.com" target="_blank" className="text-gray-400 hover:text-white transition-colors text-xs lg:text-2xl">Contato</a>

                    </div>
                </div>
            </header>
            <Main/>
            <NextScript/>
            <footer
                className="flex items-center justify-center flex-col border-t-[1px] border-black justify-betwee bg-[#27282c]">
                <div className="max-w-7xl w-[100%] flex justify-between items-center flex-col lg:flex-row">
                    <div className="p-5 flex gap-5 w-full">
                        <a href="https://github.com/filipesalesaraujo" target="_blank"
                           className="text-white hover:text-purple-500 transition-colors"><FaGithubAlt size={25}/></a>
                        <a href="mailto:filipesalesaraujo@gmail.com"
                           className="text-white hover:text-red-500 transition-colors"><FaRegEnvelope size={25}/></a>
                        <a href="https://www.linkedin.com/in/filipesales21/"
                           className="text-white hover:text-blue-500 transition-colors" target="_blank"><FaLinkedinIn
                            size="25"/></a>
                    </div>
                    <div className="p-5 flex gap-5 lg:justify-end flex-col lg:flex-row w-full">
                        <Link className="text-gray-400 hover:text-white transition-colors" href="/politica-de-privacidade">Política de Privacidade</Link>
                        <Link className="text-gray-400 hover:text-white transition-colors" href="/termos-de-uso">Termos de Uso</Link>
                    </div>
                </div>
            </footer>
            </body>
        </Html>
    )
}
