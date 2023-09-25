import {Crimson_Pro} from 'next/font/google'

const crimsonPro = Crimson_Pro({subsets: ['latin']})

import i from '../../public/i.png'

import {GetStaticProps, GetStaticPropsContext} from "next";
import Link from "next/link";
import Image from "next/image";
import {TbBrandGoogleAnalytics, TbDeviceDesktopAnalytics} from "react-icons/tb";
import {SiPagespeedinsights} from "react-icons/si";
import {MdScreenSearchDesktop} from "react-icons/md";
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

            <section className="max-w-7xl p-5 flex flex-wrap gap-10 flex-col ">
                <h1 className="text-4xl text-center">
                    <span className={crimsonPro.className}>Oi! Meu nome é </span>
                    <strong className="text-7xl block">Filipe Sales Araujo</strong>
                </h1>

                <div className="flex gap-5 items-start flex-col md:flex-row">
                    <div className="flex md:w-1/2 flex-col gap-5">
                        <p className="text-lg">Com formação em <strong className="underline font-normal decoration-2 underline-offset-2">Educação Física</strong> e experiência em docência, tanto em ambientes escolares quanto em academias. Mergulhei no universo do <strong className="underline font-normal decoration-2 underline-offset-2">desenvolvimento web</strong> e estou aprofundando meus conhecimentos em <strong className="underline font-normal decoration-2 underline-offset-2">Ciência de Dados</strong> através de uma pós-graduação. Minha trajetória multifacetada me permite conectar diferentes mundos e trazer uma perspectiva única aos projetos. </p>
                        <p className="text-lg">No cenário digital atual, é essencial equilibrar inovação com confiabilidade. Por isso, orgulho-me de trabalhar com tecnologia de ponta, como o <strong className="underline font-normal decoration-2 underline-offset-2">Next.js</strong>, para proporcionar experiências web rápidas e dinâmicas. Ao mesmo tempo, valorizo a robustez e versatilidade de plataformas consolidadas, como o <strong className="underline font-normal decoration-2 underline-offset-2">WordPress</strong>. Esta combinação permite-me entregar soluções modernas, eficientes e confiáveis para qualquer desafio que venha pela frente.</p>
                    </div>
                    <Image className="flex md:w-1/2" src={i} alt="Quadrinhos de uma pessoa de óculos"/>
                </div>
            </section>

            <div className="bg-black w-[100%] flex justify-center items-center">
                <div className="max-w-7xl p-5 flex gap-5 flex-col w-[100%] text-white">
                    <div className="w-[100%] max-w-[100%] flex flex-col gap-5">
                        <h2 className="text-3xl ">Soluções</h2>

                        <div className="flex gap-5 justify-between flex-col lg:flex-row">
                            <div className="flex flex-col rounded-md border-white border-[1px] p-5 gap-5 items-center lg:w-1/4 justify-between">
                                <div className="text-3xl"><TbDeviceDesktopAnalytics/></div>
                                <p className="text-lg text-center">Google Analytics 4</p>
                            </div>

                            <div className="flex flex-col rounded-md border-white border-[1px] p-5 gap-5 items-center lg:w-1/4 justify-between">
                                <div className="text-3xl"><SiPagespeedinsights/></div>
                                <p className="text-lg text-center">PageSpeed Insights</p>
                            </div>

                            <div className="flex flex-col rounded-md border-white border-[1px] p-5 gap-5 items-center lg:w-1/4 justify-between">
                                <div className="text-3xl"><MdScreenSearchDesktop/></div>
                                <p className="text-lg text-center">Google Search Console</p>
                            </div>
                            <div className="flex flex-col rounded-md border-white border-[1px] p-5 gap-5 items-center lg:w-1/4 justify-between">
                                <div className="text-3xl"><FaLaptopCode/></div>
                                <p className="text-lg text-center">Desenvolvimento Web</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="max-w-7xl p-5 flex gap-5 flex-col">

                <div className="w-[100%] flex flex-col lg:flex-row justify-between gap-2 items-start">
                    <h3 className="text-3xl ">Artigos em destaque</h3>
                    <Link href="/artigos" className="underline-animation">ver todos</Link>
                </div>

                <div className="flex gap-5 flex-col lg:flex-row">
                    {posts.map((post) => (
                            <div key={post.id} className="border-[1px] border-black w-[100%] flex flex-col justify-between rounded-md overflow-hidden">
                                <Image width={1680} height={720} src={post._embedded['wp:featuredmedia']['0'].source_url} alt={post.title.rendered}/>
                                <div className="gap-5 p-5 flex flex-col justify-between h-[100%] items-start rounded-md overflow-hidden">
                                    <div className="flex flex-col gap-5 ">
                                        <h1 className="font-bold text-lg	">{post.title.rendered}</h1>
                                        <p className="text-lg">{post.excerpt?.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}</p>
                                    </div>
                                    <Link href={post.slug} className="text-lg border-[1px] border-black px-5 py-1 rounded-3xl text-white bg-black hover:bg-white hover:text-black transition-colors">Ler mais</Link>
                                </div>
                            </div>
                        )
                    )}
                </div>

            </div>
        </main>
    )
}
