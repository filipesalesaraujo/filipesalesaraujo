import {Html, Head, Main, NextScript} from 'next/document'
import Link from "next/link";

import {FaRegEnvelope, FaGithubAlt, FaWhatsapp, FaLinkedinIn} from "react-icons/fa6";

export default function Document() {
    return (
        <Html lang="en">
            <Head/>
            <body>
            <header className="flex items-center justify-center border-b-[1px] border-black">
                <div className="max-w-7xl p-5">
                    <Link href="/">[filipesalesaraujo]</Link>
                </div>
            </header>
            <Main/>
            <NextScript/>
            <footer className="flex items-center justify-center border-t-[1px] border-black justify-betwee">
                <div className="max-w-7xl p-5 flex gap-5">
                    <a href="https://github.com/filipesalesaraujo" target="_blank" className="hover:text-purple-500 transition-colors"><FaGithubAlt size={25}/></a>
                    <a href="mailto:filipesalesaraujo@gmail.com" className="hover:text-red-500 transition-colors"><FaRegEnvelope size={25}/></a>
                    <a href="https://wa.me/5511984583529" target="_blank" className="hover:text-green-500 transition-colors"><FaWhatsapp size={25} /></a>
                    <a href="https://www.linkedin.com/in/filipesales21/" className="hover:text-blue-500 transition-colors" target="_blank"><FaLinkedinIn size="25"/></a>
                </div>
            </footer>
            </body>
        </Html>
    )
}
