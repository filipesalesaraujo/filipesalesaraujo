import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            keyframes: {
                pulse: {
                    '0%, 100%': {
                        borderColor: '#059669',  // verde 500
                        color: '#059669',        // verde 500
                    },
                    '50%': {
                        borderColor: '#2C7A7B',  // verde 800
                        color: '#2C7A7B',        // verde 800
                    },
                },
            },
            animation: {
                pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(ellipse at center, #fff, #adadad)',
                'gradient-linear': 'linear-gradient(180deg, #fff, #adadad)',

                'body-gradient': 'linear-gradient(180deg, #000 30%, #111 50%, #111 100%)',

                'monitoramento-gradient': 'linear-gradient(to right, #D3D3D3, #696969)',
                'analise-gradient': 'linear-gradient(to right, #FF6D00, #FFC107)',
                'velocidade-gradient': 'linear-gradient(to right, #42A5F5, #0D47A1)'
            },

        },
    },
    plugins: [],
}
export default config
