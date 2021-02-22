import Image from "next/image";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: "relative",
    height: "65vh",
    marginBottom: 40,
  },

  image: {
    position: "absolute",
    zIndex: -1,
    pointerEvents: "none",
  },

  textContainer: {
    zIndex: 1,
    pointerEvents: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  header: {
    zIndex: 1,
    fontWeight: 600,
    color: "white",
  },

  text: {
    zIndex: 1,
    fontWeight: 600,
    color: "white",
  },
});

const FlowImage = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Image src="/flowinfobg.png" layout="fill" />
      <Grid item sm={2} />
      <Grid item className={classes.textContainer} sm={4}>
        <Typography variant="h3" className={classes.header}>
          Listen anytime, anywhere
        </Typography>
        <Typography variant="subtitle1" className={classes.text}>
          All your favorite songs and episodes are always available - even
          without WiFi or LTE.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FlowImage;
