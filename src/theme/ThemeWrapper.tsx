import { theme } from "./theme";
import { ThemeProvider, CssBaseline} from "@mui/material";

type ThemeWrapperProps = {
    children: React.ReactNode;
}

const ThemeWrapper = ({children}:ThemeWrapperProps) => {
    
    return ( 
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
    );
};
 
export default ThemeWrapper;