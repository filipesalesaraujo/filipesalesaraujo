import Image from "next/image";
import moment from "moment/moment";
import Link from "next/link";

export default function Ferramentas() {
    return (
        <main className="flex items-center flex-col bg-about bg-cover bg-no-repeat bg-[center_-30px] min-h-screen">
            <section className="max-w-7xl px-5 py-10 flex flex-wrap gap-10 flex-col ">
                <h1 className="text-4xl text-center">
                    <strong className="text-7xl block">Ferramentas</strong>
                </h1>
                <div className="flex gap-5 items-start flex-col md:flex-row">
                    <div className="flex flex-col gap-5 items-start">
                        <p className="text-2xl">Descubra uma vasta gama de ferramentas poderosas, cuidadosamente projetadas para simplificar suas tarefas relacionadas à educação física, análise de dados, conversão de arquivos e cálculos. A suíte abrangente oferece soluções intuitivas para profissionais, estudantes e entusiastas, permitindo que você extraia insights valiosos, planeje seus exercícios, converta facilmente formatos de arquivo e realize cálculos com precisão. Simplifique suas tarefas diárias com ferramentas acessíveis e eficazes, projetadas para tornar sua vida mais fácil.</p>
                    </div>
                </div>
                <div className="flex gap-5 flex-col lg:flex-row">
                    <div className="shadow-md bg-white rounded-2xl w-[100%] flex flex-col justify-between overflow-hidden">
                        <div className="gap-5 p-5 flex flex-col justify-between h-[100%] items-start rounded-md overflow-hidden">
                            <div className="flex flex-col gap-5" >
                                <h1 className="font-bold text-lg">Calculadora de Índice de Massa Corporal (IMC)</h1>
                                <p className="text-lg">A Calculadora de IMC é vital para avaliar a saúde com base em peso e altura, auxiliando na prevenção de problemas de saúde relacionados ao peso.</p>
                            </div>
                            <Link href="/calculadora-imc" className="text-lg border-[1px] border-blue-600 px-5 py-1 rounded-3xl text-white bg-blue-600 hover:opacity-80 transition-opacity">Calcular</Link>
                        </div>
                    </div>

                    <div className="shadow-md bg-white rounded-2xl w-[100%] flex flex-col justify-between overflow-hidden">
                        <div className="gap-5 p-5 flex flex-col justify-between h-[100%] items-start rounded-md overflow-hidden">
                            <div className="flex flex-col gap-5" >
                                <h1 className="font-bold text-lg">Calculadora RCQ</h1>
                                <p className="text-lg">Calcule sua Razão Cintura-Quadril facilmente aqui.</p>
                            </div>
                            <Link href="/calculadora-rcq" className="text-lg border-[1px] border-blue-600 px-5 py-1 rounded-3xl text-white bg-blue-600 hover:opacity-80 transition-opacity">Calcular</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}