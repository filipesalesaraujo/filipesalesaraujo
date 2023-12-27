import {Html, Head, Main, NextScript} from 'next/document'

import Link from "next/link";

import {FaRegEnvelope, FaGithubAlt, FaLinkedinIn} from "react-icons/fa6";

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head />
            <body>
            <header className="flex items-center justify-center bg-black border-b-[1px] border-gray-500">
                <div className="max-w-7xl w-[100%] flex justify-between items-center">
                    <div className="p-5 lg:min-w-[243px] lg:max-w-[19%] w-[100%] justify-start bg-black hidden lg:flex ">
                        <Link href="/" className="text-white text-xs lg:text-2xl font-bold hover:opacity-80 transition-opacity">[filipesalesaraujo]</Link>
                    </div>
                    <div className="p-5 lg:max-w-[81%] w-[100%] flex justify-end items-center gap-5">
                        <Link href="/" className="text-white hover:opacity-80 transition-colors text-xs lg:text-2xl">Início</Link>
                        <Link href="/sobre" className="text-white hover:opacity-80 transition-colors text-xs lg:text-2xl">Sobre</Link>
                        <Link href='/blog' className="text-white hover:opacity-80 transition-colors text-xs lg:text-2xl">Blog</Link>
                    </div>
                </div>
            </header>
            <Main/>
            <NextScript/>
            <footer className="flex items-center justify-center flex-col border-t-[1px] border-gray-500 justify-betwee bg-black">
                <div className="max-w-7xl w-[100%] flex justify-between items-center flex-col lg:flex-row">
                    <div className="p-5 flex gap-5 lg:justify-end flex-col lg:flex-row w-full">
                        <Link className="text-white hover:text-white transition-colors" href="/direitos-autorais">Direitos Autorais</Link>
                        <Link className="text-white hover:text-white transition-colors" href="/politica-de-privacidade">Política de Privacidade</Link>
                        <Link className="text-white hover:text-white transition-colors" href="/termos-de-uso">Termos de Uso</Link>
                    </div>
                </div>
            </footer>
            </body>
        </Html>
    )
}
