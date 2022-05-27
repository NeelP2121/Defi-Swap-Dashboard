import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { CoinMarketProvider } from '../context/Context'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider serverUrl='https://q6a4lvsmggvp.usemoralis.com:2053/server' appId='GWMoqmkxnNZ8NDMstkLr1MmFEusE7A10TD9OTz5s'>
      <CoinMarketProvider>
      <Component {...pageProps} />
      </CoinMarketProvider>
    </MoralisProvider>
    
  )
}

export default MyApp
