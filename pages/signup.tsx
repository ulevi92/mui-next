import { useState, useEffect, useRef, useCallback } from "react";

import Image from "next/image";
import router from "next/router";

import _ from "lodash";

import { Grid, makeStyles } from "@material-ui/core";
import InputsForm from "../components/signup/InputsForm";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "90vh",
  },

  backgroundImage: {
    zIndex: 0,
  },

  formContainer: {
    background: theme.palette.background.default,
    opacity: 0.5,
    height: "75%",
    width: "25%",
    zIndex: 1,
  },
}));

const Signup = () => {
  const classes = useStyles();

  const renderForm = [
    { inputType: "email", placeholder: "Email Address" },
    { inputType: "password", placeholder: "Password" },
    { inputType: "confirmation", placeholder: "Confirm Password" },
  ].map((inputItem, inputIndex) =>
    inputIndex === 0 ? (
      <InputsForm
        key={inputIndex}
        placeholder={inputItem.placeholder}
        id={inputItem.inputType}
        htmlFor={inputItem.inputType}
        ariaDescribedby={inputItem.inputType}
        isEmail
      />
    ) : inputIndex === 1 ? (
      <InputsForm
        key={inputIndex}
        placeholder={inputItem.placeholder}
        id={inputItem.inputType}
        htmlFor={inputItem.inputType}
        ariaDescribedby={inputItem.inputType}
        isPassword
      />
    ) : inputIndex === 2 ? (
      <InputsForm
        key={inputIndex}
        placeholder={inputItem.placeholder}
        id={inputItem.inputType}
        htmlFor={inputItem.inputType}
        ariaDescribedby={inputItem.inputType}
        isConfirm
      />
    ) : null
  );

  console.log("render");

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
      <Grid
        container
        direction='column'
        justify='center'
        className={classes.formContainer}
      >
        {renderForm}
      </Grid>
    </Grid>
  );
};

export default Signup;
