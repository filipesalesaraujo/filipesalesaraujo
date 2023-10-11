import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import Head from "next/head";
import Image from "next/image";
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    RedditIcon,
    RedditShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "next-share";
import Link from "next/link";

import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');

import profile from '../../../../public/profile.jpeg'
import {GrGithub, GrLinkedin, GrMail} from "react-icons/gr";

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

function calculateReadingTime(text: string) {
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s/g).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    return `${readingTime} minutos de leitura`;
}

export default function Slug({posts, postsRecentes}: ISlug) {

    const currentPostId = posts[0].id;

    return (
            <main className="flex justify-center items-center flex-row bg-[length:35%] bg-slug bg-no-repeat bg-[right_-50px_top_-50px] lg:bg-[right_-100px_top_-50px]">
                <div className="max-w-7xl flex justify-center flex-col lg:flex-row gap-5 px-5 py-10">

                    {posts.map((post) => (
                        <div key={post.id} className=" flex flex-col gap-5 lg:basis-2/3">
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
                                <meta name="twitter:image"
                                      content={post._embedded['wp:featuredmedia']['0'].source_url}/>
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
                            <h1 className="text-2xl font-bold">{post.title.rendered}</h1>
                            <div className="flex gap-5">
                                <Image width={70} height={70} className="rounded-full w-[70px] h-[70px]" src={profile} alt="Foto de perfil de Filipe Sales Araujo"/>
                                <div className="flex flex-col gap-1">
                                    <div>Filipe Sales Araujo</div>
                                    <div className="flex gap-1">
                                        <a href="https://www.linkedin.com/in/filipesales21/" target="_blank" className="text-blue-600 hover:opacity-80 transition-opacity" aria-label="LinkedIn"><GrLinkedin/></a>
                                        <a href="https://github.com/filipesalesaraujo" target="_blank" className="text-black hover:opacity-80 transition-opacity" aria-label="GitHub"><GrGithub/></a>
                                        <a href="mailto:filipesalesaraujo@gmail.com" target="_blank" className="text-red-500 hover:opacity-80 transition-opacity" aria-label="E-mail"><GrMail/></a>
                                    </div>
                                    <div className="text-gray-500">
                                        {moment(post.date).format('D [de] MMMM [de] YYYY')}
                                    </div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-500">{calculateReadingTime(post.content.rendered)}</div>
                            <div className='text-lg' dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
                            <hr/>

                            <div className="flex flex-col md:flex-row gap-5">
                                <p className="text-black text-xl">Compatilhar via:</p>
                                <div className="flex gap-2.5 flex-wrap">
                                    <WhatsappShareButton url={`https://filipesalesaraujo.com/blog/${post.slug}`} title={`${post.title.rendered}`} separator=" - ">
                                        <WhatsappIcon size={32} borderRadius={10}/>
                                    </WhatsappShareButton>

                                    <TwitterShareButton url={`https://filipesalesaraujo.com/blog/${post.slug}`} title={`${post.title.rendered}`}>
                                        <TwitterIcon size={32} borderRadius={10}/>
                                    </TwitterShareButton>

                                    <LinkedinShareButton url={`https://filipesalesaraujo.com/blog/${post.slug}`}>
                                        <LinkedinIcon size={32} borderRadius={10}/>
                                    </LinkedinShareButton>

                                    <FacebookShareButton url={`https://filipesalesaraujo.com/blog/${post.slug}`} quote={`${post.title.rendered}`}>
                                        <FacebookIcon size={32} borderRadius={10}/>
                                    </FacebookShareButton>

                                    <RedditShareButton url={`https://filipesalesaraujo.com/blog/${post.slug}`} title={`${post.title.rendered}`}>
                                        <RedditIcon size={32} borderRadius={10}/>
                                    </RedditShareButton>

                                    <TelegramShareButton url={`https://filipesalesaraujo.com/blog/${post.slug}`} title={`${post.title.rendered}`}>
                                        <TelegramIcon size={32} borderRadius={10}/>
                                    </TelegramShareButton>

                                    <EmailShareButton url={`https://filipesalesaraujo.com/blog/${post.slug}`} subject={`${post.title.rendered}`} body={`${post.content?.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}`}>
                                        <EmailIcon size={32} borderRadius={10}/>
                                    </EmailShareButton>
                                </div>

                            </div>

                        </div>

                    ))}
                    <div className="flex gap-5 flex-col lg:basis-1/3">
                        <div
                            className="w-[100%] flex flex-col lg:flex-row justify-between gap-2 items-start">
                            <h3 className="text-2xl ">Artigos recentes</h3>
                            <Link href="/blog/" className="text-lg border-[1px] border-blue-600 px-5 py-1 rounded-3xl text-white bg-blue-600 hover:opacity-80 transition-opacity">ver todos</Link>
                        </div>
                        <div className="flex gap-5 flex-col">
                            {postsRecentes.filter(postRecente => postRecente.id !== currentPostId).map((post) => (
                                <div key={post.id} className="rounded-2xl bg-white shadow-md  w-[100%] flex flex-col justify-between overflow-hidden">
                                    <Image className="w-full" width={394} height={222} src={post._embedded['wp:featuredmedia']['0'].source_url} alt={post.title.rendered}/>
                                    <div className="gap-5 p-5 flex flex-col justify-between h-[100%] items-start rounded-md overflow-hidden">
                                        <div className="flex flex-col gap-5 ">
                                            <div className="text-gray-500">
                                                {moment(post.date).format('D [de] MMMM [de] YYYY')}
                                            </div>
                                            <h1 className="font-bold text-lg	">{post.title.rendered}</h1>
                                            <p className="text-lg">{post.excerpt?.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}</p>
                                        </div>
                                        <Link href={`/blog/${post.slug}`} className="text-lg border-[1px] border-blue-600 px-5 py-1 rounded-3xl text-white bg-blue-600 hover:opacity-80 transition-opacity">Ler mais</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

    )
}