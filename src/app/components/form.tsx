'use client'
import emailjs from 'emailjs-com';
import {useRouter} from 'next/router';
import {useState} from "react";
import Link from "next/link";

export default function Form() {

    const [emailSent, setEmailSent] = useState(false);

    async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        try {
            const result = await emailjs.sendForm('service_w4q5fdf', 'template_2117hs3', form, 'WAGy4eHIALN0a1QhN');
            if (result.text === "OK") {
                setEmailSent(true);
            } else {
                console.log(result.text);
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            } else {
                console.log('An unknown error occurred');
            }
        }
    }

    if (emailSent) {
        return <div className="text-white text-xl bg-green-700 text-center rounded-sm p-5">Sua mensagem foi enviada com sucesso. Enquanto aguarda a minha resposta, dê uma olhada em meus <Link href="/artigos" className="font-bold">artigos</Link>!</div>;
    }

    return (
        <form id="emailForm" method="post" className="flex flex-col gap-5" onSubmit={sendEmail}>
            <div className="flex flex-col gap-1">
                <label htmlFor="nome" className="text-white">Nome:</label>
                <input id="nome" type="text" name="nome" className="text-zinc-300 outline-0 bg-zinc-800 border-white border-{1px} border-zinc-800 p-2 rounded-sm transition-colors border-[1px] focus:border-zinc-300"/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-white">E-mail:</label>
                <input id="email" type="email" name="email" className="text-zinc-300 outline-0 bg-zinc-800 border-white border-{1px} border-zinc-800 p-2 rounded-sm transition-colors border-[1px] focus:border-zinc-300"/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="assunto" className="text-white">Assunto:</label>
                <input id="assunto" type="text" name="assunto" className="text-zinc-300 outline-0 bg-zinc-800 border-white border-{1px} border-zinc-800 p-2 rounded-sm transition-colors border-[1px] focus:border-zinc-300"/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="mensagem" className="text-white">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" className="text-zinc-300 outline-0 bg-zinc-800 border-white border-{1px} border-zinc-800 p-2 rounded-sm transition-colors border-[1px] focus:border-zinc-300"></textarea>
            </div>

            <button className="bg-zinc-400 text-zinc-800 flex items-center justify-center p-1 rounded-md font-bold hover:text-zinc-900 hover:bg-zinc-500 transition-colors" type="submit">Enviar</button>
        </form>
    );
}
