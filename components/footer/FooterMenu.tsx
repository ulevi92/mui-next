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

interface NavsType {
  title: string;
  links: string[];
}

const FooterMenu: FC = () => {
  const classes = useStyles();

  const navs: NavsType[] = [
    { title: "MusicSurfic", links: ["about", "premium", "features"] },
    { title: "Communities", links: ["for artists", "for developers", "press"] },
    {
      title: "Usefull Links",
      links: ["help", "web player", "explorer channels"],
    },
  ];

  const renderItems = navs.map((nav, navIndex) => (
    <Grid key={navIndex} item md={4} xs={12}>
      <Typography variant='h6' className={classes.cardTitle}>
        {nav.title}
      </Typography>

      {nav.links.map((link, linkIndex) => (
        <Typography
          key={linkIndex}
          variant='subtitle1'
          className={classes.cardItem}
        >
          {link}
        </Typography>
      ))}
    </Grid>
  ));

  return <>{renderItems}</>;
};

export default FooterMenu;
