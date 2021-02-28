import { FC } from "react";
import router from "next/router";

import { Button, Grid, makeStyles } from "@material-ui/core";

//import store
import { useStore } from "../../hooks/StoreContext";
import Search from "./Search";
import Dropdown from "./Dropdown";

const useStyles = makeStyles({
  loggedBtn: {
    marginRight: 4,

    "&:last-of-type": {
      marginRight: 0,
    },
  },

  centerButtons: {
    marginRight: 4,
    borderRadius: 0,

    "&:last-of-type": {
      marginRight: 0,
    },
  },

  authButtons: {
    marginRight: 24,
    borderRadius: 0,

    "&:last-of-type": {
      marginRight: 0,
    },
  },
});

const RenderMenu: FC = () => {
  const store = useStore();
  const classes = useStyles();
  //render not logged in menu

  const centerButtons = ["download", "help"].map((item, i) => (
    <Button
      key={i}
      className={classes.centerButtons}
      onClick={() => router.push("/")}
    >
      {item}
    </Button>
  ));
  const notLoggedButtons = ["login", "signup"].map((item, i) => (
    <Button
      key={i}
      className={classes.authButtons}
      onClick={() => router.push(`/${item}`)}
    >
      {item}
    </Button>
  ));

  //render logged in menu

  const LoggedButtons = ["home", "browse", "library", "about"].map(
    (item, i) => (
      <Button
        key={i}
        onClick={() => router.push(`/${item}`)}
        className={classes.loggedBtn}
      >
        {item}
      </Button>
    )
  );

  const renderButtons = store.logged ? (
    <>
      <Grid item md={8}>
        {LoggedButtons}
      </Grid>
      <Grid item md={2}>
        <Search />
      </Grid>
      <Grid item md={1} />
      <Grid item md={1}>
        <Dropdown />
      </Grid>
    </>
  ) : (
    <>
      <Grid item md={5} />
      <Grid item md={5}>
        {centerButtons}
      </Grid>
      <Grid item md={2}>
        {notLoggedButtons}
      </Grid>
    </>
  );

  return <>{renderButtons}</>;
};

export default RenderMenu;
