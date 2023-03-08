import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import PageA from "./pages/PageA";
import PageB from "./pages/PageB";

declare module "@mui/material/styles" {
  interface Palette {
    custom: Palette["primary"];
  }
  interface PaletteOptions {
    custom: PaletteOptions["primary"];
  }
  interface PaletteColor {
    pageA?: string;
    pageB?: string;
  }
  interface SimplePaletteColorOptions {
    pageA?: string;
    pageB?: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#F6F6F6",
    },
    secondary: {
      main: "#222831",
    },
    custom: {
      main: "#EAFFD0",
      pageA: "#645CAA",
      pageB: "#BFACE0",
    },
  },
  typography: {
    fontFamily: "Jua",
    fontSize: 50,
    button: {
      fontFamily: "BMDOHYEON",
      fontSize: 20,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `@font-face{font-family: 'Jua'; src:url(${require("./asset/fonts/Jua-Regular.ttf")});}
      @font-face{font-family: 'BMDOHYEON'; src:url(${require("./asset/fonts/BMDOHYEON.ttf")});}`,
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageA />
      <PageB />
      <PageA />
      <PageB />
    </ThemeProvider>
  );
}

export default App;
