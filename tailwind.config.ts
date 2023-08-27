import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, #fff, #adadad)',
        'gradient-linear': 'linear-gradient(180deg, #fff, #adadad)',

        'body-gradient': 'linear-gradient(180deg, #000 30%, #111 50%, #111 100%)'
      },
    },
  },
  plugins: [],
}
export default config
