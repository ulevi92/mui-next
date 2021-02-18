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
    width: 200,
    height: 200,
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
    height: 100,
    transition: "all 0.5s ease-in-out",
    padding: 0,
    marginBottom: 0,

    "&.active": {
      background: "linear-gradient(to top, #2178bb, #2d9bef)",
      animation: `$growDown 350ms ${theme.transitions.easing.easeInOut}`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      position: "absolute",
      width: "100%",
    },
  },

  btn: {
    display: "none",
    borderRadius: 0,

    "&.active": {
      display: "block",
      animation: `$itemMove 350ms ${theme.transitions.easing.easeInOut} 300ms`,
    },
  },

  "@keyframes growDown": {
    "0%": {
      transform: "translateY(-50px)",
    },

    "80%": {
      transform: "translateY(15px)",
    },

    "100%": {
      transform: "translateY(0)",
    },
  },

  "@keyframes itemMove": {
    "0%": {
      transform: "translateX(5px)",
    },

    "80%": {
      transform: "translateX(-5px)",
    },

    "100%": {
      transform: "translateX(0)",
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

const useFooterStyles = makeStyles((theme) => ({
  footerContainer: {
    marginTop: 20,
  },

  cardTitle: {
    marginBottom: 15,
  },

  cardItem: {
    cursor: "pointer",
    marginBottom: "15px",
    textTransform: "capitalize",
    transition: "all 0.35s ease-in-out",
    fontWeight: 500,

    "&:hover": {
      color: theme.palette.primary.main,
    },

    "&:last-of-type": {
      marginBottom: 0,
    },
  },

  iconContainer: {
    textAlign: "center",
  },

  socialIcons: {
    marginRight: 20,
    transition: "all 0.35 ease-in-out",

    "&:hover": {
      opacity: 0.65,
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
  useFooterStyles,
  SorryButton,
};
