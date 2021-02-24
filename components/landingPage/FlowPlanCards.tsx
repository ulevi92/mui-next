import { FC } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginBlock: 40,
  },

  card: {
    background: "#1b1f1f",
    width: "400px",
    height: "50vh",
    marginRight: 40,
    textAlign: "center",
    color: "white",
    fontWeight: 600,
    border: "2px solid ",
    borderColor: "white",
    borderRadius: 8,

    "&:last-of-type": {
      marginRight: 0,
    },
  },

  typograpyContainer: {
    height: "20vh",
  },

  subtitle: {
    color: "white",
    fontWeight: 200,
  },

  subtitle2: {
    color: "rgba(255,255,255,0.7)",
  },

  spanPremuim: {
    color: theme.palette.primary.main,
    transition: "all 0.35s ease-in-out",
  },

  spanFree: {
    color: "rgba(255,255,255,0.7)",
  },

  iconPremiun: {
    color: theme.palette.primary.main,
    marginRight: 15,
  },

  iconFree: {
    color: "rgba(255,255,255,0.7)",
    marginRight: 15,
  },
}));

const FlowPlanCards: FC = () => {
  const classes = useStyles();

  const renderCards = [
    {
      premium: false,
      title: "MusicSurfic Free",
      span: "$0.00",
      subtitle: "/month",
      valuableList: [
        "Online listening",
        "Regular audio",
        "With advertising",
        "30 skips per day",
      ],
    },

    {
      premium: true,
      title: "MusicSurfic Premium",
      span: "$7.99",
      subtitle: "/month",
      subtitle2: "start with 1-month free trial",
      valuableList: [
        "Offline mode",
        "High quality audio",
        "No ads",
        "Unlimited skips",
      ],
    },
  ].map((card, cardIndex) =>
    card.premium ? (
      <Card key={cardIndex} className={classes.card}>
        <CardContent>
          <Grid className={classes.typograpyContainer}>
            <Typography variant='h4'>{card.title}</Typography>

            <Typography variant='h6' className={classes.subtitle}>
              <span className={classes.spanPremuim}>{card.span}</span>
              {card.subtitle}
            </Typography>

            <Typography variant='subtitle2' className={classes.subtitle2}>
              {card.subtitle2}
            </Typography>
          </Grid>

          <Grid container direction='column' alignItems='flex-start'>
            {card.valuableList.map((val, valIndex) => (
              <Grid item key={valIndex}>
                <CheckIcon className={classes.iconPremiun} />
                {val}
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    ) : !card.premium ? (
      <Card key={cardIndex} className={classes.card}>
        <CardContent>
          <Grid className={classes.typograpyContainer}>
            <Typography variant='h4'>{card.title}</Typography>

            <Typography variant='h6' className={classes.subtitle}>
              <span className={classes.spanFree}>{card.span}</span>
              {card.subtitle}
            </Typography>
          </Grid>

          <Grid container direction='column' alignItems='flex-start'>
            {card.valuableList.map((val, valIndex) => (
              <Grid item key={valIndex}>
                <CheckIcon className={classes.iconFree} />
                {val}
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    ) : null
  );

  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      className={classes.root}
    >
      {renderCards}
    </Grid>
  );
};

export default FlowPlanCards;
