import {Metadata} from "next";
import {ContactPage, WithContext} from "schema-dts";

import Form from "@/app/components/Form";

export const metadata: Metadata = {
    title: 'Contato - Filipe Sales Araujo',
    description: 'Entre em contato com Filipe Sales Araujo. Estou sempre aberto a ouvir feedbacks, propostas de projetos e outras oportunidades.',
    keywords: 'Filipe Sales Araujo, contato, feedback, proposta de projeto, oportunidades',
    robots: {
        follow: true,
        index: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
        },
    },
    alternates: {
        canonical: 'https://filipesalesaraujo.com/contato',
        languages: {
            'pt-BR': 'https://filipesalesaraujo.com/contato'
        }
    },
    category: 'technology',
    openGraph: {
        title: 'Contato - Filipe Sales Araujo',
        description: 'Entre em contato com Filipe Sales Araujo. Estou sempre aberto a ouvir feedbacks, propostas de projetos e outras oportunidades.',
        type: 'website',
        url: 'https://filipesalesaraujo.com/contato',
        images: [
            {
                url: 'https://filipesalesaraujo.com/images/open-graph-image.webp',
                width: 1024,
                height: 1024,
            }
        ],
        locale: "pt_BR",
        siteName: 'Filipe Sales Araujo'
    }
}

const jsonLd: WithContext<ContactPage> = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contato - Filipe Sales Araujo',
    description: 'Entre em contato com Filipe Sales Araujo. Estou sempre aberto a ouvir feedbacks, propostas de projetos e outras oportunidades.',
    url: 'https://filipesalesaraujo.com/contato',
    potentialAction: {
        '@type': 'CommunicateAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://filipesalesaraujo.com/contato',
            actionPlatform: ['https://schema.org/DesktopWebPlatform', 'https://schema.org/IOSPlatform', 'https://schema.org/AndroidPlatform']
        },
        name: 'Enviar mensagem'
    },
    publisher: {
        '@type': 'Person',
        name: 'Filipe Sales Araujo'
    }
};

export default function Contato() {
    return (
        <div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
            <main>
                <div className="flex items-center justify-center">
                    <div className="max-w-[1140px] w-[100%] p-5 flex flex-col gap-5">
                        <h1 className="text-3xl uppercase text-white">Contato</h1>
                        <p className="text-white">Use este formulário para se conectar comigo. Estou aqui para responder a qualquer pergunta ou comentário que você possa ter. Aguardo ansiosamente sua mensagem!</p>
                        <Form/>
                    </div>
                </div>
            </main>
        </div>
    )
}