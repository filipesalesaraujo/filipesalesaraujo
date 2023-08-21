import {Metadata} from "next";
import {Person, WithContext} from "schema-dts";

import openGraphImage from "../../../../public/images/open-graph-image.webp";

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
            noimageindex: true,
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

export default function Home() {
    return (
        <div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
            <main>
                <section className="flex justify-center items-center">
                    <div className="max-w-[1140px] w-[100%] p-5 gap-5 flex flex-col">
                        <h1 className="text-3xl uppercase text-white">Sobre mim</h1>
                        <p className="text-white">Minha formação inicial foi em Licenciatura em Educação Física. Com o tempo, decidi redirecionar minha trajetória profissional, levando-me à Ciência da Computação. Atualmente, aprofundo meus estudos com uma pós-graduação em Ciência de Dados.</p>
                        <p className="text-white">No campo do desenvolvimento web, tenho uma particular apreciação pelo <strong>Next.js</strong> devido à sua performance e capacidade de construir aplicações web de alta qualidade, sejam elas estáticas ou dinâmicas. Também vejo grande valor no <strong>WordPress Headless</strong>, que combina o poder do CMS WordPress com a flexibilidade das ferramentas modernas de front-end. Esta abordagem permite experiências web mais rápidas e personalizadas. Paralelamente, utilizo <strong>Tailwind CSS</strong> por sua eficiência na criação de designs responsivos.</p>
                        <p className="text-white">Além destas ferramentas, é importante destacar o Vite, uma ferramenta de build de nova geração que oferece eficiência em projetos específicos. Reconheço, ainda, o valor do WordPress Clássico (Monolítico) para projetos que se beneficiam de sua estrutura integrada. Por fim, quando o foco é um sistema de design consistente, opto pelo Chakra UI, uma biblioteca que equilibra perfeitamente controle e conveniência.</p>
                    </div>
                </section>
            </main>
        </div>
    )
}
