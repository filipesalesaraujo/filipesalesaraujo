import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import Head from "next/head";
import Image from "next/image";
import {EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton} from "next-share";
import Link from "next/link";

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
        description: string,
        keywords: string,
    }
}

export interface ISlug {
    posts: TPost[]
    postsRecentes: TPost[]
}

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext) => {

    const postSlug = params?.slug;

    const totalPostsFetch = await fetch(`https://painel.filipesalesaraujo.com/wp-json/wp/v2/posts`)
    const totalPosts = await totalPostsFetch.headers.get('x-wp-total')

    const postsFetch = await fetch(`https://painel.filipesalesaraujo.com/wp-json/wp/v2/posts?_embed=true&slug=${postSlug}`)
    const postsArr = await postsFetch.json()
    const posts = await postsArr


    const postsRecentesFetch = await fetch(`https://painel.filipesalesaraujo.com/wp-json/wp/v2/posts?_embed=true&per_page=3`)
    const postsRecentesArr = await postsRecentesFetch.json()
    const postsRecentes = await postsRecentesArr


    return {
        props: {
            posts,
            postsRecentes
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
export default function Slug({posts, postsRecentes}: ISlug) {
    return (
        <>
            <div className="flex justify-center items-center flex-col">
                {posts.map((post) => (
                    <div key={post.id} className="max-w-7xl p-5 flex flex-col gap-5">
                        <Head>
                            <title>{post.title.rendered}</title>
                            <meta name="description" content={post.acf.description}/>
                            <meta name="keywords" content={post.acf.keywords}/>
                            <meta name="author" content="Filipe Sales Araujo"/>
                            <link rel="canonical" href={`https://filipesalesaraujo.com/blog/${post.slug}`}/>
                            <meta property="og:title" content={post.title.rendered}/>
                            <meta property="og:description" content={post.acf.description}/>
                            <meta property="og:image" content={post._embedded['wp:featuredmedia']['0'].source_url}/>
                            <meta property="og:url" content={`https://filipesalesaraujo.com/blog/${post.slug}`}/>
                            <meta property="og:type" content="article"/>
                            <meta name="twitter:card" content="summary"/>
                            <meta name="twitter:title" content={post.title.rendered}/>
                            <meta name="twitter:description" content={post.acf.description}/>
                            <meta name="twitter:image" content={post._embedded['wp:featuredmedia']['0'].source_url}/>
                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
                                        "@context": "https://schema.org",
                                        "@type": "Article",
                                        "mainEntityOfPage": {
                                            "@type": "WebPage",
                                            "@id": `${post.slug}`
                                        },
                                        "headline": `${post.title.rendered}`,
                                        "image": [
                                            `${post._embedded['wp:featuredmedia']['0'].source_url}`,
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
                                        },
                                        "description": `${post.acf.description}`,
                                        "keywords": `${post.acf.keywords}`,
                                        "articleBody": `${post.content?.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}`
                                    })
                                }}
                            />
                        </Head>
                        <h1 className="text-2xl font-bold mb-5">{post.title.rendered}</h1>

                        <Image width={1680} height={720} src={post._embedded['wp:featuredmedia']['0'].source_url} alt={post.title.rendered}/>
                        <div className='text-lg' dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
                        <hr/>
                        <div className="flex gap-5">
                            <p className="text-black text-xl">Compatilhar via:</p>
                            <div className="flex gap-2.5">
                                <WhatsappShareButton
                                    url={`https://filipesalesaraujo.com/blog/${post.slug}`}
                                    title={`${post.title.rendered}`}
                                    separator=" - "
                                >
                                    <WhatsappIcon size={32} borderRadius={10}/>
                                </WhatsappShareButton>

                                <TwitterShareButton
                                    url={`https://filipesalesaraujo.com/blog/${post.slug}`}
                                    title={`${post.title.rendered}`}
                                >
                                    <TwitterIcon size={32} borderRadius={10}/>
                                </TwitterShareButton>

                                <LinkedinShareButton url={`https://filipesalesaraujo.com/blog/${post.slug}`}>
                                    <LinkedinIcon size={32} borderRadius={10}/>
                                </LinkedinShareButton>

                                <FacebookShareButton
                                    url={`https://filipesalesaraujo.com/blog/${post.slug}`}
                                    quote={`${post.title.rendered}`}
                                >
                                    <FacebookIcon size={32} borderRadius={10}/>
                                </FacebookShareButton>

                                <RedditShareButton
                                    url={`https://filipesalesaraujo.com/blog/${post.slug}`}
                                    title={`${post.title.rendered}`}
                                >
                                    <RedditIcon size={32} borderRadius={10}/>
                                </RedditShareButton>

                                <TelegramShareButton
                                    url={`https://filipesalesaraujo.com/blog/${post.slug}`}
                                    title={`${post.title.rendered}`}
                                >
                                    <TelegramIcon size={32} borderRadius={10}/>
                                </TelegramShareButton>

                                <EmailShareButton
                                    url={`https://filipesalesaraujo.com/blog/${post.slug}`}
                                    subject={`${post.title.rendered}`}
                                    body={`${post.content?.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}`}
                                >
                                    <EmailIcon size={32} borderRadius={10}/>
                                </EmailShareButton>
                            </div>

                        </div>
                        <hr/>

                    </div>

                ))}
                <section className="max-w-7xl p-5 flex gap-5 flex-col">
                    <div className="w-[100%] flex flex-col lg:flex-row justify-between gap-2 items-start">
                        <h3 className="text-3xl ">Artigos recentes</h3>
                        <Link href="/blog/" className="underline-animation">ver todos</Link>
                    </div>
                    <div className="flex gap-5 flex-col lg:flex-row">
                        {postsRecentes.map((post) => (
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
            </div>

        </>
    )
}