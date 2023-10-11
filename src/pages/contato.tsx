export default function Contato() {
    return (
        <main className="flex items-center flex-col min-h-screen">
            <section className="max-w-7xl px-5 py-10 flex flex-wrap gap-10 flex-col ">
                <h1 className="text-4xl font-bold">Contato</h1>
                <p className="text-lg">
                    Para perguntas, comentários ou consultas, estou sempre à disposição. Se desejar um contato direto, pode  <a className="text-blue-500 hover:opacity-80 transition-opacity" href="https://wa.me/5511984583529">clicar aqui</a> para iniciar uma conversa comigo pelo WhatsApp ou enviar uma mensagem para<a className="text-blue-500 hover:opacity-80 transition-opacity" href="mailto:filipesalesaraujo@gmail.com"> filipesalesaraujo@gmail.com</a>. Além disso, convido você a conhecer mais sobre a minha trajetória e a conectar-se comigo no <a className="text-blue-500 hover:opacity-80 transition-opacity" href="https://www.linkedin.com/in/filipesales21/">LinkedIn</a>. Sua opinião é valiosa e agradeço antecipadamente por dedicar um momento do seu tempo para entrar em contato.
                </p>
            </section>
        </main>
    )
}