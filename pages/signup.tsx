import { useState, useEffect, useRef, useCallback } from "react";

import Image from "next/image";
import Link from "next/link";

import router from "next/router";

import _ from "lodash";

import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
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

      <Form isEmail isPassword isConfirm />
    </Grid>
  );
};

export default Signup;
