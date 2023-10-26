import {Html, Head, Main, NextScript} from 'next/document'

import Link from "next/link";

import {FaRegEnvelope, FaGithubAlt, FaLinkedinIn} from "react-icons/fa6";

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head />
            <body>
            <header className="flex items-center justify-center bg-[#27282c]">
                <div className="max-w-7xl w-[100%] flex justify-between items-center">
                    <div className="p-5 lg:min-w-[243px] lg:max-w-[19%] w-[100%] justify-start bg-black hidden lg:flex ">
                        <Link href="/" className="text-white hover:text-white text-xs lg:text-2xl font-bold bg-black hover:opacity-80 transition-opacity">[filipesalesaraujo]</Link>
                    </div>
                    <div className="p-5 lg:max-w-[81%] w-[100%] flex justify-end items-center gap-5">
                        <Link href="/" className="text-gray-400 hover:text-white transition-colors text-xs lg:text-2xl">Início</Link>
                        <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors text-xs lg:text-2xl">Sobre</Link>
                        <Link href='/blog' className="text-gray-400 hover:text-white transition-colors text-xs lg:text-2xl">Blog</Link>
                        <Link href='/ferramentas' className="text-gray-400 hover:text-white transition-colors text-xs lg:text-2xl">Ferramentas</Link>
                    </div>
                </div>
            </header>
            <Main/>
            <NextScript/>
            <footer className="flex items-center justify-center flex-col border-t-[1px] border-black justify-betwee bg-[#27282c]">
                <div className="max-w-7xl w-[100%] flex justify-between items-center flex-col lg:flex-row">
                    <div className="p-5 flex gap-5 w-full">
                        <a href="https://github.com/filipesalesaraujo" aria-label="GitHub" target="_blank" className="text-white hover:text-purple-500 transition-colors"><FaGithubAlt size={25}/></a>
                        <a href="mailto:filipesalesaraujo@gmail.com" aria-label="E-mail" target="_blank" className="text-white hover:text-red-500 transition-colors"><FaRegEnvelope size={25}/></a>
                        <a href="https://www.linkedin.com/in/filipesales21/" aria-label="LinkedIn" target="_blank" className="text-white hover:text-blue-500 transition-colors"><FaLinkedinIn size="25"/></a>
                    </div>
                    <div className="p-5 flex gap-5 lg:justify-end flex-col lg:flex-row w-full">
                        <Link className="text-gray-400 hover:text-white transition-colors" href="/direitos-autorais">Direitos Autorais</Link>
                        <Link className="text-gray-400 hover:text-white transition-colors" href="/politica-de-privacidade">Política de Privacidade</Link>
                        <Link className="text-gray-400 hover:text-white transition-colors" href="/termos-de-uso">Termos de Uso</Link>
                    </div>
                </div>
            </footer>
            </body>
        </Html>
    )
}
