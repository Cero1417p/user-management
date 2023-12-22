import { createTheme } from '@mui/material'

const theme = createTheme( {
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          minWidth: 650,
        },
      },
    },
    /*
    * MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: defaultTheme.palette.action.hover,
          },
        },
      },
    },
    * */
  },
})

export { theme }
