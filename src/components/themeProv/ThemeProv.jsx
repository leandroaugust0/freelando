import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    branco: "",
    atencao: "",
    focus: "",
    primaries: {
      a: "#5754ED",
      b: "",
      c: "",
    },
    secondaries: {
      a: "#EBEAF9",
      b: "",
      c: "",
    },
    neutrals: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    dark: {
      a: "",
      b: "",
    },
  },
  spacing: {
    s: "16px",
    l: "32px",
  },
  fontFamily: "'Montserrat', sans-serif"
};

export const ThemeProv = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
