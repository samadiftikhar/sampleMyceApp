import theme from "../components/theme";
import { ThemeProvider } from "@mui/styles";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <main>
        <Component key={router.route} {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
