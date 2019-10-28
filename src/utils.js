import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import blueGrey from "@material-ui/core/colors/blueGrey";
import * as commonColors from "@material-ui/core/colors/common";

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#6B7A8F"
    },
    secondary: {
      main: "#FF811d"
    },
    background: {
      default: grey[100]
    }
  },
  overrides: {
    MuiButton: {
      containedSecondary: {
        color: commonColors.default.white
      }
    }
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600
  }
});

export const selectTheme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: blueGrey[100],
    primary50: blueGrey[300],
    primary75: blueGrey[500],
    primary: blueGrey[700]
  }
});
