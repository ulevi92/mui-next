import { FC } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

import GetAppIcon from "@material-ui/icons/GetApp";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const useStyles = makeStyles((theme) => ({
  cicleContainer: {
    marginTop: 40,
    marginBottom: 20,
    marginRight: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.35s ease-in-out",

    "&:last-of-type": {
      marginRight: 0,
    },

    "&:hover": {
      opacity: 0.65,
    },
  },

  circle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#363535",
    color: "white",
    width: 100,
    height: 100,
    borderRadius: "50%",
    // marginRight: 20,
    pointerEvents: "none",

    "&:last-of-type": {
      marginRight: 0,
    },
  },

  circleIcon: {
    width: 75,
    height: 75,
    fill: theme.palette.primary.main,
  },

  circleTitle: {
    textAlign: "center",
    fontWeight: 600,
    marginBlock: 5,
  },

  circleSubtitle: {
    textAlign: "center",
    color: "white",
    opacity: 0.7,
    fontWeight: 200,
  },
}));

type CircleType = {
  title: string;
  text: string;
}[];

const Circles: FC = () => {
  const classes = useStyles();

  const CircleArr: CircleType = [
    { title: "Offline mode", text: "Save and listen anywhere." },
    { title: "High quality audio", text: "Enjoy the full range of sound." },
    { title: "No ads", text: "Enjoy nonstop music." },
    { title: "Unlimited skips", text: "Just tap skip." },
  ];

  const renderCircles = CircleArr.map((item, i) =>
    i === 0 ? (
      <Grid item key={i} className={classes.cicleContainer}>
        <div className={classes.circle}>
          <GetAppIcon className={classes.circleIcon} />
        </div>
        <Typography variant="h6" className={classes.circleTitle}>
          {item.title}
        </Typography>
        <Typography variant="subtitle2" className={classes.circleSubtitle}>
          {item.text}
        </Typography>
      </Grid>
    ) : i === 1 ? (
      <Grid item key={i} className={classes.cicleContainer}>
        <div className={classes.circle}>
          <GraphicEqIcon className={classes.circleIcon} />
        </div>
        <Typography variant="h6" className={classes.circleTitle}>
          {item.title}
        </Typography>
        <Typography variant="subtitle2" className={classes.circleSubtitle}>
          {item.text}
        </Typography>
      </Grid>
    ) : i === 2 ? (
      <Grid item key={i} className={classes.cicleContainer}>
        <div className={classes.circle}>
          <NotInterestedIcon className={classes.circleIcon} />
        </div>
        <Typography variant="h6" className={classes.circleTitle}>
          {item.title}
        </Typography>
        <Typography variant="subtitle2" className={classes.circleSubtitle}>
          {item.text}
        </Typography>
      </Grid>
    ) : i === 3 ? (
      <Grid item key={i} className={classes.cicleContainer}>
        <div className={classes.circle}>
          <SkipNextIcon className={classes.circleIcon} />
        </div>
        <Typography variant="h6" className={classes.circleTitle}>
          {item.title}
        </Typography>
        <Typography variant="subtitle2" className={classes.circleSubtitle}>
          {item.text}
        </Typography>
      </Grid>
    ) : null
  );

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {renderCircles}
    </Grid>
  );
};

export default Circles;
