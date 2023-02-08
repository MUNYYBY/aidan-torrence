import "@/styles/globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "next-auth/client";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider session={pageProps.session}>
        <ToastContainer />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
