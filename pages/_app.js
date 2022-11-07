import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Layout } from "../components";
import { StateContect } from "../context/stateContext";
function MyApp({ Component, pageProps }) {
  return (
    <StateContect>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContect>
  );
}

export default MyApp;
