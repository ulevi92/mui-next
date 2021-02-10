import { useEffect } from "react";
import router from "next/router";
//import style
import { SorryButton, useStyles } from "../theme/theme";

//import material icon
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

const AccessDenied = () => {
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3500);
  }, []);

  const onButtonClick = () => router.push("/");

  return (
    <div className={classes.denied}>
      <SentimentVeryDissatisfiedIcon className={classes.iconLarge} />
      <h1>Sorry, You are not allowed to access this page</h1>
      <h2>For more information, You're welcome to contact us</h2>
      <SorryButton className={classes.btn} onClick={onButtonClick}>
        turn back to Homepage
      </SorryButton>
    </div>
  );
};

export default AccessDenied;
