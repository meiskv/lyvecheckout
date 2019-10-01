import React, { Fragment } from "react";
import { TextField, FormGroup, Grid } from "@material-ui/core";
import { fade, withStyles, makeStyles } from "@material-ui/core/styles";
import theme from "./theme";

const CssTextField = withStyles({
  root: {
    display: "flex",
    marginTop: theme.spacing(0.8),
    marginBottom: theme.spacing(0.8),
    marginLeft: theme.spacing(0.8),
    marginRight: theme.spacing(0.8),
    "& label": {
      transform: "translate(14px, 15px) scale(1)",
      color: "rgba(0, 0, 0, 0.54)"
    },
    "& label.Mui-focused": {
      color: "#737373",
      fontSize: "0.9rem"
    },
    "& label.NonOutlined": {
      border: "5px solid #e2e2e1"
    },
    "& label.MuiInputLabel-shrink-139": {
      color: "#737373",
      fontSize: "0.9rem"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green"
      }
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  textfield: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fcfcfb",
    fontSize: 16,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff"
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main
    }
  },
  input: {
    height: 4,
    padding: "27px 10px 13px"
  },
  focused: {}
}));

const useStylesForm = makeStyles(theme => ({
  LyveTextfield: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

function LyveTextfield(props) {
  const classes = useStyles();
  return (
    <CssTextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}

export default function Checkout() {
  const classes = useStylesForm();
  return (
    <Fragment>
      <FormGroup class={classes.container}>
        <Grid container>
          <Grid item xs={12}>
            <LyveTextfield
              label="Email Address"
              // defaultValue="react-reddit"
              variant="filled"
              id="reddit-input"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <LyveTextfield
              xs={7}
              label="First Name"
              // defaultValue="react-reddit"
              variant="filled"
              id="reddit-input"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <LyveTextfield
              xs={7}
              label="Last Name"
              // defaultValue="react-reddit"
              variant="filled"
              id="reddit-input"
            />
          </Grid>

          <Grid item xs={12} lg={4}>
            <LyveTextfield
              xs={7}
              label="City"
              // defaultValue="react-reddit"
              variant="filled"
              id="reddit-input"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <LyveTextfield
              xs={7}
              label="Country/Region"
              // defaultValue="react-reddit"
              variant="filled"
              id="reddit-input"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <LyveTextfield
              xs={7}
              label="Address"
              // defaultValue="react-reddit"
              variant="filled"
            />
          </Grid>

          <Grid item xs={12} lg={4}>
            <LyveTextfield
              xs={7}
              label="City"
              // defaultValue="react-reddit"
              variant="filled"
              id="reddit-input"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <LyveTextfield
              xs={7}
              label="Country/Region"
              // defaultValue="react-reddit"
              variant="filled"
              id="reddit-input"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <LyveTextfield
              xs={7}
              label="Postal Code"
              // defaultValue="react-reddit"
              variant="filled"
              id="reddit-input"
            />
          </Grid>
        </Grid>
      </FormGroup>
    </Fragment>
  );
}
