import { useEffect } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import * as gtag from "../lib/utils/gtag";

// Provides Google Analytics
const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
};

export default App;