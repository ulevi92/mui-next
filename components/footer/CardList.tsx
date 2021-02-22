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

const CardList: FC = () => {
  const classes = useStyles();

  const footerItems = {
    MusicSurfic: {
      title: "MusicSurfic",
      items: ["about", "premium", "features"],
    },

    Communities: {
      title: "Communities",
      items: ["for artists", "for developers", "press"],
    },

    UsefullLinks: {
      title: "Usefull Links",
      items: ["help", "web player", "explorer channels"],
    },
  };

  const renderCards = (title: string, items: string[]) => (
    <Grid item md={4} xs={12}>
      <Typography variant="h6" className={classes.cardTitle}>
        {title}
      </Typography>

      {items.map((item, i) => (
        <Typography key={i} variant="subtitle1" className={classes.cardItem}>
          {item}
        </Typography>
      ))}
    </Grid>
  );

  return (
    <>
      <>
        {renderCards(
          footerItems.MusicSurfic.title,
          footerItems.MusicSurfic.items
        )}
      </>
      <>
        {renderCards(
          footerItems.Communities.title,
          footerItems.Communities.items
        )}
      </>
      <>
        {renderCards(
          footerItems.UsefullLinks.title,
          footerItems.UsefullLinks.items
        )}
      </>
    </>
  );
};

export default CardList;
