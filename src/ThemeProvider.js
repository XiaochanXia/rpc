import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { jaJP } from '@mui/material/locale'

const theme = createTheme({
    palette: {
        primary: {
            main: '#CA2420',
        },
        secondary: {
            main: '#28292C'
        },
    },
    jaJP,
});

export default function ThemeProvider(props) {
    return <MuiThemeProvider theme={theme}
    >
        {props.children}
    </MuiThemeProvider>
}