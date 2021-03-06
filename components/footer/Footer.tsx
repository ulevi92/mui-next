import Image from "next/image";
import router from "next/router";

import { Grid, makeStyles, SvgIcon, Typography } from "@material-ui/core";
import FooterMenu from "./FooterMenu";

import SocialIcons from "./SocialIcons";
import CreditItems from "./Credit";

import CopyrightIcon from "@material-ui/icons/Copyright";

const useStyles = makeStyles((theme) => ({
  image: {
    cursor: "pointer",
  },

  footerContainer: {
    marginTop: 40,
  },

  iconContainer: {
    textAlign: "center",
  },

  creditContainer: {
    display: "flex",
  },

  copyrightContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  copyrightName: {
    marginLeft: 15,
    fontWeight: 600,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.footerContainer}>
      <Grid container>
        <Grid item container md={8}>
          <Grid item md={1} />
          <Grid item container justify="center" alignItems="center" md={2}>
            <Image
              src="/logo.png"
              height={100}
              width={100}
              alt="logo"
              onClick={() => router.push("/")}
              className={classes.image}
            />
          </Grid>
          <Grid item md={1} />
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            md={7}
          >
            <FooterMenu />
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
            <CreditItems />
          </Grid>
        </Grid>
        <Grid item container md={4} justify="center" alignItems="flex-end">
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
