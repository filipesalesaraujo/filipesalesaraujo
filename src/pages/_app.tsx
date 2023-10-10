import {Inter} from "next/font/google";

const inter = Inter({subsets: ['latin']})
import '@/styles/globals.css'
import type {AppProps} from 'next/app'

import Script from "next/script";

import {useEffect} from "react";

export default function App({Component, pageProps}: AppProps) {
    return (
        <div className={inter.className}>
            <Script id="adsbygoogle-init" strategy="afterInteractive" crossOrigin="anonymous" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5173897460796128" />
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-9XQZJ9KDYH"/>
            <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-9XQZJ9KDYH');
                `}
            </Script>
            <Component {...pageProps} />
        </div>
    )
}
