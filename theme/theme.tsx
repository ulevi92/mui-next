import { Button } from "@material-ui/core";
import {
  createMuiTheme,
  makeStyles,
  withStyles,
} from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

// makeStyle = create classes
const useStyles = makeStyles({
  transition: {
    transition: "all 0.35s ease-in-out",
  },

  btn: {
    borderRadius: 0,
  },

  iconLarge: {
    width: 150,
    height: 150,
  },

  404: {
    height: "85vh",
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "#000",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  denied: {
    height: "85vh",
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "#000",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  about: {
    background: "#000",
    height: "100vh",
  },
});

// withStyle = create components

const SorryButton = withStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    color: "#fff",
    borderRadius: "20px",
    marginTop: "10px",
    transition: "all 0.35s ease-in-out",
    "&:hover": {
      background: theme.palette.primary.dark,
      color: "rgb(193, 193, 193)",
    },
  },
}))(Button);

export { theme, darkTheme, useStyles, SorryButton };
