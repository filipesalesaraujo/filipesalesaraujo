import {Crimson_Pro} from 'next/font/google'

const crimsonPro = Crimson_Pro({subsets: ['latin']})

import {GetStaticProps, GetStaticPropsContext} from "next";
import Link from "next/link";
import Image from "next/image";

import moment from 'moment';
import 'moment/locale/pt-br';

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
    date: string;
}

export interface IBlog {
    postsCienciaDeDados: TPost[]
    postsPerformance: TPost[]
    postsEducacaoFisica: TPost[]
}

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext) => {

    const postsFetchCienciaDeDados = await fetch(`https://painel.filipesalesaraujo.com/wp-json/wp/v2/posts?categories=2&_embed=true&per_page=100`)
    const postsArrCienciaDeDados = await postsFetchCienciaDeDados.json()
    const postsCienciaDeDados = await postsArrCienciaDeDados

    const postsFetchPerformance = await fetch(`https://painel.filipesalesaraujo.com/wp-json/wp/v2/posts?categories=3&_embed=true&per_page=100`)
    const postsArrPerformance = await postsFetchPerformance.json()
    const postsPerformance = await postsArrPerformance

    const postsFetchEducacaoFisica = await fetch(`https://painel.filipesalesaraujo.com/wp-json/wp/v2/posts?categories=5&_embed=true&per_page=100`)
    const postsArrEducacaoFisica = await postsFetchEducacaoFisica.json()
    const postsEducacaoFisica = await postsArrEducacaoFisica

    return {
        props: {
            postsCienciaDeDados,
            postsPerformance,
            postsEducacaoFisica
        },
        revalidate: 10,
    }
}

export default function Index({postsCienciaDeDados, postsPerformance, postsEducacaoFisica}: IBlog) {


    return (
        <main className="flex items-center justify-center bg-black flex-col">

            <section className="max-w-7xl px-5 flex flex-col gap-5 py-10">

                <h1 className="text-4xl text-center flex justify-center flex-col items-center">
                    <strong className="text-6xl block text-gray-500">Artigos</strong>
                </h1>
                <p className="text-2xl text-gray-500">Mergulhe profundamente nas minhas análises sobre <strong>dados</strong>, <strong>performance web</strong>, <strong>desenvolvimento</strong> e <strong>educação física</strong>. Explore como esses elementos estão moldando o futuro do mundo digital e do condicionamento físico, e descubra insights valiosos que podem transformar sua visão sobre tecnologia e saúde.</p>

                <div className="flex justify-between gap-5 flex-col lg:flex-row">
                    <a href="#perfomance" className="text-lg border-[1px] w-full flex items-center justify-center border-gray-500 px-5 py-1 rounded-3xl text-gray-500 hover:opacity-80 transition-opacity">Perfomance</a>
                    <a href="#cieciadedados" className="text-lg border-[1px] w-full flex items-center justify-center border-gray-500 px-5 py-1 rounded-3xl text-gray-500 hover:opacity-80 transition-opacity">Ciência de Dados</a>
                    <a href="#educacaofisica" className="text-lg border-[1px] w-full flex items-center justify-center border-gray-500 px-5 py-1 rounded-3xl text-gray-500 hover:opacity-80 transition-opacity">Educação Física</a>
                </div>


                <p id="perfomance" className="text-3xl font-bold text-gray-500">Performance</p>
                <div className="flex flex-wrap gap-5">
                    {postsPerformance.map((post) => (
                        <div key={post.id} className="shadow-md rounded-2xl w-[100%] lg:w-[32%]  flex flex-col justify-between overflow-hidden bg-black border-gray-500 border-[1px]">
                            <div className="gap-5 p-5 flex flex-col justify-between h-[100%] items-start rounded-md overflow-hidden">
                                <div className="flex flex-col gap-5">
                                    <p className="text-gray-500">{moment(post.date).format('D [de] MMMM [de] YYYY')}</p>
                                    <h1 className="font-bold text-lg text-gray-500">{post.title.rendered}</h1>
                                    <p className="text-lg text-gray-500">{post.excerpt?.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}</p>
                                </div>
                                <Link href={`/blog/${post.slug}`} className="text-lg border-[1px] border-gray-500 px-5 py-1 rounded-3xl text-gray-500 hover:opacity-80 transition-opacity">Ler mais</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="w-full flex items-center justify-center">

                <div className="max-w-7xl px-5 flex flex-col gap-5 py-10">
                    <p id="cieciadedados" className="text-3xl font-bold text-gray-500">Ciência de Dados</p>
                    <div className="flex flex-wrap gap-5">
                        {postsCienciaDeDados.map((post) => (
                            <div key={post.id} className="shadow-md rounded-2xl w-[100%] lg:w-[32%]  flex flex-col justify-between overflow-hidden bg-black border-gray-500 border-[1px]">
                                <div className="gap-5 p-5 flex flex-col justify-between h-[100%] items-start rounded-md overflow-hidden">
                                    <div className="flex flex-col gap-5">
                                        <p className="text-gray-500">{moment(post.date).format('D [de] MMMM [de] YYYY')}</p>
                                        <h1 className="font-bold text-lg text-gray-500">{post.title.rendered}</h1>
                                        <p className="text-lg text-gray-500">{post.excerpt?.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}</p>
                                    </div>
                                    <Link href={`/blog/${post.slug}`} className="text-lg border-[1px] border-gray-500 px-5 py-1 rounded-3xl text-gray-500 hover:opacity-80 transition-opacity">Ler mais</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-7xl px-5 flex flex-col gap-5 py-10">

                <p id="educacaofisica" className="text-3xl font-bold text-gray-500">Educação Física</p>
                <div className="flex flex-wrap gap-5">
                    {postsEducacaoFisica.map((post) => (
                        <div key={post.id} className="shadow-md rounded-2xl w-[100%] lg:w-[32%]  flex flex-col justify-between overflow-hidden bg-black border-gray-500 border-[1px]">
                            <div className="gap-5 p-5 flex flex-col justify-between h-[100%] items-start rounded-md overflow-hidden">
                                <div className="flex flex-col gap-5">
                                    <p className="text-gray-500">{moment(post.date).format('D [de] MMMM [de] YYYY')}</p>
                                    <h1 className="font-bold text-lg text-gray-500">{post.title.rendered}</h1>
                                    <p className="text-lg text-gray-500">{post.excerpt?.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}</p>
                                </div>
                                <Link href={`/blog/${post.slug}`} className="text-lg border-[1px] border-gray-500 px-5 py-1 rounded-3xl text-gray-500 hover:opacity-80 transition-opacity">Ler mais</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
