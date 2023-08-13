import {ItemList, WithContext} from "schema-dts";

import Link from "next/link";

export const metadata = {
    title: 'Artigos - Filipe Sales Araujo',
    description: 'Explore os artigos de Filipe Sales Araujo, abordando tecnologias e temas variados, desde aprendizado de máquina até web semântica. Mantenha-se atualizado com insights especializados.',
    keywords: 'Filipe Sales Araujo, artigos, aprendizado de máquina, web semântica, banco de dados NoSQL, gestão hospitalar, análises, insights, tecnologia',
    robots: 'index,follow',
    openGraph: {
        title: 'Artigos - Filipe Sales Araujo',
        description: 'Explore os artigos de Filipe Sales Araujo, abordando tecnologias e temas variados. Mantenha-se atualizado com insights especializados.',
        type: 'article',
        url: 'https://filipesalesaraujo.com/artigos',
    }
}

const jsonLd: WithContext<ItemList> = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "url": "https://filipesalesaraujo.com/artigos/aplicacao-aprendizado-maquina-reducao-desperdicio-alimentos-acacia-saude"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "url": "https://filipesalesaraujo.com/artigos/implementacao-banco-dados-nosql-industria-automobilistica"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "url": "https://filipesalesaraujo.com/artigos/implementacao-aprendizado-nao-supervisionado-segmentacao-clientes-banco-beta"
        },
        {
            "@type": "ListItem",
            "position": 4,
            "url": "https://filipesalesaraujo.com/artigos/web-semantica-ferramenta-gestao-pacientes-diabeticos"
        }
    ]
}

export default function Artigos() {
    return (
        <div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
            <main>
                <section className="flex justify-center items-center">
                    <div className="max-w-[1140px] w-[100%] p-5 gap-5 flex flex-col">
                        <h1 className="text-3xl uppercase text-white">ARTIGOS</h1>
                        <div className="flex flex-col gap-5">
                            <Link href='/artigos/estrategias-implementacao-modelos-credito-banco-bhc-r-machine-learning' className="text-white hover:text-blue-500 transition-colors">Estratégias para implementar modelos de crédito no Banco BHC utilizando programação R e machine learning</Link>
                            <hr className="text-white "/>
                            <Link href='/artigos/otimizacao-resolucao-problema-8-rainhas-inteligencia-artificial' className="text-white hover:text-blue-500 transition-colors">A otimização na resolução do problema das 8 rainhas via inteligência artificial</Link>
                            <hr className="text-white "/>
                            <Link href='/artigos/aplicacao-aprendizado-maquina-reducao-desperdicio-alimentos-acacia-saude' className="text-white hover:text-blue-500 transition-colors">Aplicação do aprendizado de máquina supervisionado na redução do desperdício de alimentos na rede hospitalar Acácia Saúde</Link>
                            <hr className="text-white "/>
                            <Link href='/artigos/implementacao-banco-dados-nosql-industria-automobilistica' className="text-white hover:text-blue-500 transition-colors">Implementação de banco de dados NoSQL na indústria automobilística</Link>
                            <hr className="text-white"/>
                            <Link href='/artigos/implementacao-aprendizado-nao-supervisionado-segmentacao-clientes-banco-beta' className="text-white hover:text-blue-500 transition-colors">Implementação do aprendizado não supervisionado para segmentação de clientes no Banco Beta</Link>
                            <hr className="text-white"/>
                            <Link href='/artigos/web-semantica-ferramenta-gestao-pacientes-diabeticos' className="text-white hover:text-blue-500 transition-colors">A web semântica como ferramenta facilitadora na gestão de pacientes diabéticos</Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}