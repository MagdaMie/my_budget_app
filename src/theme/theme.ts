import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#297563" },
    secondary: { main: "#243733" },
    error: { main: "#e53935" },
    warning: { main: "#ffb74d" },
    info: { main: "#64b5f6" },
    success: { main: "#81c784" },
  },
  typography: {
    fontFamily: "\"Lato\", \"Verdana\", \"Geneva\", sans-serif", 
    h1: {
      fontFamily: "\"Montserrat\", \"Helvetica\", \"Arial\", sans-serif",
    },
    h2: {
      fontFamily: "\"Montserrat\", \"Helvetica\", \"Arial\", sans-serif",
    },
    h3: {
      fontFamily: "\"Montserrat\", \"Helvetica\", \"Arial\", sans-serif",
    },
    h4: {
      fontFamily: "\"Montserrat\", \"Helvetica\", \"Arial\", sans-serif",
    },
    h5: {
      fontFamily: "\"Montserrat\", \"Helvetica\", \"Arial\", sans-serif",
    },
    h6: {
      fontFamily: "\"Montserrat\", \"Helvetica\", \"Arial\", sans-serif",
    },
  },
});