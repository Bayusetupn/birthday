import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "800"],
  style: ["normal", "italic"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Love u sayang</title>
      <link href="/favicon.png" rel="icon" />
    </Head>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
