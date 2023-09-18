import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import Head from "next/head";

export type TPost = {
    excerpt?: {
        rendered: string
    }
    slug?: string | undefined;
    id?: string
    title: {
        rendered: string
    }
    content: {
        rendered: string
    }
    date: string,
    modified: string
    _embedded: any;
    acf: {
        "description": string,
        "keywords": string,
    }
}

export interface ISlug {
    posts: TPost[]
}

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext) => {

    const postSlug = params?.slug;

    const totalPostsFetch = await fetch(`https://painel.filipesalesaraujo.com/wp-json/wp/v2/posts`)
    const totalPosts = await totalPostsFetch.headers.get('x-wp-total')

    const postsFetch = await fetch(`https://painel.filipesalesaraujo.com/wp-json/wp/v2/posts?_embed=true&slug=${postSlug}`)
    const postsArr = await postsFetch.json()
    const posts = await postsArr


    return {
        props: {
            posts,
        },
        revalidate: 10,
    };
}

export const getStaticPaths: GetStaticPaths = async () => {

        const totalPostsFetch = await fetch(`https://painel.filipesalesaraujo.com/wp-json/wp/v2/posts?_embed=true`)
        const totalPosts = await totalPostsFetch.headers.get('x-wp-total')

        const postsFetch = await fetch(`https://painel.filipesalesaraujo.com/wp-json/wp/v2/posts?_embed=true&per_page=${totalPosts}`)
        const postsArr = await postsFetch.json()
        const paths = await postsArr.map((post: any) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        });

        return {
            paths,
            fallback: 'blocking',
        };
    }
;
export default function Slug({posts}: ISlug) {
    return (
        <>
            <div className="flex justify-center items-center">
                {posts.map((post) => (
                    <div key={post.id} className="max-w-7xl p-5">
                        <Head>
                            <title>{post.title.rendered}</title>
                            <meta name="description" content={post.acf.description}/>
                            <meta name="keywords" content={post.acf.keywords}/>
                            <meta name="author" content="Filipe Sales Araujo"/>
                            <link rel="canonical" href={post.slug}/>
                            <meta property="og:title" content={post.title.rendered}/>
                            <meta property="og:description" content={post.acf.description}/>
                            <meta property="og:image" content="URL da imagem de destaque"/>
                            <meta property="og:url" content={post.slug}/>
                            <meta property="og:type" content="article"/>
                            <meta name="twitter:card" content="summary"/>
                            <meta name="twitter:title" content={post.title.rendered}/>
                            <meta name="twitter:description" content={post.acf.description}/>
                            <meta name="twitter:image" content="URL da imagem de destaque"/>
                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                                        "@context": "https://schema.org",
                                        "@type": "Article",
                                        "mainEntityOfPage": {
                                            "@type": "WebPage",
                                            "@id": `${post.slug}`
                                        },
                                        "headline": `${post.title.rendered}`,
                                        "image": [
                                            "https://example.com/image1.jpg",
                                        ],
                                        "datePublished": `${post.date}`,
                                        "dateModified": `${post.modified}`,
                                        "author": {
                                            "@type": "Person",
                                            "name": "Filipe Sales Araujo"
                                        },
                                        "publisher": {
                                            "@type": "Organization",
                                            "name": "[filipesalesaraujo]",
                                            "logo": {
                                                "@type": "ImageObject",
                                                "url": "https://example.com/logo.jpg"
                                            }
                                        },
                                        "description": `${post.acf.description}`,
                                        "keywords": `${post.acf.keywords}`,
                                        "articleBody": `${post.content?.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}`
                                    })
                                }}
                            />
                        </Head>
                        <h1 className="text-4xl font-bold mb-5">{post.title.rendered}</h1>
                        <div dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
                    </div>
                ))}
            </div>
        </>
    )
}