import { Html, Head, Main, NextScript } from 'next/document'
//Provides Google Analytics

import { GA_TRACKING_ID } from "../src/lib/utils/gtag";
console.debug ("GA_TRACKING_ID");
console.debug (GA_TRACKING_ID);

export default function Document() {
{
  console.debug ("GA_TRACKING_ID");
  console.debug (GA_TRACKING_ID);
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}