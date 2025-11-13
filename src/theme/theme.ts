import { createTheme } from "@mui/material/styles";

const baseFont = '"Lato", "Verdana", "Geneva", sans-serif';
const headingFont = '"Montserrat", "Helvetica", "Arial", sans-serif';

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
    fontFamily: baseFont,
    h1: { fontFamily: headingFont },
    h2: { fontFamily: headingFont },
    h3: { fontFamily: headingFont },
    h4: { fontFamily: headingFont },
    h5: { fontFamily: headingFont },
    h6: { fontFamily: headingFont },
  },
});
