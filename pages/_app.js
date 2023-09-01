import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
