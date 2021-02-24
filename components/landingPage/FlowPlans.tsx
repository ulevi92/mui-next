import classes from "*.module.css";
import { Grid, makeStyles, Typography } from "@material-ui/core";

import Circles from "./Circles";
import FlowPlanCards from "./FlowPlanCards";

const useStyles = makeStyles({
  root: {
    position: "relative",
    height: "100vh",
    color: "white",
    width: "100%",
  },

  header: {
    fontWeight: 600,
  },

  cardSubtitle: {},

  cardContainer: {},

  card: {},

  premiumCard: {},

  btn: {},
});

const FlowPlans = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid
        item
        container
        justify='center'
        alignItems='center'
        direction='column'
        sm={12}
      >
        <Typography variant='h2' className={classes.header}>
          Why go premium?
        </Typography>

        <Circles />
        <FlowPlanCards />
      </Grid>
      <Grid item container sm={12}></Grid>
    </Grid>
  );
};

export default FlowPlans;
