import Link from "next/link";

import { Grid, makeStyles, SvgIcon, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import Head from "next/head";

const useStyles = makeStyles({
  h1: {
    textAlign: "center",
    marginTop: 45,
    marginBottom: 45,
  },

  itemContainer: {
    display: "flex",
    marginBlock: 5,

    "&:first-of-type": {
      marginTop: 0,
    },
    "&:last-of-type": {
      marginBottom: 0,
    },
  },

  item: {
    marginLeft: 20,
    fontWeight: 600,
    transition: "all 0.35s ease-in-out",
  },
});

const About = () => {
  const classes = useStyles();

  const renderCreatedList = [
    "React.js",
    "Next.js",
    "Typescript",
    "Material-Ui",
    "Firebase",
  ].map((item, i) => (
    <div key={i} className={classes.itemContainer}>
      <SvgIcon color="primary">
        <CheckIcon />
      </SvgIcon>
      <Typography className={classes.item}>{item}</Typography>
    </div>
  ));

  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Typography className={classes.h1} variant="h4">
        Created By Uria Levi With:
      </Typography>

      <Grid item container>
        <Grid item xs={1} />

        <Grid
          item
          xs={11}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          {renderCreatedList}
        </Grid>
      </Grid>
      <Typography className={classes.h1} variant="h4">
        <a
          target="_blank"
          href="https://www.upwork.com/o/profiles/users/~0184fa6042c85fa083/"
        >
          Upwork profile
        </a>
      </Typography>
    </>
  );
};

export default About;
