import Image from "next/image";

import { Grid, SvgIcon, Typography } from "@material-ui/core";
import CardList from "./CardList";

import {
  communitiesItems,
  musicSurficItems,
  usefulLinksItems,
} from "./Footer.helper";
import { useFooterStyles } from "../../theme/theme";
import SocialIcons from "./SocialIcons";
import Credit from "./Credit";

import CopyrightIcon from "@material-ui/icons/Copyright";

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
            <Grid item md={4} xs={12}>
              <Typography variant="h6" className={classes.cardTitle}>
                MusicSurfic
              </Typography>
              <CardList title="MusicSurfic" list={communitiesItems} />
            </Grid>

            <Grid item md={4} xs={12}>
              <Typography variant="h6" className={classes.cardTitle}>
                Community
              </Typography>
              <CardList title="Community" list={musicSurficItems} />
            </Grid>

            <Grid item md={4} xs={12}>
              <Typography variant="h6" className={classes.cardTitle}>
                Useful Links
              </Typography>
              <CardList title="Usefuf Links" list={usefulLinksItems} />
            </Grid>
          </Grid>
          <Grid item md={1} />
        </Grid>

        <Grid item md={4} className={classes.iconContainer}>
          <SocialIcons />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item container md={8}>
          <Grid item md={1} />
          <Grid item md={11} className={classes.creditContainer}>
            <Credit />
          </Grid>
        </Grid>
        <Grid item container md={4} justify="center">
          <SvgIcon>
            <CopyrightIcon />
          </SvgIcon>
          <Typography className={classes.copyrightName}>Uria Levi</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
