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
import importanciaDoWebpDesempenhoPagesPagespeedInsights from "../../public/images/importancia-do-webp-desempenho-pages-pagespeed-insights.webp";
import concorrenciaDistribuidaESeusDesafiosEmSistemasMultiprocessadores from "../../public/images/concorrencia-distribuida-e-seus-desafios-em-sistemas-multiprocessadores.webp";
import sintaxeSemanticaLinguagensProgramacao from "../../public/images/sintaxe-semantica-linguagens-programacao.webp";
import estrategiasImplementacaoModelosCreditoBancoBhcRMachineLearning from "../../public/images/estrategias-implementacao-modelos-credito-banco-bhc-r-machine-learning.webp";
import otimizacaoResolucaoProblema8RainhasInteligenciaArtificial from "../../public/images/otimizacao-resolucao-problema-8-rainhas-inteligencia-artificial.webp";
import aplicacaoAprendizadoMaquinaReducaoDesperdicioAlimentosAcaciaSaude from "../../public/images/aplicacao-aprendizado-maquina-reducao-desperdicio-alimentos-acacia-saude.webp";
import implementacaoBancoDadosNosqlIndustriaAutomobilistica from "../../public/images/implementacao-banco-dados-nosql-industria-automobilistica.webp";
import implementacaoAprendizadoNaoSupervisionadoSegmentacaoClientesBancoBeta from "../../public/images/implementacao-aprendizado-nao-supervisionado-segmentacao-clientes-banco-beta.webp";
import webSemanticaFerramentaGestaoPacientesDiabeticos from "../../public/images/web-semantica-ferramenta-gestao-pacientes-diabeticos.webp";

export default function Home() {
    return (
        <div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
            <main>
                <section className="flex justify-center items-center">
                    <div className="max-w-[1140px] w-[100%] p-5 gap-10 flex flex-col">

                        <div className="gap-5 flex flex-col">
                            <h1 className="text-3xl lg:text-6xl font-bold leading-none text-center flex flex-wrap justify-center gap-5">
                                <span className="bg-monitoramento-gradient text-transparent bg-clip-text">Monitoramento.</span>
                                <span className="bg-analise-gradient text-transparent bg-clip-text">Análise.</span>
                                <span className="bg-velocidade-gradient text-transparent bg-clip-text">Velocidade.</span>
                            </h1>
                            <h2 className="text-3xl font-extrabold bg-gradient-linear bg-clip-text text-transparent text-center">Otimização Web Avançada: Acelere e Melhore Sua Presença Online</h2>
                            <p className="text-gray-300">Você está enfrentando problemas de indexação? <strong>Resolvo isso com monitoramento via Search Console.</strong></p>
                            <p className="text-gray-300">Está insatisfeito com a velocidade do seu site? <strong>Minha especialização em PageSpeed Insights otimizará seu site para carregar como um raio.</strong></p>
                            <p className="text-gray-300">Procura uma presença online otimizada para SEO? <strong>Com minha expertise em Next.js, garanto desenvolvimento de ponta e flexibilidade inigualável.</strong></p>
                            <p className="text-gray-300">Buscando entender melhor o comportamento do seu público? <strong>Com o GA4, faço uma análise profunda e entendo exatamente o que seus usuários procuram.</strong></p>
                            <p className="text-gray-300">Precisa de um design web adaptável e rápido? <strong>Uso o Tailwind CSS para entregar designs responsivos e o WordPress Headless para inovação e adaptabilidade.</strong></p>
                            <p className="text-gray-300">Se você procura mais do que apenas soluções, mas uma revolução na sua presença online, <strong>vamos conversar</strong>. Juntos, podemos enfrentar e superar qualquer desafio digital.</p>

                            <a href="https://wa.me/5511984583529?text=Olá!%20Gostaria%20de%20entrar%20em%20contato%20com%20você." target="_blank" className="bg-green-500 bg-opacity-50 hover:bg-opacity-80 text-gray-300 flex items-center justify-center p-1 rounded-md font-bold transition-colors">Quer melhorar a performance do seu site? Clique aqui e saiba mais!</a>
                        </div>

                        <div className="flex justify-between">
                            <h1 className="text-3xl font-extrabold bg-gradient-linear bg-clip-text text-transparent">Artigos recentes</h1>
                            <Link className="text-gray-300 hover:text-gray-500 transition-colors" href='/artigos/'>Ver todos</Link>
                        </div>
                        <div className="flex flex-row flex-wrap gap-5">

                            <div className="border-[1px] border-gray-500 rounded-md p-3 xl:max-w-[32.1%] w-[100%] flex flex-col justify-between gap-5">
                                <div className="flex flex-col gap-5">
                                    <Image src={importanciaDoWebpDesempenhoPagesPagespeedInsights} alt="Concorrência Distribuída e Seus Desafios em Sistemas Multiprocessadores" className="rounded-md"/>
                                    <Link href='/artigos/importancia-do-webp-desempenho-pages-pagespeed-insights' className="text-xl font-bold text-gray-300 hover:text-white transition-colors">A Importância do WEBP para o Desempenho das Páginas no PageSpeed Insights</Link>
                                    <p className="text-gray-300">WEBP acelera sites com compressão superior, superando JPEG e PNG. É a escolha ideal para velocidade na web moderna.</p>
                                </div>

                                <Link href='/artigos/importancia-do-webp-desempenho-pages-pagespeed-insights' className="bg-zinc-800 text-zinc-400 flex items-center justify-center p-1 rounded-md font-bold hover:text-zinc-300 hover:bg-zinc-700 transition-colors">Leia mais</Link>
                            </div>

                            <div className="border-[1px] border-gray-500 rounded-md p-3 xl:max-w-[32.1%] w-[100%] flex flex-col justify-between gap-5">
                                <div className="flex flex-col gap-5">
                                    <Image src={concorrenciaDistribuidaESeusDesafiosEmSistemasMultiprocessadores} alt="Concorrência Distribuída e Seus Desafios em Sistemas Multiprocessadores" className="rounded-md"/>
                                    <Link href='/artigos/concorrencia-distribuida-e-seus-desafios-em-sistemas-multiprocessadores' className="text-xl font-bold text-gray-300 hover:text-white transition-colors">Concorrência Distribuída e Seus Desafios em Sistemas Multiprocessadores</Link>
                                    <p className="text-gray-300">Sistemas multiprocessadores enfrentam desafios como race conditions e DeadLocks. Compreender esses problemas é crucial para a eficiência.</p>
                                </div>

                                <Link href='/artigos/concorrencia-distribuida-e-seus-desafios-em-sistemas-multiprocessadores' className="bg-zinc-800 text-zinc-400 flex items-center justify-center p-1 rounded-md font-bold hover:text-zinc-300 hover:bg-zinc-700 transition-colors">Leia mais</Link>
                            </div>

                            <div className="border-[1px] border-gray-500 rounded-md p-3 xl:max-w-[32.1%] w-[100%] flex flex-col justify-between gap-5">
                                <div className="flex flex-col gap-5">
                                    <Image src={sintaxeSemanticaLinguagensProgramacao} alt="Concorrência Distribuída e Seus Desafios em Sistemas Multiprocessadores" className="rounded-md"/>
                                    <Link href='/artigos/sintaxe-semantica-linguagens-programacao' className="text-xl font-bold text-gray-300 hover:text-white transition-colors">Sintaxe e Semântica em Linguagens de Programação: Entendendo a Estrutura e o Significado no Código</Link>
                                    <p className="text-gray-300">Sintaxe e semântica são fundamentais na programação. Erros sintáticos e semânticos impactam execução e comportamento do código.</p>
                                </div>
                                <Link href='/artigos/sintaxe-semantica-linguagens-programacao' className="bg-zinc-800 text-zinc-400 flex items-center justify-center p-1 rounded-md font-bold hover:text-zinc-300 hover:bg-zinc-700 transition-colors">Leia mais</Link>
                            </div>

                        </div>

                    </div>
                </section>
            </main>
        </div>
    )
}
