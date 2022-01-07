import "../styles/globals.css";
import { NativeBaseProvider } from "native-base";

function MyApp({ Component, pageProps }: any) {
  return (
    <NativeBaseProvider isSSR>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default MyApp;
