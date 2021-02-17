import { aboutStyles } from "../theme/theme";
import { Grid, SvgIcon, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const About = () => {
  const classes = aboutStyles();

  const renderCreatedList = [
    "React.js",
    "Next.js",
    "Typescript",
    "Material-Ui",
    "Firebase",
  ].map((item, i) => <Typography key={i}>{item}</Typography>);

  const renderIconList = [0, 0, 0, 0, 0].map((item, i) => (
    <SvgIcon key={i} color="primary">
      <CheckIcon />
    </SvgIcon>
  ));

  return (
    <>
      <Typography className={classes.h1} variant="h4">
        Created By Uria Levi With:
      </Typography>

      <Grid item container>
        <Grid
          item
          xs={1}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          {renderIconList}
        </Grid>
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
    </>
  );
};

export default About;
