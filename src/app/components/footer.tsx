import Link from "next/link";
import {FaLinkedin, FaSquareGithub} from "react-icons/fa6";
import {IoMail} from "react-icons/io5";

export default function Footer() {
    return (
        <header className="bg-gray-950 flex justify-center items-center ">
            <div className="max-w-[1140px] w-[100%] flex justify-between gap-5 p-5">
                <nav className="max-w-[100%] w-[100%]">
                    <ul className="flex gap-5 justify-center">
                        <li><a className="transition-colors hover:text-blue-500 text-white text-4xl" href="https://github.com/filipesalesaraujo" target="_blank"><FaSquareGithub /></a></li>
                        <li><a className="transition-colors hover:text-blue-500 text-white text-4xl" href="https://www.linkedin.com/in/filipesales21/" target="_blank"><FaLinkedin /></a></li>
                        <li><a className="transition-colors hover:text-blue-500 text-white text-4xl" href="mailto:filipesalesaraujo@gmail.com" target="_blank"><IoMail /></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}