import {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://filipesalesaraujo.com/',
            lastModified: new Date(),
        },
        {
            url: 'https://filipesalesaraujo.com/artigos',
            lastModified: new Date(),
        },
        {
            url: 'https://filipesalesaraujo.com/contato',
            lastModified: new Date(),
        },
        {
            url: 'https://filipesalesaraujo.com/artigos/aplicacao-aprendizado-maquina-reducao-desperdicio-alimentos-acacia-saude',
            lastModified: new Date(),
        },
        {
            url: 'https://filipesalesaraujo.com/artigos/implementacao-aprendizado-nao-supervisionado-segmentacao-clientes-banco-beta',
            lastModified: new Date(),
        },
        {
            url: 'https://filipesalesaraujo.com/artigos/implementacao-banco-dados-nosql-industria-automobilistica',
            lastModified: new Date(),
        },
        {
            url: 'https://filipesalesaraujo.com/artigos/web-semantica-ferramenta-gestao-pacientes-diabeticos',
            lastModified: new Date(),
        },
    ]
}