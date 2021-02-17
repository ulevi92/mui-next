import { FC } from "react";
import router from "next/router";

import { Button, Grid } from "@material-ui/core";

//import style
import { useNotLoggedStyle, useLoggedStyle } from "../../theme/theme";

//import store
import { useStore } from "../../hooks/StoreContext";
import Search from "./Search";
import Dropdown from "./Dropdown";

const RenderMenu: FC = () => {
  const store = useStore();

  //render not logged in menu
  const notLoggedStyles = useNotLoggedStyle();

  const centerButtons = ["download", "help"].map((item, i) => (
    <Button
      key={i}
      className={notLoggedStyles.centerButtons}
      onClick={() => router.push("/")}
    >
      {item}
    </Button>
  ));
  const notLoggedButtons = ["login", "sign in"].map((item, i) => (
    <Button
      key={i}
      className={notLoggedStyles.authButtons}
      onClick={() => router.push(`/${item}`)}
    >
      {item}
    </Button>
  ));

  //render logged in menu

  const loggedStyles = useLoggedStyle();

  const LoggedButtons = ["home", "browse", "library", "about"].map(
    (item, i) => (
      <Button
        key={i}
        onClick={() => router.push(`/${item}`)}
        className={loggedStyles.btn}
      >
        {item}
      </Button>
    )
  );

  const renderButtons = !store.logged ? (
    <Grid item container>
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
    </Grid>
  ) : (
    <Grid item container>
      <Grid item container>
        <Grid item md={5} />
        <Grid item md={5}>
          {centerButtons}
        </Grid>
        <Grid item md={2}>
          {notLoggedButtons}
        </Grid>
      </Grid>
    </Grid>
  );

  return <>{renderButtons}</>;
};

export default RenderMenu;
