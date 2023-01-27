import type { AppProps } from "next/app";
import '../styles/globals.scss';
import { SessionProvider } from "next-auth/react";
import { ShopContextProvider } from "../components/context/ShopContext";

export type SessionAppProps = AppProps &{
  pageProps: {
    session: any;
  }
}

function MyApp(
  {
    Component,
    pageProps: {
      session,
      ...pageProps
    }
  }: SessionAppProps) {
  return (
    <ShopContextProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ShopContextProvider>
  )
}

export default MyApp;
