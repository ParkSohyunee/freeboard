// import '@/styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { AppProps } from "next/app"

const client = new ApolloClient({
  uri: 'http://backendonline.codebootcamp.co.kr/graphql',
  cache: new InMemoryCache()
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}