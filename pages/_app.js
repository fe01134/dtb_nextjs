import "bulma/css/bulma.min.css"
//import '../styles/globals.css'
//import "@emotion/styled"
//import Box from "@mui/material/Box"

import { GA_TRACKING_ID } from "../src/lib/utils/gtag";

console.debug ("GA_TRACKING_ID");
console.debug (GA_TRACKING_ID);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps}> 
  </Component>
}

export default MyApp
