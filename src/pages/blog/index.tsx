import {GetStaticProps, GetStaticPropsContext} from "next";
import Link from "next/link";
import Image from "next/image";

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
    postsCienciaDeDados: TPost[]
    postsPerformance: TPost[]
}

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext) => {

    const postsFetchCienciaDeDados = await fetch(`https://painel.filipesalesaraujo.com/wp-json/wp/v2/posts?categories=2&_embed=true`)
    const postsArrCienciaDeDados = await postsFetchCienciaDeDados.json()
    const postsCienciaDeDados = await postsArrCienciaDeDados

    const postsFetchPerformance = await fetch(`https://painel.filipesalesaraujo.com/wp-json/wp/v2/posts?categories=3&_embed=true`)
    const postsArrPerformance = await postsFetchPerformance.json()
    const postsPerformance = await postsArrPerformance

    return {
        props: {
            postsCienciaDeDados,
            postsPerformance
        },
        revalidate: 10,
    }
}

export default function Index({postsCienciaDeDados, postsPerformance}: IBlog) {


    return (
        <main className="flex items-center justify-center">
            <div className="max-w-7xl p-5 flex flex-col gap-5">

                <p className="text-lg">Mergulhe profundamente nas minhas análises sobre dados, performance web e desenvolvimento. Explore como esses elementos estão moldando o futuro do mundo digital e descubra insights valiosos que podem transformar sua visão sobre a tecnologia. </p>

                <h1  className="text-3xl">Performance</h1>
                <div className="flex flex-wrap gap-5">
                    {postsPerformance.map((post) => (
                            <div key={post.id} className=" border-[1px] border-black w-[100%] xl:w-[32%] flex flex-col justify-between items-start overflow-hidden">
                                <Image width={1680} height={720} src={post._embedded['wp:featuredmedia']['0'].source_url} alt={post.title.rendered}/>
                                <div className="h-[100%] gap-5 p-5 flex flex-col justify-between items-start rounded-md overflow-hidden">
                                    <div className="flex flex-col gap-5 ">
                                        <h1 className="text-lg font-bold">{post.title.rendered}</h1>
                                        <p className="text-lg">{post.excerpt?.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}</p>
                                    </div>
                                    <Link href={`/blog/${post.slug}`}  className="text-lg border-[1px] border-black px-5 py-1 rounded-3xl text-white bg-black hover:bg-white hover:text-black transition-colors">Ler mais</Link>
                                </div>
                            </div>
                        )
                    )}
                </div>

                <h2 className="text-3xl">Ciência de Dados</h2>
                <div className="flex flex-wrap gap-5">
                    {postsCienciaDeDados.map((post) => (
                            <div key={post.id} className=" border-[1px] border-black w-[100%] xl:w-[32%] flex flex-col justify-between items-start overflow-hidden">
                                <Image width={1680} height={720} src={post._embedded['wp:featuredmedia']['0'].source_url} alt={post.title.rendered}/>
                                <div className="h-[100%] gap-5 p-5 flex flex-col justify-between items-start rounded-md overflow-hidden">
                                    <div className="flex flex-col gap-5 ">
                                        <h1 className="text-lg font-bold">{post.title.rendered}</h1>
                                        <p className="text-lg">{post.excerpt?.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}</p>
                                    </div>
                                    <Link href={`/blog/${post.slug}`} className="text-lg border-[1px] border-black px-5 py-1 rounded-3xl text-white bg-black hover:bg-white hover:text-black transition-colors">Ler mais</Link>
                                </div>
                            </div>
                        )
                    )}
                </div>

            </div>
        </main>
    )
}
