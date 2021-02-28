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
    textTransform: "capitalize",
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
  remainder?: boolean;
  login?: boolean;
  signup?: boolean;
  hasEmail: boolean;
  hasPassword?: boolean;
  hasConfirm?: boolean;
}

interface InputState {
  email?: string;
  password?: string;
  confirmPassword?: string;
  canSubmit: boolean;
}

const Form: FC<InputsProps> = ({
  hasEmail: hasEmail,
  hasPassword: hasPassword,
  hasConfirm: hasConfirm,
  remainder,
  login,
  signup,
}) => {
  const [submitCondition, setSubmitCondition] = useState<InputState>({
    canSubmit: false,
  });

  const classes = useStyles();

  const formCondition = signup
    ? "signup"
    : login
    ? "login"
    : remainder
    ? "reset password"
    : null;

  const renderRedirect = signup ? (
    <Typography variant='subtitle2' className={classes.formSubtitle}>
      Already have an account?
      <Link href='/login'>
        <a className={classes.formLink}>Log in</a>
      </Link>
    </Typography>
  ) : login ? (
    <>
      <Typography variant='subtitle2' className={classes.formSubtitle}>
        Don't have an account?
        <Link href='/signup'>
          <a className={classes.formLink}>Signup</a>
        </Link>
      </Typography>
      <Typography variant='subtitle2' className={classes.formSubtitle}>
        Forgot your password?
        <Link href='/resetpassword'>
          <a className={classes.formLink}>Reset your password</a>
        </Link>
      </Typography>
    </>
  ) : remainder ? (
    <>
      <Typography variant='subtitle2' className={classes.formSubtitle}>
        Don't have an account?
        <Link href='/signup'>
          <a className={classes.formLink}>Signup</a>
        </Link>
      </Typography>

      <Typography variant='subtitle2' className={classes.formSubtitle}>
        Already have an account?
        <Link href='/login'>
          <a className={classes.formLink}>Log in</a>
        </Link>
      </Typography>
    </>
  ) : null;

  const renderForm = (
    <Grid
      container
      direction='column'
      justify='center'
      className={classes.formContainer}
    >
      <form action='' className={classes.form}>
        <Typography variant='h3' className={classes.formHeader}>
          {formCondition}
        </Typography>
        <FormInputs
          signup={signup ? true : false}
          login={login ? true : false}
          remainder={remainder ? true : false}
          hasEmail={hasEmail ? true : false}
          hasPassword={hasPassword ? true : false}
          hasConfirm={hasConfirm ? true : false}
          setSubmitCondition={setSubmitCondition}
        />
        <Button
          variant='contained'
          color='primary'
          className={classes.formBtn}
          type='submit'
          disabled={!submitCondition.canSubmit ? true : false}
        >
          {formCondition}
        </Button>
        {renderRedirect}
      </form>
    </Grid>
  );

  console.log(submitCondition);

  return <>{renderForm}</>;
};

export default Form;
