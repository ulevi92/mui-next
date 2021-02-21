import { useEffect } from "react";
import router from "next/router";
//import style
import { SorryButton } from "../theme/theme";

//import material components
import { makeStyles, SvgIcon, Typography } from "@material-ui/core";

import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
  },

  icon: {
    marginBlock: 50,
    width: 200,
    height: 200,
  },

  btn: {
    borderRadius: 8,
    marginBottom: 40,
  },

  header: {
    marginBottom: 40,
  },
}));

const NotFound = () => {
  const classes = useStyles();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const onButtonClick = () => router.push("/");

  return (
    <div className={classes.root}>
      <SvgIcon className={classes.icon}>
        <SentimentVeryDissatisfiedIcon />
      </SvgIcon>

      <Typography variant="h3" className={classes.header}>
        Oops the page you try to reach is broken or not exist
      </Typography>
      <Typography color="error" variant="h4" className={classes.header}>
        error 404
      </Typography>

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
