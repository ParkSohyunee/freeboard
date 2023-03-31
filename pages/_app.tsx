// import '@/styles/globals.css'
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { GlobalStyles } from "../src/commons/globalStyles";
import ApolloSettingPage from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloSettingPage>
        <>
          <Global styles={GlobalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSettingPage>
    </>
  );
}
