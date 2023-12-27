export default function Sobre() {
    return (
        <main className="flex items-center flex-col bg-black min-h-screen">
            <section className="max-w-7xl px-5 py-10 flex flex-wrap gap-10 flex-col ">
                <h1 className="text-4xl text-center text-white">
                    <span>Oi! Meu nome é </span>
                    <strong className="text-7xl block">Filipe Sales Araujo</strong>
                </h1>
                <div className="flex gap-5 items-start flex-col md:flex-row">
                    <div className="flex flex-col gap-5 items-start">
                        <p className="text-2xl text-white">Formado em Licenciatura em <strong>Educação Física</strong> e Bacharel em <strong>Ciência da Computação</strong>, minha trajetória acadêmica se enriquece a cada dia. Atualmente, estou me aprofundando ainda mais no universo da tecnologia e estou realizando uma pós-graduação em<strong> Ciência de Dados</strong>. Esta formação combinada permite que eu possa abordar desafios com uma perspectiva única, unindo a disciplina do corpo e mente com a precisão e inovação da computação.</p>
                        <p className="text-2xl text-white">Como desenvolvedor especializado em Next.js, destaco a ênfase na estilização das minhas aplicações, sendo o Tailwind CSS minha principal escolha para construção de interfaces. O Tailwind CSS proporciona uma abordagem utilitária eficaz, permitindo desenvolver estilos de maneira rápida e consistente. Além disso, mantenho conhecimento profundo em outras bibliotecas de estilização, como Chakra UI, Styled Components e CSS-in-JS, reconhecendo a importância da escolha da ferramenta certa para cada projeto. Essa versatilidade me permite adaptar meu estilo de codificação de acordo com as necessidades específicas de cada aplicação, garantindo ao mesmo tempo eficiência e estética em todos os projetos.</p>
                        <p className="text-2xl text-white">Além disso, ressalto o uso estratégico do WordPress Headless, aproveitando sua API para consumir dados de forma eficiente no Next.js. Essa abordagem oferece flexibilidade adicional ao desenvolvimento, permitindo a criação de interfaces dinâmicas e conteúdo atualizado em tempo real. Além do WordPress API, integro outras APIs relevantes, como as do Advanced Custom Fields (ACF), Contact Form 7 (CF7) e WooCommerce. Essa diversificação na integração de APIs enriquece a experiência do usuário, possibilitando a incorporação de funcionalidades específicas e a apresentação de conteúdos mais dinâmicos e interativos nas aplicações desenvolvidas.</p>
                        <p className="text-2xl text-white">No âmbito do backend, sou versátil nas linguagens PHP e Node.js. Utilizo PHP para integrar o WordPress Headless de maneira eficiente, proporcionando uma ponte entre o frontend e o backend. Node.js é empregado para construir APIs robustas e escaláveis.</p>
                        <p className="text-2xl text-white">Em relação aos bancos de dados, tenho experiência tanto com MySQL quanto com Firebase, escolhendo o MySQL para necessidades de banco de dados relacional e o Firebase para soluções mais orientadas ao desenvolvimento rápido e funcionalidades de tempo real. Essa abordagem integrada me permite criar aplicações web completas, garantindo uma experiência de usuário sólida e eficaz.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}