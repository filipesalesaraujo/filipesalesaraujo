import {Open_Sans} from 'next/font/google'

const openSans = Open_Sans({subsets: ['latin']})

import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Script from "next/script";

export default function App({Component, pageProps}: AppProps) {
    return (
        <div className={openSans.className}>
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
