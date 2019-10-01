import React, { Fragment } from "react";
import {
  TextField,
  FormGroup,
  Grid,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  Divider,
  Typography
} from "@material-ui/core";
import { fade, withStyles, makeStyles } from "@material-ui/core/styles";
import theme from "./theme";
import { fontWeight } from "@material-ui/system";

const CountryField = withStyles({
  root: {
    display: "flex",
    marginTop: theme.spacing(0.8),
    marginBottom: theme.spacing(0.8),
    marginLeft: theme.spacing(0.8),
    marginRight: theme.spacing(0.8),
    "& label": {
      transform: "translate(14px, 17px) scale(1)",
      color: "rgba(0, 0, 0, 0.54)"
    }
  }
})(TextField);

const CssTextField = withStyles({
  root: {
    display: "flex",
    marginTop: theme.spacing(0.8),
    marginBottom: theme.spacing(0.8),
    marginLeft: theme.spacing(0.8),
    marginRight: theme.spacing(0.8),
    "& label": {
      transform: "translate(14px, 17px) scale(1)",
      color: "rgba(0, 0, 0, 0.54)"
    }
  }
})(TextField);

const CssTextField2 = withStyles({
  root: {
    display: "flex",
    marginLeft: theme.spacing(0.8),
    marginRight: theme.spacing(0.8),
    "& label": {
      transform: "translate(14px, 17px) scale(1)",
      color: "rgba(0, 0, 0, 0.54)"
    }
  }
})(TextField);

const useStyles2 = makeStyles(theme => ({
  root: {
    border: "0px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fff",
    fontSize: "0.8rem",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff"
    },
    "&$focused": {
      backgroundColor: "#fff"
      // boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      // borderColor: theme.palette.primary.main
    }
  },
  input: {
    height: 4,
    padding: "29px 11px 13px"
  },
  focused: {}
}));

const useStyles = makeStyles(theme => ({
  textfield: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fff",
    fontSize: "0.8rem",
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
    padding: "29px 11px 13px"
  },
  focused: {}
}));

const useStylesCountry = makeStyles(theme => ({
  textfield: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fff",
    fontSize: "0.8rem",
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
    padding: "29px 11px 13px"
  },
  focused: {}
}));

const useStylesGrid = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(0.8),
    marginBottom: theme.spacing(0.8),
    marginLeft: theme.spacing(0.8),
    marginRight: theme.spacing(0.8),
    display: "flex",
    border: "1px solid #e2e2e1",
    width: "100%",
    borderRadius: 4,
    backgroundColor: "#fff",
    fontSize: 16,
    transition: theme.transitions.create(["border-color", "box-shadow"])
  },
  radiogroup: {
    margin: "0 22px",
    position: "relative",
    top: "2px"
  }
}));

const useStylesTypo = makeStyles(theme => ({
  header: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontSize: 14,
    color: "#1337D9",
    fontWeight: "500"
  }
}));

const useStylesForm = makeStyles(theme => ({
  LyveTextfield: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

function LyveTextfieldCountry(props) {
  const classes = useStylesCountry();
  return (
    <CountryField
      InputProps={{ classes, readOnly: true, disableUnderline: true }}
      {...props}
    />
  );
}

function LyveTextfield2(props) {
  const classes = useStyles2();
  return (
    <CssTextField2
      InputProps={{ classes, disableUnderline: true }}
      {...props}
    />
  );
}

function LyveTextfield(props) {
  const classes = useStyles();
  return (
    <CssTextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}

export default function Checkout() {
  const [value, setValue] = React.useState("female");

  const [state, setState] = React.useState({
    shipping: true,
    saveInfo: true
  });
  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleChangeCheckbox = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const classes = useStylesForm();
  const titles = useStylesTypo();
  const grid = useStylesGrid();

  return (
    <Fragment>
      <FormGroup class={classes.container}>
        <Grid container>
          <Grid item xs={12}>
            <Typography gutterBottom class={titles.header}>
              Shipping address
            </Typography>
          </Grid>
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
              label="First Name"
              // defaultValue="react-reddit"
              variant="filled"
              id="reddit-input"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <LyveTextfield
              label="Last Name"
              // defaultValue="react-reddit"
              variant="filled"
              id="reddit-input"
            />
          </Grid>

          <Grid container class={grid.root}>
            <Grid item xs={12} lg={4}>
              <RadioGroup
                class={grid.radiogroup}
                aria-label="position"
                name="position"
                value={value}
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="top"
                  control={<Radio class={grid.formLabel} color="primary" />}
                  label={<span style={{ fontSize: "13px" }}>Home</span>}
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="start"
                  control={<Radio color="primary" />}
                  label={<span style={{ fontSize: "13px" }}>Office</span>}
                  labelPlacement="end"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} lg={8}>
              <LyveTextfield2
                label="Address"
                // defaultValue="react-reddit"
                variant="filled"
              />
            </Grid>
          </Grid>

          <Grid item xs={12} lg={4}>
            <LyveTextfield
              label="City"
              // defaultValue="react-reddit"
              variant="filled"
              id="reddit-input"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <LyveTextfieldCountry
              label="Country/Region"
              defaultValue="Philippines"
              variant="filled"
              id="reddit-input"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <LyveTextfield
              label="Postal Code"
              // defaultValue="react-reddit"
              variant="filled"
              id="reddit-input"
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.shipping}
                  onChange={handleChangeCheckbox("shipping")}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Same as shipping address"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.saveInfo}
                  onChange={handleChangeCheckbox("saveInfo")}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Save this information for next time"
            />
          </Grid>
        </Grid>
      </FormGroup>
    </Fragment>
  );
}
