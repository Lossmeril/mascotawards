import Mascot from "@/components/mascot";
import MainLayout from "@/layouts/MainLayout";
import "@/styles/globals.scss";
import theme from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence mode="wait" initial={true}>
        <Mascot />
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </ChakraProvider>
  );
}
