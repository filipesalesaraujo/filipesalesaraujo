import {GetStaticProps, GetStaticPropsContext} from "next";
import Link from "next/link";
import Image from "next/image";
import {FaLaptopCode} from "react-icons/fa";

export interface TPost {
    _embedded: any;
    title: {
        rendered: string
    };
    excerpt: {
        rendered: string
    };
    slug: string;
    id: string;
}

export interface IBlog {
    posts: TPost[]
}

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext) => {

    const postsFetch = await fetch(`https://painel.filipesalesaraujo.com/wp-json/wp/v2/posts?_embed=true&per_page=3`)
    const postsArr = await postsFetch.json()
    const posts = await postsArr

    return {
        props: {
            posts,
        },
        revalidate: 10,
    }
}

export default function Home({posts}: IBlog) {


    return (
        <main className="flex items-center justify-center flex-col">

            <section className="max-w-7xl px-5 py-10 flex flex-wrap gap-10 flex-col ">
                <h1 className="text-4xl text-center">
                    <span>Oi! Meu nome é </span>
                    <strong className="text-7xl block">Filipe Sales Araujo</strong>
                </h1>
                <div className="flex gap-5 items-start flex-col md:flex-row">
                    <div className="flex flex-col gap-5 items-start">
                        <p className="text-2xl">Formado em Licenciatura em Educação Física e Bacharel em <strong>Ciência
                            da
                            Computação</strong>, minha trajetória acadêmica se enriquece a cada dia. Atualmente, estou
                            me
                            aprofundando ainda mais no universo da tecnologia e estou realizando uma pós-graduação em
                            <strong> Ciência de Dados</strong>. Esta formação combinada permite que eu possa abordar
                            desafios com uma
                            perspectiva única, unindo a disciplina do corpo e mente com a precisão e inovação da
                            computação.</p>
                        <p className="text-2xl">No desenvolvimento de sites, priorizo sempre a eficiência e a
                            otimização.
                            É essencial para mim que a velocidade de carregamento das páginas esteja à altura das
                            melhores práticas sugeridas pelo PageSpeed Insights. Além disso, tenho especial atenção à
                            correta indexação das páginas, usando ferramentas como o Google Search Console, garantindo
                            que o conteúdo seja facilmente encontrado e classificado. Não menos importante, utilizo o
                            GA4 para analisar o tráfego dos sites, compreendendo assim o comportamento dos usuários e
                            otimizando a experiência online.</p>
                        <p className="text-2xl">No âmbito técnico, escolhi usar o <strong>Next.js</strong> no front-end devido à sua
                            eficiência e adaptabilidade. Para o back-end, optei pelo <strong>WordPress Headless</strong>, uma solução
                            robusta e flexível que se integra perfeitamente ao conjunto, proporcionando um desempenho
                            superior e uma experiência de usuário mais fluida.</p>
                    </div>
                </div>
            </section>


            <section className=" w-full flex items-center justify-center">
                <div className="max-w-7xl px-5 py-10 flex gap-5 flex-row">

                    <div
                        className="bg-white border-[1px] border-gray-300 w-[100%] flex flex-col justify-between overflow-hidden">
                        <div
                            className="gap-5 p-5 flex flex-col justify-between h-[100%] items-start rounded-md overflow-hidden">
                            <div className="flex flex-col gap-5 ">
                                <h1 className="font-bold text-lg">Next.js: A Revolução da Performance e Produtividade no
                                    Front-End</h1>
                                <p className="text-lg">O Next.js, framework popular para React, otimiza a performance
                                    via Renderização no Lado do Servidor e geração estática de páginas. Ele promove
                                    desenvolvimento eficiente através de rotas simples e recarga automática,
                                    adaptando-se às demandas do projeto, desde blogs pessoais até plataformas
                                    empresariais.</p>
                            </div>
                            <Link href="/nextjs-revolucao-performance-produtividade-frontend"
                                  className="text-lg border-[1px] border-blue-500 px-5 py-1 rounded-3xl text-white bg-blue-500 hover:opacity-80 transition-opacity">Saiba
                                mais</Link>
                        </div>
                    </div>

                    <div
                        className="bg-white border-[1px] border-gray-300 w-[100%] flex flex-col justify-between overflow-hidden">
                        <div
                            className="gap-5 p-5 flex flex-col justify-between h-[100%] items-start rounded-md overflow-hidden">
                            <div className="flex flex-col gap-5 ">
                                <h1 className="font-bold text-lg">WordPress Headless: Reinventando o CMS para a Era Moderna</h1>
                                <p className="text-lg">O WordPress Headless desvincula a gestão de conteúdo de sua
                                    apresentação tradicional, permitindo liberdade na criação de interfaces usando
                                    tecnologias variadas. Esta abordagem eleva a performance, oferece experiências
                                    fluidas ao usuário e proporciona adaptabilidade, integrando-se facilmente com outras
                                    plataformas e ferramentas.</p>
                            </div>
                            <Link href="/wordpress-headless-reinventando-cms-era-moderna"
                                  className="text-lg border-[1px] border-blue-500 px-5 py-1 rounded-3xl text-white bg-blue-500 hover:opacity-80 transition-opacity">Saiba
                                mais</Link>
                        </div>
                    </div>

                </div>
            </section>

            <section className=" w-full flex items-center justify-center">
                <div className="max-w-7xl px-5 py-10 flex gap-5 flex-col">

                    <div className="w-[100%] flex flex-col lg:flex-row justify-between gap-2 items-start">
                        <h3 className="text-3xl ">Artigos recentes</h3>
                        <Link href="/blog/"
                              className="text-lg border-[1px] border-blue-500 px-5 py-1 rounded-3xl text-white bg-blue-500 hover:opacity-80 transition-opacity">ver
                            todos</Link>
                    </div>

                    <div className="flex gap-5 flex-col lg:flex-row">
                        {posts.map((post) => (
                                <div key={post.id}
                                     className="bg-white border-[1px] border-gray-300 w-[100%] flex flex-col justify-between overflow-hidden">
                                    <Image width={1680} height={720}
                                           src={post._embedded['wp:featuredmedia']['0'].source_url}
                                           alt={post.title.rendered}/>
                                    <div
                                        className="gap-5 p-5 flex flex-col justify-between h-[100%] items-start rounded-md overflow-hidden">
                                        <div className="flex flex-col gap-5 ">
                                            <h1 className="font-bold text-lg	">{post.title.rendered}</h1>
                                            <p className="text-lg">{post.excerpt?.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}</p>
                                        </div>
                                        <Link href={`/blog/${post.slug}`}
                                              className="text-lg border-[1px] border-blue-500 px-5 py-1 rounded-3xl text-white bg-blue-500 hover:opacity-80 transition-opacity">Ler
                                            mais</Link>
                                    </div>
                                </div>
                            )
                        )}
                    </div>

                </div>
            </section>

        </main>
    )
}
