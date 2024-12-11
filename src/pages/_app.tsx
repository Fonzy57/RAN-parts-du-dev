import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

// FONTS
import { Inter } from "next/font/google";
import Head from "next/head";

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${fontInter.variable} font-inter`}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta charSet="UTF-8" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
