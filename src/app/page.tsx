import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Filipe Sales Araujo',
    description: 'Filipe Sales Araujo é um profissional apaixonado com experiência em desenvolvimento de sites e aplicações web. Neste site, descubra seu portfólio, seus pensamentos e sua trajetória. Conecte-se e explore mais sobre Filipe Sales Araujo.',
    keywords: 'Filipe Sales Araujo, desenvolvedor web, portfólio, blog pessoal, front-end, projetos, carreira, artigos, nextjs, wordpress, tailwindcss, chakraui, contato',
}

export default function Home() {
    return (
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
    )
}
