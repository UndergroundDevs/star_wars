import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from 'assets/styles/global'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import myTheme from '../../contexts/styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>leaning nextjs</title>
        <meta name="theme-color" content="" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CSSReset />
      <GlobalStyle />
      <ChakraProvider theme={myTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App