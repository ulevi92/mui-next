import Image from "next/image";

import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
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

const ResetPassword = () => {
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

      <Form remainder hasEmail />
    </Grid>
  );
};

export default ResetPassword;
