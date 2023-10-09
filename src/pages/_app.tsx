import {Inter} from "next/font/google";

const inter = Inter({subsets: ['latin']})
import '@/styles/globals.css'
import type {AppProps} from 'next/app'

import Script from "next/script";

import {useEffect} from "react";

export default function App({Component, pageProps}: AppProps) {

    useEffect(() => {
        // Função para adicionar os scripts ao final do carregamento
        const addScripts = () => {
            const adsbygoogleScript = document.createElement('script');
            adsbygoogleScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5173897460796128';
            adsbygoogleScript.crossOrigin = 'anonymous';
            document.body.appendChild(adsbygoogleScript);

            const gtagScript = document.createElement('script');
            gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-9XQZJ9KDYH';
            document.body.appendChild(gtagScript);

            const analyticsScript = document.createElement('script');
            analyticsScript.innerHTML = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-9XQZJ9KDYH');
            `;
            document.body.appendChild(analyticsScript);
        };

        window.addEventListener('load', addScripts);

        return () => {
            window.removeEventListener('load', addScripts);
        };
    }, []);

    return (
        <div className={inter.className}>
            <Component {...pageProps} />
        </div>
    )
}
