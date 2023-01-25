import type { AppProps } from "next/app";
import '../styles/globals.scss';
import { SessionProvider } from "next-auth/react";

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
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp;
