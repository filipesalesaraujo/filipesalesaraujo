import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Artigos - Filipe Sales Araujo',
    description: 'Explore os artigos de Filipe Sales Araujo, abordando tecnologias e temas como aprendizado de máquina, web semântica, bancos de dados NoSQL e gestão hospitalar. Mantenha-se atualizado com insights especializados.',
    keywords: 'Filipe Sales Araujo, artigos, aprendizado de máquina, web semântica, banco de dados NoSQL, gestão hospitalar, análises, insights, tecnologia',
}

export default function Artigos() {
    return (
        <main>
            <section className="flex justify-center items-center">
                <div className="max-w-[1140px] w-[100%] p-5 gap-5 flex flex-col">
                    <h1 className="text-3xl uppercase text-white">ARTIGOS</h1>
                    <div className="flex flex-col gap-5">
                        <Link href='/artigos/aplicacao-aprendizado-maquina-reducao-desperdicio-alimentos-acacia-saude' className="text-white hover:text-blue-500 transition-colors">Aplicação do aprendizado de máquina supervisionado na redução do desperdício de alimentos na rede hospitalar Acácia Saúde</Link>
                        <hr className="text-white "/>
                        <Link href='/artigos/implementacao-banco-dados-nosql-industria-automobilistica' className="text-white hover:text-blue-500 transition-colors">Implementação de banco de dados NoSQL na indústria automobilística</Link>
                        <hr className="text-white"/>
                        <Link href='/artigos/implementacao-aprendizado-nao-supervisionado-segmentacao-clientes-banco-beta' className="text-white hover:text-blue-500 transition-colors">Implementação do aprendizado não supervisionado para segmentação de clientes no banco Beta</Link>
                        <hr className="text-white"/>
                        <Link href='/artigos/web-semantica-ferramenta-gestao-pacientes-diabeticos' className="text-white hover:text-blue-500 transition-colors">A web semântica como ferramenta facilitadora na gestão de pacientes diabéticos</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}