import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-black flex justify-center items-center border-b-[1px] bottom-2 border-gray-500">
            <div className="max-w-[1140px] w-[100%] flex justify-between gap-5 p-5">
               <Link href='/' className="hidden lg:flex text-gray-300 font-bold">[filipesalesaraujo]</Link>
                <nav>
                    <ul className="flex gap-5">
                        <li><Link href='/' className="text-gray-300 hover:text-white transition-colors">Início</Link></li>
                        <li><Link href='/artigos' className="text-gray-300 hover:text-white transition-colors">Artigos</Link></li>
                        <li><Link href='/contato' className="text-gray-300 hover:text-white transition-colors">Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}