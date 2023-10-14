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
        <main className="flex items-center justify-center bg-blog bg-no-repeat bg-[center_-30px] flex-col">

            <section className="max-w-7xl px-5 flex flex-col gap-5 py-10">

                <h1 className="text-4xl text-center flex justify-center flex-col items-center">
                    <strong className="text-7xl block">Artigos</strong>
                </h1>
                <p className="text-2xl">Mergulhe profundamente nas minhas análises sobre dados, performance web, desenvolvimento e educação física. Explore como esses elementos estão moldando o futuro do mundo digital e do condicionamento físico, e descubra insights valiosos que podem transformar sua visão sobre tecnologia e saúde.</p>
                <p className="text-3xl font-bold">Performance</p>
                <div className="flex flex-wrap gap-5">{postsPerformance.map((post) => (
                    <div key={post.id} className="shadow-md bg-white rounded-2xl w-[100%] lg:w-[32%] flex flex-col justify-between items-start overflow-hidden">
                        <Image className="w-full" width={394} height={222} src={post._embedded['wp:featuredmedia']['0'].source_url} alt={post.title.rendered}/>
                        <div className="h-[100%] gap-5 p-5 flex flex-col justify-between items-start rounded-md overflow-hidden">
                            <div className="flex flex-col gap-5 ">
                                <div className="text-gray-500">
                                    {moment(post.date).format('D [de] MMMM [de] YYYY')}
                                </div>
                                <h1 className="text-lg font-bold">{post.title.rendered}</h1>
                                <p className="text-lg">{post.excerpt?.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}</p>
                            </div>
                            <Link href={`/blog/${post.slug}`} className="text-lg border-[1px] border-blue-600 px-5 py-1 rounded-3xl text-white bg-blue-600 hover:opacity-80 transition-opacity">Ler mais</Link>
                        </div>
                    </div>
                ))}
                </div>
            </section>

            <section className="bg-gray-100 w-full flex items-center justify-center">

                <div className="max-w-7xl px-5 flex flex-col gap-5 py-10">
                    <p className="text-3xl font-bold">Ciência de Dados</p>
                    <div className="flex flex-wrap gap-5">{postsCienciaDeDados.map((post) => (
                        <div key={post.id}
                             className="shadow-md bg-white rounded-2xl w-[100%] lg:w-[32%] flex flex-col justify-between items-start overflow-hidden">
                            <Image className="w-full" width={394} height={222} src={post._embedded['wp:featuredmedia']['0'].source_url} alt={post.title.rendered}/>
                            <div className="h-[100%] gap-5 p-5 flex flex-col justify-between items-start rounded-md overflow-hidden">
                                <div className="flex flex-col gap-5 ">
                                    <div className="text-gray-500">
                                        {moment(post.date).format('D [de] MMMM [de] YYYY')}
                                    </div>
                                    <h1 className="text-lg font-bold">{post.title.rendered}</h1>
                                    <p className="text-lg">{post.excerpt?.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}</p>
                                </div>
                                <Link href={`/blog/${post.slug}`} className="text-lg border-[1px] border-blue-600 px-5 py-1 rounded-3xl text-white bg-blue-600 hover:opacity-80 transition-opacity">Ler mais</Link>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>

            <section className="max-w-7xl px-5 flex flex-col gap-5 py-10">

                <p className="text-3xl font-bold">Educação Física</p>
                <div className="flex flex-wrap gap-5">{postsEducacaoFisica.map((post) => (
                    <div key={post.id}
                         className="shadow-md bg-white rounded-2xl w-[100%] lg:w-[32%] flex flex-col justify-between items-start overflow-hidden">
                        <Image className="w-full" width={394} height={222} src={post._embedded['wp:featuredmedia']['0'].source_url} alt={post.title.rendered}/>
                        <div className="h-[100%] gap-5 p-5 flex flex-col justify-between items-start rounded-md overflow-hidden">
                            <div className="flex flex-col gap-5 ">
                                <div className="text-gray-500">
                                    {moment(post.date).format('D [de] MMMM [de] YYYY')}
                                </div>
                                <h1 className="text-lg font-bold">{post.title.rendered}</h1>
                                <p className="text-lg">{post.excerpt?.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}</p>
                            </div>
                            <Link href={`/blog/${post.slug}`} className="text-lg border-[1px] border-blue-600 px-5 py-1 rounded-3xl text-white bg-blue-600 hover:opacity-80 transition-opacity">Ler mais</Link>
                        </div>
                    </div>
                ))}
                </div>
            </section>
        </main>
    )
}
