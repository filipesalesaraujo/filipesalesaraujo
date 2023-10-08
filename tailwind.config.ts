import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'marca-texto': '#FFEB3B'
            },
            backgroundImage: {
                'black-white': 'linear-gradient(to right, black 17%, white 15%)',
                'purple-gradient': 'linear-gradient(161deg, #f687b3, #805ad5)',
                'blue-gradient': 'linear-gradient(161deg, #63b3ed, #2c5282)',
            },
        },
    },
    plugins: [],
}
export default config
