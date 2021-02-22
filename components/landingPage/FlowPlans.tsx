import classes from "*.module.css";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: "relative",
    height: "100vh",
    color: "white",
    width: "100%",
  },

  header: {
    color: "white",
    fontWeight: 600,
  },

  cicleContainer: {
    marginTop: 40,
    marginBottom: 20,
  },

  circle: {
    width: 75,
    height: 75,
    borderRadius: 50,
    background: "#363535",
    marginRight: 20,

    "&:last-of-type": {
      marginRight: 0,
    },
  },

  cicleText: {},

  cicleSubtitle: {},

  cardSubtitle: {},

  cardContainer: {},

  card: {},

  premiumCard: {},

  btn: {},
});

const FlowPlans = () => {
  const cicleObject = {
    cicleOne: {
      title: "Offline mode.",
      text: "Save and listen anywhere.",
    },

    cicleTwo: {
      title: "High quality audio.",
      text: "Enjoy the full range of sound.",
    },

    cicleThree: {
      title: "No ads.",
      text: "Enjoy nonstop music.",
    },

    cicleFour: {
      title: "Unlimited skips.",
      text: "Just tap skip.",
    },
  };

  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        direction="column"
        sm={12}
      >
        <Typography>Why go premium?</Typography>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.cicleContainer}
        >
          <div className={classes.circle}>
            <Typography></Typography>
            <Typography></Typography>
          </div>
          <div className={classes.circle}>
            <Typography></Typography>
            <Typography></Typography>
          </div>
          <div className={classes.circle}>
            <Typography></Typography>
            <Typography></Typography>
          </div>
          <div className={classes.circle}>
            <Typography></Typography>
            <Typography></Typography>
          </div>
        </Grid>
      </Grid>
      <Grid item container sm={12}></Grid>
    </Grid>
  );
};

export default FlowPlans;
