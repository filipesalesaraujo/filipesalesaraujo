import {Crimson_Pro} from 'next/font/google'

const crimsonPro = Crimson_Pro({subsets: ['latin']})

import i from '../../public/i.png'
import ga4 from '../../public/ga4.png'
import pagespeed from '../../public/pagespeed.png'
import searchconsole from '../../public/searchconsole.png'
import devweb from '../../public/devweb.png'

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

            <section className="max-w-7xl p-5 flex flex-wrap gap-10 flex-col ">
                <h1 className="text-4xl text-center">
                    <span className={crimsonPro.className}>Oi! Meu nome é </span>
                    <strong className="text-7xl block">Filipe Sales Araujo</strong>
                </h1>

                <div className="flex gap-5 items-start flex-col md:flex-row">
                    <div className="flex flex-col gap-5 items-start">
                        <p className="text-lg">Desenvolvo websites que se destacam pela sua <strong className="bg-marca-texto px-1">velocidade surpreendente, design responsivo e modernidade</strong>. Cada projeto é meticulosamente otimizado para garantir que os usuários tenham a melhor experiência possível, independentemente do dispositivo que estejam usando.</p>
                        <p className="text-lg">Meus sites não apenas impressionam visualmente, mas também em termos de desempenho. Eles consistentemente <strong className="bg-marca-texto px-1">alcançam pontuações perfeitas no PageSpeed Insights</strong>, refletindo o comprometimento com a excelência técnica. Além disso, faço um monitoramento contínuo através do Google Search Console, garantindo que todos os links sejam <strong className="bg-marca-texto px-1">corretamente indexados</strong>. Complementando essa análise, utilizo o Google Analytics 4 (GA4) para rastrear e entender o comportamento das visitas, proporcionando insights valiosos sobre a interação dos usuários com o conteúdo.</p>
                        <p className="text-lg">Opto por desenvolver utilizando o <strong className="bg-marca-texto px-1">Next.js</strong>, uma das frameworks mais avançadas do mercado. A decisão de utilizar o Next.js não é apenas uma escolha técnica, mas também estratégica. Ele possibilita que os sites sejam <strong className="bg-marca-texto px-1">altamente otimizados</strong>, facilmente escaláveis e com capacidade de integração a diversas ferramentas e plataformas, ampliando assim o potencial de qualquer projeto na web.</p>
                        <a href="https://wa.me/5511984583529" target="_blank" className={`uppercase text-xl px-5 py-1 font-medium text-black bg-marca-texto hover:text-black transition-colors `}>QUER UM SITE VELOZ, RESPONSIVO E MODERNO? <strong className="font-black">CLIQUE AQUI</strong> E VAMOS TRANSFORMAR SUA PRESENÇA ONLINE!</a>
                    </div>
                </div>
            </section>

            <section className="bg-black w-[100%] flex justify-center items-center">
                <div className="max-w-7xl p-5 flex gap-5 flex-col w-[100%] text-white">
                    <div className="w-[100%] max-w-[100%] flex flex-col gap-5">
                        <h2 className="text-3xl ">Soluções</h2>

                        <div className="flex gap-5 justify-between flex-col lg:flex-row">
                            <div className="flex flex-col border-white border-[1px] items-center lg:w-1/4 justify-between">
                                <div className="text-3xl"><Image src={ga4} alt="Desenho de uma pessoa apresentado graficos"/></div>
                                <div className="p-5 flex flex-col gap-5">
                                    <p className="text-lg text-center  ">Google Analytics 4</p>
                                    <a className="text-center flex text-lg px-5 py-1 rounded-3xl text-black bg-white hover:bg-gray-300 transition-colors" href="https://wa.me/5511984583529?text=Olá!%20Estou%20interessado(a)%20em%20saber%20mais%20sobre%20o%20Google%20Analytics%204.%20Poderia%20me%20ajudar?">Descubra o poder do GA4 com minha ajuda!</a>
                                </div>
                            </div>

                            <div className="flex flex-col border-white border-[1px] items-center lg:w-1/4 justify-between">
                                <div className="text-3xl"><Image src={pagespeed} alt="Desenho de uma pessoa apresentado graficos"/></div>
                                <div className="p-5 flex flex-col gap-5">
                                    <p className="text-lg text-center ">PageSpeed Insights</p>
                                    <a className="text-center flex text-lg px-5 py-1 rounded-3xl text-black bg-white hover:bg-gray-300 transition-colors" href="https://wa.me/5511984583529?text=Olá!%20Tenho%20algumas%20perguntas%20sobre%20a%20velocidade%20do%20meu%20site%20e%20como%20melhorá-la.%20Você%20pode%20me%20orientar?">Melhore a velocidade do seu site agora!</a>
                                </div>
                            </div>

                            <div className="flex flex-col border-white border-[1px] items-center lg:w-1/4 justify-between">
                                <div className="text-3xl"><Image src={searchconsole} alt="Desenho de um detetive"/></div>
                                <div className="p-5 flex flex-col gap-5">
                                    <p className="text-lg text-center">Google Search Console</p>
                                    <a className="text-center flex text-lg px-5 py-1 rounded-3xl text-black bg-white hover:bg-gray-300 transition-colors" href="https://wa.me/5511984583529?text=Olá!%20Estou procurando ajuda para melhorar o meu site com o Google Search Console. Você pode me orientar?">Aprimore seu site com o Google Search Console!</a>
                                </div>
                            </div>
                            <div className="flex flex-col  border-white border-[1px] items-center lg:w-1/4 justify-between">
                                <div className="text-3xl"><Image src={devweb} alt="Desenho de um programador sentado na mesa com um computador"/></div>
                                <div className="p-5 flex flex-col gap-5">
                                    <p className="text-lg text-center">Desenvolvimento Web</p>
                                    <a className="text-center flex text-lg px-5 py-1 rounded-3xl text-black bg-white hover:bg-gray-300 transition-colors" href="https://wa.me/5511984583529?text=Estou interessado em serviços de desenvolvimento web. Podemos conversar?">Vamos falar sobre desenvolvimento web?</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="max-w-7xl p-5 flex gap-5 flex-col">

                <div className="w-[100%] flex flex-col lg:flex-row justify-between gap-2 items-start">
                    <h3 className="text-3xl ">Artigos recentes</h3>
                    <Link href="/blog/" className="underline-animation">ver todos</Link>
                </div>

                <div className="flex gap-5 flex-col lg:flex-row">
                    {posts.map((post) => (
                            <div key={post.id} className="border-[1px] border-black w-[100%] flex flex-col justify-between overflow-hidden">
                                <Image width={1680} height={720} src={post._embedded['wp:featuredmedia']['0'].source_url} alt={post.title.rendered}/>
                                <div className="gap-5 p-5 flex flex-col justify-between h-[100%] items-start rounded-md overflow-hidden">
                                    <div className="flex flex-col gap-5 ">
                                        <h1 className="font-bold text-lg	">{post.title.rendered}</h1>
                                        <p className="text-lg">{post.excerpt?.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}</p>
                                    </div>
                                    <Link href={`/blog/${post.slug}`} className="text-lg border-[1px] border-black px-5 py-1 rounded-3xl text-white bg-black hover:bg-white hover:text-black transition-colors">Ler mais</Link>
                                </div>
                            </div>
                        )
                    )}
                </div>

            </section>

        </main>
    )
}
