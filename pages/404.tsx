import { useEffect } from "react";
import router from "next/router";
//import style
import { SorryButton, useStyles } from "../theme/theme";

//import material components
import { Button } from "@material-ui/core";

import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

const NotFound = () => {
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3500);
  }, []);

  const onButtonClick = () => router.push("/");

  return (
    <div className={classes[404]}>
      <SentimentVeryDissatisfiedIcon className={classes.iconLarge} />
      <h1>Oops the page you try to reach in broken or not exist</h1>
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
