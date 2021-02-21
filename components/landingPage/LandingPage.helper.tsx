import { FC } from "react";
import Image from "next/image";
import { Grid, makeStyles, SvgIcon, Typography } from "@material-ui/core";

import SettingsInputAntennaIcon from "@material-ui/icons/SettingsInputAntenna";

interface FlowDirectionProps {
  left?: boolean;
  right?: boolean;
  imageSrc: string;
  icon?: string;
  title: string;
  text: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100%",
    background: "#161a1a",
    color: "white",
  },

  flowImage: {
    marginRight: 20,
  },

  flowTitleOne: {
    marginLeft: 20,
    fontWeight: 600,
    lineHeight: 0.8,
  },

  flowTitleTwo: {
    fontWeight: 600,
    lineHeight: 0.8,
  },

  flowText: {
    marginTop: 25,
  },
}));

const FlowDirection: FC<FlowDirectionProps> = ({
  left,
  right,
  imageSrc,
  icon,
  title,
  text,
}) => {
  const classes = useStyles();

  const renderToSide = left ? (
    <Grid container className={classes.root}>
      <Grid item md={4}>
        <Image src={imageSrc} layout="responsive" height={400} width={400} />
      </Grid>

      <Grid
        item
        container
        sm={8}
        xs={12}
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Grid item sm={1} />
        <Grid item container sm={8}>
          <Grid item container alignItems="center">
            <Grid container>
              <Image src={icon} height={35} width={35} />
              <Typography className={classes.flowTitleOne} variant="h2">
                {title}
              </Typography>
              <Typography className={classes.flowText} variant="h6">
                {text}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={3} />
      </Grid>
    </Grid>
  ) : right ? (
    <Grid container className={classes.root}>
      <Grid item container sm={8} xs={12}>
        <Grid item sm={3} />
        <Grid item container sm={8} alignItems="center">
          <Grid item container>
            <Typography className={classes.flowTitleTwo} variant="h2">
              {title}
            </Typography>
            <Typography className={classes.flowText} variant="h6">
              {text}
            </Typography>
          </Grid>
        </Grid>
        <Grid item sm={1} />
      </Grid>

      <Grid item md={4}>
        <Image src={imageSrc} layout="responsive" height={400} width={400} />
      </Grid>
    </Grid>
  ) : null;

  return <>{renderToSide}</>;
};

export default FlowDirection;
