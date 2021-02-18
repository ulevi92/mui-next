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

const useStyles = makeStyles({
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
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const useAboutStyles = makeStyles({
  h1: {
    textAlign: "center",
    marginTop: 45,
    marginBottom: 45,
  },
});

const useNavbarStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  container: {
    alignItems: "center",
  },

  iconBox: {
    textAlign: "end",
  },

  icon: {
    transition: "all 0.35s ease-in-out",
  },
}));

const useDropdownStyles = makeStyles((theme) => ({
  ul: {
    display: "none",
    animation: ` $openMenu 300ms ${theme.transitions.easing.easeInOut}`,
    height: 100,

    "&.active": {
      display: "block",
      position: "absolute",
      width: "100%",
      background: "red",
    },
  },
  li: {
    listStyle: "none",
    display: "none",

    "&.active": {
      display: "block",
    },
  },
  "@keyframs openMenu": {
    "0%": {
      transform: "scale(0)",
    },
    "80%": {
      transform: "scale(1.2)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
}));

const useNotLoggedStyle = makeStyles((theme) => ({
  centerButtons: {
    marginRight: 4,

    "&:last-of-type": {
      marginRight: 0,
    },
  },
  authButtons: {
    marginRight: 24,

    "&:last-of-type": {
      marginRight: 0,
    },
  },
}));

const useLoggedStyle = makeStyles((theme) => ({
  btn: {
    marginRight: 4,

    "&:last-of-type": {
      marginRight: 0,
    },
  },
}));

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

export {
  theme,
  darkTheme,
  useStyles,
  useNavbarStyles,
  useAboutStyles,
  useDropdownStyles,
  useNotLoggedStyle,
  useLoggedStyle,
  SorryButton,
};
