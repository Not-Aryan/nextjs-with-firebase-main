// import { ThemeProvider, CSSReset } from "@chakra-ui/core";
// import { AuthProvider } from "../auth";
// function MyApp({ Component, pageProps }) {
//   return (
//     <ThemeProvider>
//       <CSSReset />
//       <AuthProvider>
//         <Component {...pageProps} />
//       </AuthProvider>
//     </ThemeProvider>
//   );
// }

// export default MyApp;
import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;