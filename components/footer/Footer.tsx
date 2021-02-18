import Image from "next/image";

import { Grid, Typography } from "@material-ui/core";
import CardList from "./CardList";

import {
  communitiesItems,
  musicSurficItems,
  usefulLinksItems,
} from "./Footer.helper";
import { useFooterStyles } from "../../theme/theme";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const classes = useFooterStyles();

  return (
    <Grid container className={classes.footerContainer}>
      <Grid container>
        <Grid item container md={8}>
          <Grid item md={1} />
          <Grid item md={2}>
            <Image src="/logo.png" height={100} width={100} alt="logo" />
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            md={8}
          >
            <div className={classes.cardContainer}>
              <Typography variant="h6" className={classes.cardTitle}>
                MusicSurfic
              </Typography>
              <CardList title="MusicSurfic" list={communitiesItems} />
            </div>

            <div className={classes.cardContainer}>
              <Typography variant="h6" className={classes.cardTitle}>
                Community
              </Typography>
              <CardList title="Community" list={musicSurficItems} />
            </div>

            <div className={classes.cardContainer}>
              <Typography variant="h6" className={classes.cardTitle}>
                Useful Links
              </Typography>
              <CardList title="Usefuf Links" list={usefulLinksItems} />
            </div>
          </Grid>
          <Grid item md={1} />
        </Grid>
        <Grid item md={4}>
          <SocialIcons />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={3}>
          a
        </Grid>
        <Grid item md={9}>
          a
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
