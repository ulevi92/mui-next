import { FC, useEffect, useState } from "react";
import Link from "next/link";

import { makeStyles, Typography, Button, Grid } from "@material-ui/core";
import FormInputs from "./Forms.helper";

const useStyles = makeStyles((theme) => ({
  inputContainer: {
    display: "inline-flex",
  },

  formContainer: {
    background: theme.palette.background.default,
    opacity: 0.5,
    height: "75%",
    width: "25%",
    zIndex: 1,
  },

  form: {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  formHeader: {
    textAlign: "center",
    fontWeight: 600,
    marginBottom: 20,
  },

  formBtn: {
    marginBlock: 20,
    width: 200,
    borderRadius: 0,
    alignSelf: "center",
  },

  formSubtitle: {
    fontWeight: 400,
    textAlign: "center",
  },

  formLink: {
    textDecoration: "none",
    marginLeft: 5,
    color: theme.palette.primary.main,
  },
}));

interface InputsProps {
  isEmail: boolean;
  isPassword: boolean;
  isConfirm?: boolean;
}

const Form: FC<InputsProps> = ({ isEmail, isPassword, isConfirm }) => {
  const [submitCondition, setSubmitCondition] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    canSubmit: false,
  });

  const classes = useStyles();

  const renderForm = (
    <Grid
      container
      direction='column'
      justify='center'
      className={classes.formContainer}
    >
      <form action='' className={classes.form}>
        <Typography variant='h3' className={classes.formHeader}>
          Sign up
        </Typography>
        <FormInputs
          isEmail
          isPassword
          isConfirm
          setSubmitCondition={setSubmitCondition}
        />
        <Button
          variant='contained'
          color='primary'
          className={classes.formBtn}
          type='submit'
          disabled={!submitCondition.canSubmit ? true : false}
        >
          Sign up
        </Button>
        <Typography variant='subtitle2' className={classes.formSubtitle}>
          Already have an account?
          <Link href='/login'>
            <a className={classes.formLink}>Log in</a>
          </Link>
        </Typography>
      </form>
    </Grid>
  );

  return <>{renderForm}</>;
};

export default Form;
