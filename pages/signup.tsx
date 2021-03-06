import Image from "next/image";

import _ from "lodash";

import { Grid, makeStyles } from "@material-ui/core";
import Form from "../components/Form";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "90vh",
  },

  backgroundImage: {
    zIndex: 0,
  },
}));

const Signup = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      justify='center'
      alignItems='center'
    >
      <Image
        src='/body-bg.png'
        layout='fill'
        className={classes.backgroundImage}
      />

      <Form signup hasEmail hasPassword hasConfirm />
    </Grid>
  );
};

export default Signup;
