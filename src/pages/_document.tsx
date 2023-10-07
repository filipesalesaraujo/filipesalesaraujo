import {Html, Head, Main, NextScript} from 'next/document'

import Link from "next/link";

import {FaRegEnvelope, FaGithubAlt, FaWhatsapp, FaLinkedinIn} from "react-icons/fa6";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>[filipesalesaraujo]</title>
                <meta name="description" content="Este portal é dedicado à Gestão Avançada de Dados e Análise, focando em tecnologias inovadoras em armazenamento, processamento e análise de dados. Explore a fundo tecnologias como bancos de dados NoSQL, aprendizado de máquina e inteligência artificial, além de estratégias de implementação. Descubra como essas soluções estão transformando indústrias como a automobilística, saúde, finanças e muito mais. Acesse artigos técnicos, estudos de caso e tutoriais para aprimorar seus conhecimentos e se manter atualizado sobre as últimas tendências em ciência de dados e tecnologia da informação."/>
                <meta name="keywords" content="gestão de dados, análise de dados, tecnologia da informação, NoSQL, aprendizado de máquina, inteligência artificial, automobilística, saúde, finanças, ciência de dados, inovação tecnológica, Big Data, armazenamento de dados, processamento de dados, estratégias de implementação, tendências tecnológicas"/>
                <meta name="author" content="Filipe Sales Araujo"/>
                <link rel="canonical" content="https://filipesalesaraujo.com/"/>
                <meta property="og:title" content="[filipesalesaraujo]"/>
                <meta property="og:description" content="Este portal é dedicado à Gestão Avançada de Dados e Análise, focando em tecnologias inovadoras em armazenamento, processamento e análise de dados. Explore a fundo tecnologias como bancos de dados NoSQL, aprendizado de máquina e inteligência artificial, além de estratégias de implementação. Descubra como essas soluções estão transformando indústrias como a automobilística, saúde, finanças e muito mais. Acesse artigos técnicos, estudos de caso e tutoriais para aprimorar seus conhecimentos e se manter atualizado sobre as últimas tendências em ciência de dados e tecnologia da informação."/>
                <meta property="og:image" content="URL da imagem de destaque"/>
                <meta property="og:url" content="https://filipesalesaraujo.com/"/>
                <meta property="og:type" content="article"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content="[filipesalesaraujo]"/>
                <meta name="twitter:description" content="Este portal é dedicado à Gestão Avançada de Dados e Análise, focando em tecnologias inovadoras em armazenamento, processamento e análise de dados. Explore a fundo tecnologias como bancos de dados NoSQL, aprendizado de máquina e inteligência artificial, além de estratégias de implementação. Descubra como essas soluções estão transformando indústrias como a automobilística, saúde, finanças e muito mais. Acesse artigos técnicos, estudos de caso e tutoriais para aprimorar seus conhecimentos e se manter atualizado sobre as últimas tendências em ciência de dados e tecnologia da informação."/>
                <meta name="twitter:image" content="URL da imagem de destaque"/>
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
                    <div className="p-5 max-w-[20%] w-[100%] rounded-br-3xl justify-start">
                        <Link href="/" className="text-white hover:text-white transition-colors text-2xl hidden lg:flex font-bold">[filipesalesaraujo]</Link>
                        <Link href="/" className="text-white hover:text-white transition-colors text-2xl lg:hidden flex font-bold">[ ]</Link>
                    </div>
                    <div className="p-5 lg:max-w-[80%] w-[100%] flex justify-end gap-5">
                        <Link href="/" className="text-gray-400 hover:text-white transition-colors text-2xl">Início</Link>
                        <Link href='/blog' className="text-gray-400 hover:text-white transition-colors text-2xl">Blog</Link>
                    </div>
                </div>
            </header>
            <Main/>
            <NextScript/>
            <footer className="flex items-center justify-center border-t-[1px] border-black justify-betwee bg-[#27282c]">
                <div className="max-w-7xl p-5 flex gap-5">
                    <a href="https://github.com/filipesalesaraujo" target="_blank" className="text-white hover:text-purple-500 transition-colors"><FaGithubAlt size={25}/></a>
                    <a href="mailto:filipesalesaraujo@gmail.com" className="text-white hover:text-red-500 transition-colors"><FaRegEnvelope size={25}/></a>
                    <a href="https://www.linkedin.com/in/filipesales21/" className="text-white hover:text-blue-500 transition-colors" target="_blank"><FaLinkedinIn size="25"/></a>
                </div>
            </footer>
            </body>
        </Html>
)
}
