import router from "next/router";
import Image from "next/image";

import { useNavbarStyles } from "../../theme/theme";

//import material-ui
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  makeStyles,
  Button,
} from "@material-ui/core";
//import material-ui icons

import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";

//import store
import { useStore } from "../../hooks/StoreContext";

//import components
import RenderMenu from "./Navbar.helper";

const Navbar = () => {
  //contexts
  const store = useStore();

  //styles
  const classes = useNavbarStyles();

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
    <Grid item container xs={12}>
      <AppBar position="sticky">
        <Toolbar>
          <Grid item md={1}>
            <IconButton onClick={onLogoClick}>
              <Image src="/logo.png" width="75" height="75" alt="logo" />
            </IconButton>
          </Grid>

          <Grid item container md={10} alignItems="center">
            <RenderMenu />
          </Grid>

          <Grid item md={1} className={classes.iconBox}>
            <IconButton onClick={onIconClick} className={classes.icon}>
              {store.darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </Grid>
  );
};

export default Navbar;
