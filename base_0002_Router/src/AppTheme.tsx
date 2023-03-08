import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    custom: Palette["primary"];
  }
  interface PaletteOptions {
    custom: PaletteOptions["primary"];
  }
  interface PaletteColor {
    introPageBackground?: string;
    loginPageBackground?: string;
    mainPageBackground?: string;
    errorPageBackground?: string;
  }
  interface SimplePaletteColorOptions {
    introPageBackground?: string;
    loginPageBackground?: string;
    mainPageBackground?: string;
    errorPageBackground?: string;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F6F6F6",
    },
    secondary: {
      main: "#222831",
    },
    custom: {
      main: "#EAFFD0",
      introPageBackground: "#EAFFD0",
      loginPageBackground: "#FCE38A",
      mainPageBackground: "#95E1D3",
      errorPageBackground: "#F38181",
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
