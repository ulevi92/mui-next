import { Button } from "@material-ui/core";
import {
  createMuiTheme,
  makeStyles,
  withStyles,
} from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2d9bef",
    },
    secondary: {
      main: "#9b2def",
    },
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#161a1a",
    },
    primary: {
      main: "#2dceef",
    },
    secondary: {
      main: "#9b2def",
    },
  },
});

// makeStyle = create classes styles

// withStyle = create components styles

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

const PremiumButton = withStyles((theme) => ({
  root: {
    color: "white",
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderLeft: "none",
    borderRight: "none",
    transition: "all 0.35s ease-in-out",
    fontWeight: 600,

    "&:hover": {
      opacity: 0.5,
    },
  },
}))(Button);

const FreeButton = withStyles((theme) => ({
  root: {
    color: "black",
    opacity: 0.65,
    borderLeft: "none",
    borderRight: "none",
    transition: "all 0.35s ease-in-out",
    fontWeight: 600,

    "&:hover": {
      opacity: 0.35,
    },
  },
}))(Button);

export { theme, darkTheme, SorryButton, PremiumButton, FreeButton };
