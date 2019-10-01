import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    }
  },
  MuiInputLabel: {
    // Name of the component ⚛️ / style sheet
    root: {
      // Name of the rule
      fontSize: 50,
      color: "orange",
      "&$focused": {
        // increase the specificity for the pseudo class
        color: "red"
      }
    }
  }
});

export default theme;
