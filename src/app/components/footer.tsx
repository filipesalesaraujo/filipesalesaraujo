import Link from "next/link";
import {FaLinkedin, FaSquareGithub} from "react-icons/fa6";
import {IoMail} from "react-icons/io5";
import {BsWhatsapp} from "react-icons/bs";

export default function Footer() {
    return (
        <div>
            <header className="bg-black flex justify-center items-center border-t-[1px] border-gray-500">
                <div className="max-w-[1140px] w-[100%] flex justify-between gap-5 p-5">
                    <nav className="max-w-[100%] w-[100%]">
                        <ul className="flex gap-5 justify-center">
                            <li><a className="transition-colors hover:text-white text-gray-300 text-4xl" href="https://github.com/filipesalesaraujo" target="_blank"><FaSquareGithub/></a></li>
                            <li><a className="transition-colors hover:text-white text-gray-300 text-4xl" href="https://www.linkedin.com/in/filipesales21/" target="_blank"><FaLinkedin/></a></li>
                            <li><a className="transition-colors hover:text-white text-gray-300 text-4xl" href="mailto:filipesalesaraujo@gmail.com" target="_blank"><IoMail/></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <a href="https://wa.me/5511984583529?text=Olá!%20Gostaria%20de%20entrar%20em%20contato%20com%20você."
               target="_blank"
               className="text-green-500 border-2 border-transparent text-3xl fixed bottom-0 right-0 bg-black p-3 rounded-xl m-5 animate-pulse">
                <BsWhatsapp/>
            </a>
        </div>
    )
}