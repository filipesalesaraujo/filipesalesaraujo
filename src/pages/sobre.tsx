export default function Sobre() {
    return (
        <main className="flex items-center justify-center flex-col">
            <section className="max-w-7xl px-5 py-10 flex flex-wrap gap-10 flex-col bg-about bg-cover bg-no-repeat bg-[center_-30px]">
                <h1 className="text-4xl text-center">
                    <span>Oi! Meu nome é </span>
                    <strong className="text-7xl block">Filipe Sales Araujo</strong>
                </h1>
                <div className="flex gap-5 items-start flex-col md:flex-row">
                    <div className="flex flex-col gap-5 items-start">
                        <p className="text-2xl">Formado em Licenciatura em Educação Física e Bacharel em <strong>Ciência
                            da Computação</strong>, minha trajetória acadêmica se enriquece a cada dia. Atualmente,
                            estou me aprofundando ainda mais no universo da tecnologia e estou realizando uma
                            pós-graduação em<strong> Ciência de Dados</strong>. Esta formação combinada permite que eu
                            possa abordar desafios com uma perspectiva única, unindo a disciplina do corpo e mente com a
                            precisão e inovação da computação.</p>
                        <p className="text-2xl">No desenvolvimento de sites, priorizo sempre a eficiência e a
                            otimização. É essencial para mim que a velocidade de carregamento das páginas esteja à
                            altura das melhores práticas sugeridas pelo <strong>PageSpeed Insights</strong>. Além disso,
                            tenho especial
                            atenção à correta indexação das páginas, usando ferramentas como o Google Search Console,
                            garantindo que o conteúdo seja facilmente encontrado e classificado. Não menos importante,
                            utilizo o GA4 para analisar o tráfego dos sites, compreendendo assim o comportamento dos
                            usuários e otimizando a experiência online.</p>
                        <p className="text-2xl">No âmbito técnico, escolhi usar o <strong>Next.js</strong> no front-end
                            devido à sua eficiência e adaptabilidade. Para o back-end, optei pelo <strong>WordPress
                                Headless</strong>, uma solução robusta e flexível que se integra perfeitamente ao
                            conjunto, proporcionando um desempenho superior e uma experiência de usuário mais fluida.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}