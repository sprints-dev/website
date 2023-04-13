import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "@/styles/globals.css";
import Script from 'next/script';
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }) {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-TLPBQHCZ0Z" />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TLPBQHCZ0Z', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default appWithTranslation(App)