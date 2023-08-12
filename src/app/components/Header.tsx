import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-950 flex justify-center items-center">
            <div className="max-w-[1140px] w-[100%] flex justify-between gap-5 p-5">
                <nav>
                    <ul className="flex gap-5">
                        <li><Link href='/' className="text-white hover:text-blue-500 transition-colors">Início</Link></li>
                        <li><Link href='/artigos' className="text-white hover:text-blue-500 transition-colors">Artigos</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}