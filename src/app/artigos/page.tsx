import {ItemList, WithContext} from "schema-dts";

import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: 'Artigos - Filipe Sales Araujo',
    description: 'Explore os artigos de Filipe Sales Araujo, abordando tecnologias e temas variados, desde aprendizado de máquina até web semântica. Mantenha-se atualizado com insights especializados.',
    keywords: 'Filipe Sales Araujo, artigos, aprendizado de máquina, web semântica, banco de dados NoSQL, gestão hospitalar, análises, insights, tecnologia',
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
        canonical: 'https://filipesalesaraujo.com/artigos',
        languages: {
            'pt-BR': 'https://filipesalesaraujo.com/artigos'
        }
    },
    category: 'technology',
    openGraph: {
        title: 'Artigos - Filipe Sales Araujo',
        description: 'Explore os artigos de Filipe Sales Araujo, abordando tecnologias e temas variados. Mantenha-se atualizado com insights especializados.',
        type: 'article',
        url: 'https://filipesalesaraujo.com/artigos',
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

const jsonLd: WithContext<ItemList> = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Artigos",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "url": "https://filipesalesaraujo.com/artigos/importancia-do-webp-desempenho-pages-pagespeed-insights"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "url": "https://filipesalesaraujo.com/artigos/concorrencia-distribuida-e-seus-desafios-em-sistemas-multiprocessadores"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "url": "https://filipesalesaraujo.com/artigos/sintaxe-semantica-linguagens-programacao"
        },
        {
            "@type": "ListItem",
            "position": 4,
            "url": "https://filipesalesaraujo.com/artigos/estrategias-implementacao-modelos-credito-banco-bhc-r-machine-learning"
        },
        {
            "@type": "ListItem",
            "position": 5,
            "url": "https://filipesalesaraujo.com/artigos/otimizacao-resolucao-problema-8-rainhas-inteligencia-artificial"
        },
        {
            "@type": "ListItem",
            "position": 6,
            "url": "https://filipesalesaraujo.com/artigos/aplicacao-aprendizado-maquina-reducao-desperdicio-alimentos-acacia-saude"
        },
        {
            "@type": "ListItem",
            "position": 7,
            "url": "https://filipesalesaraujo.com/artigos/implementacao-banco-dados-nosql-industria-automobilistica"
        },
        {
            "@type": "ListItem",
            "position": 8,
            "url": "https://filipesalesaraujo.com/artigos/implementacao-aprendizado-nao-supervisionado-segmentacao-clientes-banco-beta"
        },
        {
            "@type": "ListItem",
            "position": 9,
            "url": "https://filipesalesaraujo.com/artigos/web-semantica-ferramenta-gestao-pacientes-diabeticos"
        }
    ]
}

import concorrenciaDistribuidaESeusDesafiosEmSistemasMultiprocessadores from "../../../public/images/concorrencia-distribuida-e-seus-desafios-em-sistemas-multiprocessadores.webp";
import sintaxeSemanticaLinguagensProgramacao from "../../../public/images/sintaxe-semantica-linguagens-programacao.webp";
import estrategiasImplementacaoModelosCreditoBancoBhcRMachineLearning from "../../../public/images/estrategias-implementacao-modelos-credito-banco-bhc-r-machine-learning.webp";
import otimizacaoResolucaoProblema8RainhasInteligenciaArtificial from "../../../public/images/otimizacao-resolucao-problema-8-rainhas-inteligencia-artificial.webp";
import aplicacaoAprendizadoMaquinaReducaoDesperdicioAlimentosAcaciaSaude from "../../../public/images/aplicacao-aprendizado-maquina-reducao-desperdicio-alimentos-acacia-saude.webp";
import implementacaoBancoDadosNosqlIndustriaAutomobilistica from "../../../public/images/implementacao-banco-dados-nosql-industria-automobilistica.webp";
import implementacaoAprendizadoNaoSupervisionadoSegmentacaoClientesBancoBeta from "../../../public/images/implementacao-aprendizado-nao-supervisionado-segmentacao-clientes-banco-beta.webp";
import webSemanticaFerramentaGestaoPacientesDiabeticos from "../../../public/images/web-semantica-ferramenta-gestao-pacientes-diabeticos.webp";
import importanciaDoWebpDesempenhoPagesPagespeedInsights from "../../../public/images/importancia-do-webp-desempenho-pages-pagespeed-insights.webp";


export default function Artigos() {
    return (
        <div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
            <main>
                <section className="flex justify-center items-center">
                    <div className="max-w-[1140px] w-[100%] p-5 gap-5 flex flex-col">
                        <h1 className="text-3xl font-extrabold bg-gradient-linear bg-clip-text text-transparent">Artigos</h1>
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

                            <div className="border-[1px] border-gray-500 rounded-md p-3 xl:max-w-[32.1%] w-[100%] flex flex-col justify-between gap-5">
                                <div className="flex flex-col gap-5">
                                    <Image src={estrategiasImplementacaoModelosCreditoBancoBhcRMachineLearning} alt="Concorrência Distribuída e Seus Desafios em Sistemas Multiprocessadores" className="rounded-md"/>
                                    <Link href='/artigos/estrategias-implementacao-modelos-credito-banco-bhc-r-machine-learning' className="text-xl font-bold text-gray-300 hover:text-white transition-colors">Estratégias para Implementação de Modelos de Crédito Baseados em Programação R e Machine Learning no Banco BHC</Link>
                                    <p className="text-gray-300">Integração de R e Machine Learning para análise de crédito avançada. Random Forest e agregação de dados visam eficiência e precisão.</p>
                                </div>
                                <Link href='/artigos/estrategias-implementacao-modelos-credito-banco-bhc-r-machine-learning' className="bg-zinc-800 text-zinc-400 flex items-center justify-center p-1 rounded-md font-bold hover:text-zinc-300 hover:bg-zinc-700 transition-colors">Leia mais</Link>
                            </div>

                            <div className="border-[1px] border-gray-500 rounded-md p-3 xl:max-w-[32.1%] w-[100%] flex flex-col justify-between gap-5">
                                <div className="flex flex-col gap-5">
                                    <Image src={otimizacaoResolucaoProblema8RainhasInteligenciaArtificial} alt="Concorrência Distribuída e Seus Desafios em Sistemas Multiprocessadores" className="rounded-md"/>
                                    <Link href='/artigos/otimizacao-resolucao-problema-8-rainhas-inteligencia-artificial' className="text-xl font-bold text-gray-300 hover:text-white transition-colors">A Otimização na Resolução do Problema das 8 Rainhas via Inteligência Artificial</Link>
                                    <p className="text-gray-300">IA aprimora a resolução das 8 rainhas com abordagens como backtracking e algoritmos genéticos, destacando inovação em IA.</p>
                                </div>
                                <Link href='/artigos/otimizacao-resolucao-problema-8-rainhas-inteligencia-artificial' className="bg-zinc-800 text-zinc-400 flex items-center justify-center p-1 rounded-md font-bold hover:text-zinc-300 hover:bg-zinc-700 transition-colors">Leia mais</Link>
                            </div>

                            <div className="border-[1px] border-gray-500 rounded-md p-3 xl:max-w-[32.1%] w-[100%] flex flex-col justify-between gap-5">
                                <div className="flex flex-col gap-5">
                                    <Image src={aplicacaoAprendizadoMaquinaReducaoDesperdicioAlimentosAcaciaSaude} alt="Concorrência Distribuída e Seus Desafios em Sistemas Multiprocessadores" className="rounded-md"/>
                                    <Link href='/artigos/aplicacao-aprendizado-maquina-reducao-desperdicio-alimentos-acacia-saude' className="text-xl font-bold text-gray-300 hover:text-white transition-colors">Aplicação do Aprendizado de Máquina Supervisionado na Redução do Desperdício de Alimentos na Rede Hospitalar Acácia Saúde</Link>
                                    <p className="text-gray-300">Aplicação de Aprendizado de Máquina otimiza planejamento alimentar, reduzindo desperdício e promovendo sustentabilidade.</p>
                                </div>
                                <Link href='/artigos/aplicacao-aprendizado-maquina-reducao-desperdicio-alimentos-acacia-saude' className="bg-zinc-800 text-zinc-400 flex items-center justify-center p-1 rounded-md font-bold hover:text-zinc-300 hover:bg-zinc-700 transition-colors">Leia mais</Link>
                            </div>

                            <div className="border-[1px] border-gray-500 rounded-md p-3 xl:max-w-[32.1%] w-[100%] flex flex-col justify-between gap-5">
                                <div className="flex flex-col gap-5">
                                    <Image src={implementacaoBancoDadosNosqlIndustriaAutomobilistica} alt="Concorrência Distribuída e Seus Desafios em Sistemas Multiprocessadores" className="rounded-md"/>
                                    <Link href='/artigos/implementacao-banco-dados-nosql-industria-automobilistica' className="text-xl font-bold text-gray-300 hover:text-white transition-colors">Implementação de Banco de Dados NoSQL na Indústria Automobilística</Link>
                                    <p className="text-gray-300">MongoDB é escolha para gerir volumes variados de dados na indústria automobilística. Flexibilidade e escalabilidade são vantagens.</p>
                                </div>
                                <Link href='/artigos/implementacao-banco-dados-nosql-industria-automobilistica' className="bg-zinc-800 text-zinc-400 flex items-center justify-center p-1 rounded-md font-bold hover:text-zinc-300 hover:bg-zinc-700 transition-colors">Leia mais</Link>
                            </div>

                            <div className="border-[1px] border-gray-500 rounded-md p-3 xl:max-w-[32.1%] w-[100%] flex flex-col justify-between gap-5">
                                <div className="flex flex-col gap-5">
                                    <Image src={implementacaoAprendizadoNaoSupervisionadoSegmentacaoClientesBancoBeta} alt="Concorrência Distribuída e Seus Desafios em Sistemas Multiprocessadores" className="rounded-md"/>
                                    <Link href='/artigos/implementacao-aprendizado-nao-supervisionado-segmentacao-clientes-banco-beta' className="text-xl font-bold text-gray-300 hover:text-white transition-colors">Implementação do Aprendizado Não Supervisionado para Segmentação de Clientes no Banco Beta</Link>
                                    <p className="text-gray-300">Utilização de kNN para segmentar clientes, melhorar ofertas e personalizar serviços bancários.</p>
                                </div>
                                <Link href='/artigos/implementacao-aprendizado-nao-supervisionado-segmentacao-clientes-banco-beta' className="bg-zinc-800 text-zinc-400 flex items-center justify-center p-1 rounded-md font-bold hover:text-zinc-300 hover:bg-zinc-700 transition-colors">Leia mais</Link>
                            </div>

                            <div className="border-[1px] border-gray-500 rounded-md p-3 xl:max-w-[32.1%] w-[100%] flex flex-col justify-between gap-5">
                                <div className="flex flex-col gap-5">
                                    <Image src={webSemanticaFerramentaGestaoPacientesDiabeticos} alt="Concorrência Distribuída e Seus Desafios em Sistemas Multiprocessadores" className="rounded-md"/>
                                    <Link href='/artigos/web-semantica-ferramenta-gestao-pacientes-diabeticos' className="text-xl font-bold text-gray-300 hover:text-white transition-colors">A Web Semântica como Ferramenta Facilitadora na Gestão de Pacientes Diabéticos</Link>
                                    <p className="text-gray-300">Web Semântica revoluciona gestão de pacientes diabéticos, unificando dados e otimizando monitoramento, melhorando coordenação e decisões médicas.</p>
                                </div>
                                <Link href='/artigos/web-semantica-ferramenta-gestao-pacientes-diabeticos' className="bg-zinc-800 text-zinc-400 flex items-center justify-center p-1 rounded-md font-bold hover:text-zinc-300 hover:bg-zinc-700 transition-colors">Leia mais</Link>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}