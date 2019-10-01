import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Fields from "./Fields";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  grid: {},
  paper: {
    padding: theme.spacing(2),
    textAlign: "center"
  }
}));

export default function Checkout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Fields />
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
