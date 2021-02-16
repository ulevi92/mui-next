import router from "next/router";
import Image from "next/image";

//import styles
import { useStyles } from "../../theme/theme";

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
import Search from "./Search";
import NavButton from "./NavButton";
import Dropdown from "./Dropdown";

const useNavStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

const Navbar = () => {
  //contexts
  const store = useStore();

  //styles
  const classes = useStyles();
  const navClasses = useNavStyles();

  //handle clicks
  const onLogoClick = () => router.push("/");
  const onIconClick = () => store.setDarkMode();

  //list for rendering components
  const notLoggedButton = [];
  const LoggedButton = [];
  // const dropdownPaths = ["/", "/"];

  // const renderButtons = store

  //render component with map
  const renderNavContent = store.logged ? "" : "";

  return (
    <Grid item container xs={12}>
      <AppBar position="sticky">
        <Toolbar>
          <Grid item md={1}>
            {/* <IconButton onClick={onLogoClick}> */}
            <Image src="/logo.png" width="75" height="75" alt="logo" />
            {/* </IconButton> */}
          </Grid>

          <Grid item container md={10}>
            <Grid item md={11}></Grid>
            <Grid item md={1}>
              <Dropdown />
            </Grid>
          </Grid>

          <Grid item md={1}>
            <IconButton onClick={onIconClick} className={classes.transition}>
              {store.darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={navClasses.offset} />
    </Grid>
  );
};

export default Navbar;
