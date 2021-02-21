import { useEffect } from "react";
import router from "next/router";
//import style
import { SorryButton } from "../theme/theme";

//import material icon
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import { makeStyles, Typography } from "@material-ui/core";

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

const AccessDenied = () => {
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 153500);
  }, []);

  const onButtonClick = () => router.push("/");

  return (
    <div className={classes.root}>
      <SentimentVeryDissatisfiedIcon className={classes.icon} />

      <Typography variant="h3" className={classes.header}>
        Sorry, You are not allowed to access this page
      </Typography>
      <Typography variant="h4" className={classes.header}>
        For more information, You're welcome to contact us
      </Typography>

      <SorryButton className={classes.btn} onClick={onButtonClick}>
        turn back to Homepage
      </SorryButton>
    </div>
  );
};

export default AccessDenied;
