import {Inter} from 'next/font/google'
import {GetStaticProps, GetStaticPropsContext} from "next";
import Link from "next/link";

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

    const postsFetch = await fetch(`https://painel.filipesalesaraujo.com/wp-json/wp/v2/posts?_embed=true`)
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
        <>
            <main className="flex items-center justify-center">
                <div className="max-w-7xl p-5 flex flex-wrap gap-5">
                    {posts.map((post) => (
                            <div key={post.id} className="gap-5 p-5 border-[1px] border-black w-[32%] flex flex-col justify-between items-start rounded-md">
                                <div className="flex flex-col gap-5">
                                    <h1 className="font-bold">{post.title.rendered}</h1>
                                    <p>{post.excerpt?.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}</p>
                                </div>
                                <Link href={post.slug} className="border-[1px] border-black px-2 py-1 rounded-md text-white bg-black hover:bg-white hover:text-black transition-colors">Ler mais</Link>
                            </div>
                        )
                    )}
                </div>

            </main>
        </>

    )
}