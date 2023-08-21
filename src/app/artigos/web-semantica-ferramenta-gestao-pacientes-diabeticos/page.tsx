import {Metadata} from "next";
import {WithContext, Article} from 'schema-dts';
import Image from "next/image";

export const metadata: Metadata = {
    title: 'A web semântica como ferramenta facilitadora na gestão de pacientes diabéticos - Filipe Sales Araujo',
    description: 'Filipe Sales Araujo discute a influência da Web Semântica, utilizando padrões como RDF e OWL, na revolução do gerenciamento de doenças crônicas como o diabetes. Descubra como esta tecnologia pode simplificar a interpretação de dados dos pacientes, otimizar o tempo de trabalho dos profissionais de saúde e melhorar a comunicação entre especialistas e pacientes.',
    keywords: 'Filipe Sales Araujo, Web Semântica, RDF, OWL, gerenciamento de doenças crônicas, diabetes, tratamento personalizado, automação, comunicação em saúde, sistemas de informação, tomada de decisão em saúde',
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
        canonical: 'https://filipesalesaraujo.com/artigos/web-semantica-ferramenta-gestao-pacientes-diabeticos',
        languages: {
            'pt-BR': 'https://filipesalesaraujo.com/artigos/web-semantica-ferramenta-gestao-pacientes-diabeticos'
        }
    },
    category: 'technology',
    openGraph: {
        title: 'A web semântica como ferramenta facilitadora na gestão de pacientes diabéticos - Filipe Sales Araujo',
        description: 'Filipe Sales Araujo discute a influência da Web Semântica, utilizando padrões como RDF e OWL, na revolução do gerenciamento de doenças crônicas como o diabetes. Descubra como esta tecnologia pode simplificar a interpretação de dados dos pacientes, otimizar o tempo de trabalho dos profissionais de saúde e melhorar a comunicação entre especialistas e pacientes.',
        type: 'article',
        url: 'https://filipesalesaraujo.com/artigos/web-semantica-ferramenta-gestao-pacientes-diabeticos',
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
    "headline": 'A web semêntica como ferramenta facilitadora na gestão de pacientes diabéticos - Filipe Sales Araujo',
    "description": 'Filipe Sales Araujo discute a influência da Web Semântica, utilizando padrões como RDF e OWL, na revolução do gerenciamento de doenças crônicas como o diabetes. Descubra como esta tecnologia pode simplificar a interpretação de dados dos pacientes, otimizar o tempo de trabalho dos profissionais de saúde e melhorar a comunicação entre especialistas e pacientes.',
    "datePublished": "2023-08-12",
    "author": {
        "@type": "Person",
        "name": "Filipe Sales Araujo"
    },
    "articleBody": "O avanço da Web Semântica na manipulação e interpretação de dados na internet pode transformar profundamente o gerenciamento de doenças crônicas, como o diabetes, alterando a forma como os profissionais de saúde analisam e gerenciam os dados dos pacientes. Utilizando padrões como RDF (Resource Description Framework) e OWL (Ontology Web Language), essa tecnologia tem o potencial de oferecer uma visão unificada e facilitada dos dados dos pacientes para os profissionais de saúde. Ela permite a consolidação de informações de glicemia originadas de múltiplos sistemas e formatos, simplificando a tarefa de monitorar a evolução da doença e melhorando a qualidade dos tratamentos ao facilitar a tomada de decisões informadas (Berners-Lee, Hendler & Lassila, 2001; Shadbolt, Berners-Lee & Hall, 2006). A implementação da Web Semântica pode também auxiliar na personalização do tratamento do diabetes, permitindo ajustes de medicação e dieta com base nas tendências individuais de glicemia. Além disso, a implementação da Web Semântica no gerenciamento de dados de pacientes traz uma série de benefícios significativos, incluindo a otimização do tempo de trabalho dos profissionais de saúde. Ao automatizar tarefas manuais e redundantes de manipulação de dados, os profissionais de saúde podem se concentrar mais em atividades centrais de atendimento ao paciente (Hitzler, Krötzsch & Rudolph, 2009). Ainda, ao reduzir a carga de trabalho associada à coleta e análise de dados, a Web Semântica pode contribuir para a redução do estresse e do burnout entre os profissionais de saúde, melhorando a qualidade geral do atendimento. Outro aspecto relevante da Web Semântica é sua capacidade de melhorar a comunicação e a colaboração entre diferentes profissionais de saúde. Ao proporcionar uma visão unificada e coerente dos dados dos pacientes, a Web Semântica facilita a troca de informações entre diferentes especialistas, melhorando a coordenação do cuidado e a continuidade do tratamento (Bizer, Heath & Berners-Lee, 2009). Além disso, a Web Semântica pode facilitar a comunicação com os próprios pacientes, permitindo que eles compreendam melhor suas condições e participem ativamente de seus cuidados. Em comparação com os sistemas convencionais de informação, a Web Semântica apresenta uma vantagem significativa: a capacidade de acessar, integrar e interpretar informações de várias fontes de forma mais eficiente. Isso resulta em tomadas de decisões mais rápidas e informadas, impactando positivamente o tratamento dos pacientes e potencializando a eficácia dos sistemas de saúde.",
    "keywords": 'Filipe Sales Araujo, Web Semântica, RDF, OWL, gerenciamento de doenças crônicas, diabetes, tratamento personalizado, automação, comunicação em saúde, sistemas de informação, tomada de decisão em saúde'.split(', '),
};

import featuredImage from '../../../../public/images/web-semantica-ferramenta-gestao-pacientes-diabeticos.webp'

export default function WebSemanticaGestaoDiabeticos() {
    return (
        <div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
            <main>
                <section className="flex justify-center items-center">
                    <div className="max-w-[1140px] w-[100%] p-5 gap-5 flex flex-col">
                        <Image src={featuredImage} alt="A web semêntica como ferramenta facilitadora na gestão de pacientes diabéticos" className="rounded-xl" />
                        <h1 className="text-3xl text-white uppercase">A web semêntica como ferramenta facilitadora na gestão de pacientes diabéticos</h1>
                        <hr className="text-white"/>
                        <p className="text-white">O avanço da Web Semântica na manipulação e interpretação de dados na internet pode transformar profundamente o gerenciamento de doenças crônicas, como o diabetes, alterando a forma como os profissionais de saúde analisam e gerenciam os dados dos pacientes.</p>
                        <p className="text-white">Utilizando padrões como RDF (Resource Description Framework) e OWL (Ontology Web Language), essa tecnologia tem o potencial de oferecer uma visão unificada e facilitada dos dados dos pacientes para os profissionais de saúde. Ela permite a consolidação de informações de glicemia originadas de múltiplos sistemas e formatos, simplificando a tarefa de monitorar a evolução da doença e melhorando a qualidade dos tratamentos ao facilitar a tomada de decisões informadas (Berners-Lee, Hendler & Lassila, 2001; Shadbolt, Berners-Lee & Hall, 2006). A implementação da Web Semântica pode também auxiliar na personalização do tratamento do diabetes, permitindo ajustes de medicação e dieta com base nas tendências individuais de glicemia.</p>
                        <p className="text-white">Além disso, a implementação da Web Semântica no gerenciamento de dados de pacientes traz uma série de benefícios significativos, incluindo a otimização do tempo de trabalho dos profissionais de saúde. Ao automatizar tarefas manuais e redundantes de manipulação de dados, os profissionais de saúde podem se concentrar mais em atividades centrais de atendimento ao paciente (Hitzler, Krötzsch & Rudolph, 2009). Ainda, ao reduzir a carga de trabalho associada à coleta e análise de dados, a Web Semântica pode contribuir para a redução do estresse e do burnout entre os profissionais de saúde, melhorando a qualidade geral do atendimento.</p>
                        <p className="text-white">Outro aspecto relevante da Web Semântica é sua capacidade de melhorar a comunicação e a colaboração entre diferentes profissionais de saúde. Ao proporcionar uma visão unificada e coerente dos dados dos pacientes, a Web Semântica facilita a troca de informações entre diferentes especialistas, melhorando a coordenação do cuidado e a continuidade do tratamento (Bizer, Heath & Berners-Lee, 2009). Além disso, a Web Semântica pode facilitar a comunicação com os próprios pacientes, permitindo que eles compreendam melhor suas condições e participem ativamente de seus cuidados.</p>
                        <p className="text-white">Em comparação com os sistemas convencionais de informação, a Web Semântica apresenta uma vantagem significativa: a capacidade de acessar, integrar e interpretar informações de várias fontes de forma mais eficiente. Isso resulta em tomadas de decisões mais rápidas e informadas, impactando positivamente o tratamento dos pacientes e potencializando a eficácia dos sistemas de saúde. </p>
                        <hr className="text-white"/>
                        <p className="text-white">BERNERS-LEE, T.; HENDLER, J.; LASSILA, O. The Semantic Web. Scientific American, v. 284, n. 5, p. 34-43, 2001.</p>
                        <p className="text-white">SHADBOLT, N.; BERNERS-LEE, T.; HALL, W. The Semantic Web Revisited. IEEE Intelligent Systems, v. 21, n. 3, p. 96-101, 2006.</p>
                        <p className="text-white">HITZLER, P.; KRÖTZSCH, M.; RUDOLPH, S. Foundations of Semantic Web technologies. 1ª ed. Boca Raton: CRC Press, 2009.</p>
                        <p className="text-white">BIZER, C.; HEATH, T.; BERNERS-LEE, T. Linked Data - The Story So Far. International Journal on Semantic Web and Information Systems, v. 5, n. 3, p. 1-22, 2009.</p>
                    </div>
                </section>
            </main>
        </div>
    )
}