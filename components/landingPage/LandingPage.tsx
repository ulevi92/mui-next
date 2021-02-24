import Image from "next/image";

import {
  Button,
  ButtonGroup,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useStore } from "../../hooks/StoreContext";
import { FreeButton, PremiumButton } from "../../theme/theme";

import FlowDirection from "./FlowDirection";
import FlowImage from "./FlowImage";
import FlowPlans from "./FlowPlans";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#161a1a",
  },

  pageHeader: {
    pointerEvents: "none",
    height: "100vh",
    zIndex: 1,
  },

  pageHeadImage: {
    zIndex: 0,
  },

  pageHeadContainer: {
    pointerEvents: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 1,
  },

  pageHeadHeader: {
    textAlign: "center",
    marginBottom: 20,
    fontWeight: 600,
    color: "white",
    zIndex: 1,
  },

  pageHeadButtonContainer: {
    marginBlock: 40,
    zIndex: 1,
  },

  pageHeadSubtitle: {
    display: "flex",
    fontWeight: 600,
    marginTop: 20,
    color: "white",
    zIndex: 1,
  },

  pageHeadSubtitleSpan: {
    position: "relative",
    marginInlineStart: 20,
    color: theme.palette.primary.main,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.35s ease-in-out",
    zIndex: 1,

    "&:hover": {
      opacity: 0.75,
    },
  },

  flowDirectionSpan: {
    color: theme.palette.primary.main,
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  const flowTitleOne = "flow";
  const flowTextOne =
    "Listen to a personalized mix of tracks based on your listening history, or create your own mix of genres, artists and playlists - letting you enjoy more of the music you love.";

  const flowTitleTwo = "Find the music you want";
  const flowTextTwo = `Search for your favorite songs using the description, or turn on the ${(
    <span className={classes.flowDirectionSpan}>MusicFinder</span>
  )} feature to find the song that is playing near you.`;

  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.pageHeader}
        justify="center"
        alignItems="center"
      >
        <Image
          src="/body-bg.png"
          layout="fill"
          className={classes.pageHeadImage}
        />
        <div className={classes.pageHeadContainer}>
          <Typography variant="h3" className={classes.pageHeadHeader}>
            Open the world of music. <br /> It's all hereWW
          </Typography>

          <ButtonGroup className={classes.pageHeadButtonContainer}>
            <PremiumButton variant="contained">
              MusicSufic Premium
            </PremiumButton>
            <FreeButton variant="contained">MusicSufic Free</FreeButton>
          </ButtonGroup>

          <Typography variant="subtitle1" className={classes.pageHeadSubtitle}>
            1-month free trial
            <span className={classes.pageHeadSubtitleSpan}>$7.99</span>
            /month after
          </Typography>
        </div>
      </Grid>

      <FlowDirection
        left
        imageSrc="/flow-phone.png"
        icon="/flow-icon.png"
        title={flowTitleOne}
        text={flowTextOne}
      />

      <FlowImage />

      <FlowDirection
        right
        imageSrc="/flow-phone-2.png"
        title={flowTitleTwo}
        text={flowTextTwo}
      />

      <FlowPlans />
    </div>
  );
};

export default LandingPage;
