import { extendTheme } from "@chakra-ui/react";

const theme = {
  fonts: {
    body: "Londrina Solid Light, Helvetica, Arial, sans-serif",
    heading: "Londrina Solid Black, sans-serif",
  },

  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
};

export default extendTheme(theme);
