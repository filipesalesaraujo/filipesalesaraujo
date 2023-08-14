import {Metadata} from "next";
import {WithContext, Article} from 'schema-dts';
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Aplicação do aprendizado de máquina supervisionado na redução do desperdício de alimentos na rede hospitalar Acácia Saúde - Filipe Sales Araujo',
    description: 'A dissertação aborda as metodologias de aprendizado de máquina supervisionado aplicadas para reduzir o desperdício de alimentos na rede hospitalar Acácia Saúde.',
    keywords: 'Filipe Sales Araujo, Aprendizado de Máquina Supervisionado, Redução de Desperdício de Alimentos, Rede Hospitalar, Acácia Saúde, Big Data, Inteligência Artificial',
    robots: 'index,follow',
    openGraph: {
        title: 'Aplicação do aprendizado de máquina supervisionado na redução do desperdício de alimentos na rede hospitalar Acácia Saúde - Filipe Sales Araujo',
        description: 'A dissertação aborda as metodologias de aprendizado de máquina supervisionado aplicadas para reduzir o desperdício de alimentos na rede hospitalar Acácia Saúde.',
        type: 'article',
        url: 'https://filipesalesaraujo.com/artigos/aplicacao-aprendizado-maquina-reducao-desperdicio-alimentos-acacia-saude',
    }
}

const jsonLd: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": 'Aplicação do aprendizado de máquina supervisionado na redução do desperdício de alimentos na rede hospitalar Acácia Saúde',
    "description": 'A dissertação aborda as metodologias de aprendizado de máquina supervisionado aplicadas para reduzir o desperdício de alimentos na rede hospitalar Acácia Saúde.',
    "datePublished": "2023-08-12",
    "author": {
        "@type": "Person",
        "name": "Filipe Sales Araujo"
    },
    "articleBody": "O desperdício de alimentos é um problema global que atinge diversos setores, inclusive a área da saúde. A rede hospitalar Acácia Saúde, com mais de 100 unidades, enfrenta esse desafio, gerando impactos financeiros e ambientais negativos. Diante disso, foi proposto o objetivo de encontrar uma solução para essa problemática a partir do uso do aprendizado de máquina supervisionado e ferramentas de Big Data e inteligência artificial (IA). Esta dissertação abordará as metodologias de aprendizado de máquina supervisionado aplicadas na redução do desperdício de alimentos na rede hospitalar Acácia Saúde. O aprendizado de máquina supervisionado é um método no qual os algoritmos são treinados com dados de entrada e saída rotulados, permitindo que a máquina aprenda a partir dessas informações e faça previsões futuras (Alpaydin, 2020). Diversas técnicas podem ser aplicadas nesse contexto, como a regressão linear, árvores de decisão, máquinas de vetor de suporte (SVM) e redes neurais artificiais (Russell & Norvig, 2016). Os dados coletados devem ser tratados e formatados conforme as necessidades do algoritmo a ser utilizado. Em seguida, divide-se o conjunto de dados em treinamento e teste. O primeiro é utilizado para treinar o algoritmo, enquanto o segundo serve para avaliar o desempenho do modelo (Hastie, Tibshirani & Friedman, 2009). Com o modelo de aprendizado de máquina supervisionado ajustado, ele pode ser implementado na rede hospitalar Acácia Saúde. Nesse contexto, a ferramenta de Big Data e IA auxiliará na tomada de decisões relacionadas ao planejamento e distribuição de alimentos, evitando o desperdício. Além disso, o modelo deve ser monitorado e atualizado conforme a necessidade. Após treinar o modelo, é necessário avaliar seu desempenho por meio de métricas como precisão, revocação e F1-score (Sokolova & Lapalme, 2009). Caso o desempenho não seja satisfatório, ajustes podem ser feitos no modelo e nos dados até alcançar resultados mais precisos. O aprendizado de máquina supervisionado pode ser uma solução eficaz para reduzir o desperdício de alimentos na rede hospitalar Acácia Saúde. Com a aplicação de técnicas adequadas, coleta e análise de dados, tratamento e treinamento dos algoritmos, avaliação do desempenho e ajustes, e a implementação e monitoramento do modelo, é possível otimizar a distribuição e planejamento de alimentos, contribuindo para a sustentabilidade e eficiência do setor hospitalar.",
    "keywords": 'Aprendizado de Máquina Supervisionado, Redução de Desperdício de Alimentos, Rede Hospitalar, Acácia Saúde, Big Data, Inteligência Artificial',
};

import featuredImage from "../../../../public/images/aplicacao-aprendizado-maquina-reducao-desperdicio-alimentos-acacia-saude.webp";

export default function AprendizadoReducaoDesperdicioAcacia() {
    return (
        <div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
            <main>
                <section className="flex justify-center items-center">
                    <div className="max-w-[1140px] w-[100%] p-5 gap-5 flex flex-col">
                        <Image src={featuredImage} alt="Aplicação do aprendizado de máquina supervisionado na redução do desperdício de alimentos na rede hospitalar Acácia Saúde" className="rounded-xl" />
                        <h1 className="text-3xl text-white uppercase">Aplicação do aprendizado de máquina supervisionado na redução do desperdício de alimentos na rede hospitalar Acácia Saúde</h1>
                        <hr className="text-white"/>
                        <p className="text-white">O desperdício de alimentos é um problema global que atinge diversos setores, inclusive a área da saúde. A rede hospitalar Acácia Saúde, com mais de 100 unidades, enfrenta esse desafio, gerando impactos financeiros e ambientais negativos. Diante disso, foi proposto o objetivo de encontrar uma solução para essa problemática a partir do uso do aprendizado de máquina supervisionado e ferramentas de Big Data e inteligência artificial (IA). Esta dissertação abordará as metodologias de aprendizado de máquina supervisionado aplicadas na redução do desperdício de alimentos na rede hospitalar Acácia Saúde. </p>
                        <p className="text-white">O aprendizado de máquina supervisionado é um método no qual os algoritmos são treinados com dados de entrada e saída rotulados, permitindo que a máquina aprenda a partir dessas informações e faça previsões futuras (Alpaydin, 2020). Diversas técnicas podem ser aplicadas nesse contexto, como a regressão linear, árvores de decisão, máquinas de vetor de suporte (SVM) e redes neurais artificiais (Russell & Norvig, 2016).</p>
                        <p className="text-white">Os dados coletados devem ser tratados e formatados conforme as necessidades do algoritmo a ser utilizado. Em seguida, divide-se o conjunto de dados em treinamento e teste. O primeiro é utilizado para treinar o algoritmo, enquanto o segundo serve para avaliar o desempenho do modelo (Hastie, Tibshirani & Friedman, 2009).</p>
                        <p className="text-white">Com o modelo de aprendizado de máquina supervisionado ajustado, ele pode ser implementado na rede hospitalar Acácia Saúde. Nesse contexto, a ferramenta de Big Data e IA auxiliará na tomada de decisões relacionadas ao planejamento e distribuição de alimentos, evitando o desperdício. Além disso, o modelo deve ser monitorado e atualizado conforme a necessidade.</p>
                        <p className="text-white">Após treinar o modelo, é necessário avaliar seu desempenho por meio de métricas como precisão, revocação e F1-score (Sokolova & Lapalme, 2009). Caso o desempenho não seja satisfatório, ajustes podem ser feitos no modelo e nos dados até alcançar resultados mais precisos.</p>
                        <p className="text-white">O aprendizado de máquina supervisionado pode ser uma solução eficaz para reduzir o desperdício de alimentos na rede hospitalar Acácia Saúde. Com a aplicação de técnicas adequadas, coleta e análise de dados, tratamento e treinamento dos algoritmos, avaliação do desempenho e ajustes, e a implementação e monitoramento do modelo, é possível otimizar a distribuição e planejamento de alimentos, contribuindo para a sustentabilidade e eficiência do setor hospitalar. </p>
                        <hr className="text-white"/>
                        <p className="text-white">ALPAYDIN, E. Introduction to Machine Learning. 3. ed. Cambridge, MA: MIT Press, 2020.</p>
                        <p className="text-white">HASTIE, T.; TIBSHIRANI, R.; FRIEDMAN, J. The Elements of Statistical Learning: Data Mining, Inference, and Prediction. 2. ed. New York: Springer, 2009.</p>
                        <p className="text-white">KELLEHER, J. D.; MAC NAMEE, B.; D&apos;ARCY, A. Fundamentals of Machine Learning for Predictive Data Analytics: Algorithms, Worked Examples, and Case Studies. Cambridge, MA: MIT Press, 2015.</p>
                        <p className="text-white">RUSSELL, S. J.; NORVIG, P. Artificial Intelligence: A Modern Approach. 3. ed. Upper Saddle River, NJ: Prentice Hall, 2016.</p>
                        <p className="text-white">SOKOLOVA, M.; LAPALME, G. A systematic analysis of performance measures for classification tasks. Information Processing & Management, v. 45, n. 4, p. 427-437, 2009.</p>
                    </div>
                </section>
            </main>
        </div>
    )
}