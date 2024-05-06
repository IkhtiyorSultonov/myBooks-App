import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HydrationProvider } from "react-hydration-provider";
import NextNProgress from "nextjs-progressbar";
export default function App({ Component, pageProps }: AppProps) {
  return<HydrationProvider>
     <NextNProgress options={{ showSpinner: false }} />
     <Component {...pageProps} />
  </HydrationProvider>;
}
