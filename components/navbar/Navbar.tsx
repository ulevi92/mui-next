import router from "next/router";
import Image from "next/image";

import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
import { useStore } from "../../hooks/ContextStore";

import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { useStyles } from "../../theme/theme";

const useNavStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

const Navbar = () => {
  const store = useStore();

  const routeToHome = () => router.push("/");

  const navClasses = useNavStyles();
  const classes = useStyles();

  const onIconClick = () => store.setDarkMode();

  const renderButtons = store.logged ? "" : "";

  return (
    <Grid item container xs={12}>
      <AppBar position="sticky">
        <Toolbar>
          <Grid item md={1}>
            <IconButton onClick={routeToHome}>
              <Image src="/logo.png" width="75" height="75" alt="logo" />
            </IconButton>
          </Grid>
          <Grid item md={10}></Grid>
          <Grid item md={1}>
            <IconButton onClick={onIconClick} className={classes.transition}>
              {`` && store.darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={navClasses.offset} />
    </Grid>
  );
};

export default Navbar;
