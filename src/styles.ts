import { createTheme } from '@mui/material/styles'

export const muiTheme = createTheme({
  typography: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },
  palette: {
    primary: {
      main: '#21B6A8',
      dark: '#3D8479',
    },
    border: {
      main: "#616161",
      light: "#EFEFEF"
    }
  }
})

declare module "@mui/material/styles" {
  interface Palette {
    border: { main: string, light: string };
  }
  interface PaletteOptions {
    border: { main: string, light: string };
  }
}