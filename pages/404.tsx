import { useEffect } from "react";
import router from "next/router";
//import style
import { SorryButton, useNotFound } from "../theme/theme";

//import material components
import { SvgIcon } from "@material-ui/core";

import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

const NotFound = () => {
  const classes = useNotFound();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 102500);
  }, []);

  const onButtonClick = () => router.push("/");

  return (
    <div className={classes.root}>
      <SentimentVeryDissatisfiedIcon className={classes.icon} />

      <h1>Oops the page you try to reach is broken or not exist</h1>
      <h2>error 404</h2>
      <SorryButton
        className={classes.btn}
        variant="outlined"
        onClick={onButtonClick}
      >
        turn back to Homepage
      </SorryButton>
    </div>
  );
};

export default NotFound;
