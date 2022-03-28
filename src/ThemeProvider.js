import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { jaJP } from '@mui/material/locale'

const theme = responsiveFontSizes(createTheme({
    palette: {
        primary: {
            main: '#CA2420',
        },
        secondary: {
            main: '#28292C'
        },
    },
    typography: {
        // In Chinese and Japanese the characters are usually larger,
        // so a smaller fontsize may be appropriate.
        fontSize: 12,
      },
    jaJP,
}));

export default function ThemeProvider(props) {
    return <MuiThemeProvider theme={theme}
    >
        {props.children}
    </MuiThemeProvider>
}