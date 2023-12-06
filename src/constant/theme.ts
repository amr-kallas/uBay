import { createTheme } from '@mui/material'
import themeConstants from './themeConstants.ts'
declare module '@mui/material/styles' {
  interface PaletteColor {
    ['50']: string
    ['100']: string
    ['200']: string
    ['300']: string
    ['400']: string
    ['500']: string
    ['600']: string
    ['700']: string
    ['800']: string
    ['900']: string
    ['`900`']: string
  }
}
const theme = createTheme({
  palette: {
    primary: {
      main: themeConstants.primary,
      '50': themeConstants.primary05,
      '100': themeConstants.primary1,
      '200': themeConstants.primary2,
      '300': themeConstants.primary3,
      '400': themeConstants.primary4,
      '500': themeConstants.primary5,
      '600': themeConstants.primary6,
      '700': themeConstants.primary7,
      '800': themeConstants.primary8,
      '900': themeConstants.primary9,
    },
    secondary: {
      main: themeConstants.secondary,
      '50': themeConstants.secondary05,
      '100': themeConstants.secondary1,
      '200': themeConstants.secondary2,
      '300': themeConstants.secondary3,
      '400': themeConstants.secondary4,
      '500': themeConstants.secondary5,
      '600': themeConstants.secondary6,
      '700': themeConstants.secondary7,
      '800': themeConstants.secondary8,
      '900': themeConstants.secondary9,
    },
    background: {
      default: themeConstants.background,
    },
  },
  typography: {
    fontFamily: 'MontserratArabic',
    fontSize:12
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "::-webkit-scrollbar": {
          width: 4,
          height: 4,
        },
        "::-webkit-scrollbar-track": {
          background: themeConstants.primary05,
        },
        "::-webkit-scrollbar-thumb": {
          background: themeConstants.primary4,
          borderRadius: 1,
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: themeConstants.primary9,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '12px !important',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: themeConstants.primary9,
          "&.Mui-focused": {
            color: themeConstants.primary,
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: themeConstants.primary,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius:themeConstants.borderRadius
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: themeConstants.primary,
        },
      },
    },
  },
})
export default theme
