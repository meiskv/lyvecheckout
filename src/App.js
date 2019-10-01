import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Checkout from "./Checkout";
import theme from "./theme";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white"
  },
  boxContainer: {
    paddingTop: "3rem"
  }
});

export default function App(props) {
  const classes = useStyles(props);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box className={classes.boxContainer}>
          <Checkout theme={theme} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
