import { FC } from "react";

import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    marginBottom: 15,
  },

  cardItem: {
    cursor: "pointer",
    marginBottom: "15px",
    textTransform: "capitalize",
    transition: "all 0.35s ease-in-out",
    fontWeight: 500,

    "&:hover": {
      color: theme.palette.primary.main,
    },

    "&:last-of-type": {
      marginBottom: 0,
    },
  },
}));

type ItemsType = {
  title: string;
  items: string[];
}[];

const CardList: FC = () => {
  const classes = useStyles();

  const items: ItemsType = [
    { title: "MusicSurfic", items: ["about", "premium", "features"] },
    { title: "Communities", items: ["for artists", "for developers", "press"] },
    {
      title: "Usefull Links",
      items: ["help", "web player", "explorer channels"],
    },
  ];

  const renderItems = items.map((item, i) => (
    <Grid key={i} item md={4} xs={12}>
      <Typography variant="h6" className={classes.cardTitle}>
        {item.title}
      </Typography>

      {item.items.map((item, i) => (
        <Typography key={i} variant="subtitle1" className={classes.cardItem}>
          {item}
        </Typography>
      ))}
    </Grid>
  ));

  return <>{renderItems}</>;
};

export default CardList;
