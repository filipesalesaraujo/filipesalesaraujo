import {Open_Sans} from 'next/font/google'

const openSans = Open_Sans({subsets: ['latin']})

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className={openSans.className}>
        <Component {...pageProps} />
      </div>
  )
}
