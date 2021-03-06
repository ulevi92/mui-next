import router from "next/router";
import Image from "next/image";

//import material-ui
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
//import material-ui icons

import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";

//import store
import { useStore } from "../../hooks/StoreContext";

//import components
import RenderMenu from "./Navbar.helper";

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: "center",
  },

  logo: {
    cursor: "pointer",
  },

  iconBox: {
    textAlign: "end",
  },

  icon: {
    transition: "all 0.35s ease-in-out",
  },
}));

const Navbar = () => {
  //contexts
  const store = useStore();

  //styles
  const classes = useStyles();

  //handle onClick
  const onLogoClick = () => router.push("/");
  const onIconClick = () => store.setDarkMode();

  //list for rendering components
  const notLoggedButton = [];
  const LoggedButton = [];
  // const dropdownPaths = ["/", "/"];

  //render component with map
  const renderNavContent = store.logged ? "" : "";

  return (
    <>
      <AppBar position='relative'>
        <Toolbar>
          <Grid item md={1}>
            <Image
              src='/logo.png'
              width='75'
              height='75'
              alt='logo'
              className={classes.logo}
              onClick={onLogoClick}
            />
          </Grid>

          <Grid item container md={10} alignItems='center'>
            <RenderMenu />
          </Grid>

          <Grid item md={1} className={classes.iconBox}>
            <IconButton onClick={onIconClick} className={classes.icon}>
              {store.darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
