import {
  Dispatch,
  FC,
  Fragment,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from "react";

import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  makeStyles,
  SvgIcon,
} from "@material-ui/core";

import * as EmailValidator from "email-validator";

import { schema } from "./passwordValidator";

import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBlock: 5,

    "&:first-of-type": {
      marginTop: 0,
    },

    "&:last-of-type": {
      marginBottom: 0,
    },
  },

  label: {
    fontWeight: 600,
  },

  helperText: {
    color: theme.palette.error.main,
  },

  icon: {
    cursor: "pointer",
  },
}));

interface FormInputsProps {
  isEmail: boolean;
  isPassword: boolean;
  isConfirm?: boolean;
  setEmailChecker: Dispatch<SetStateAction<boolean>>;
  setPasswordChecker: Dispatch<SetStateAction<boolean>>;
  setConfirmChecker?: Dispatch<SetStateAction<boolean>>;
  setSubmitCondition: Dispatch<
    SetStateAction<{
      email: string;
      password: string;
      confirmPassword: string;
      canSubmit: boolean;
    }>
  >;
}

const FormInputs: FC<FormInputsProps> = ({
  isEmail,
  isPassword,
  isConfirm,
  setEmailChecker,
  setPasswordChecker,
  setConfirmChecker,
  setSubmitCondition,
}) => {
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPawsswordError] = useState(false);
  const [showConfirmError, setShowConfirmError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null)!;
  const passwordRef = useRef<HTMLInputElement>(null)!;
  const confirmationRef = useRef<HTMLInputElement>(null)!;

  const classes = useStyles();

  const onEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      switch (EmailValidator.validate(e.currentTarget.value)) {
        case true:
          setEmailChecker(true);
          setShowEmailError(false);
          break;
        case false:
          setEmailChecker(false);
          setShowEmailError(true);
          break;
      }

      if (e.currentTarget.value.length === 0) {
        setShowEmailError(false);
        setEmailChecker(false);
      }
    },
    [emailRef]
  );

  const onPasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      switch (schema.validate(e.currentTarget.value)) {
        case false:
          setShowPawsswordError(true);
          setPasswordChecker(true);
          break;

        case true:
          setShowPawsswordError(false);
          setPasswordChecker(false);
          break;
      }

      if (e.currentTarget.value.length === 0) {
        setShowPawsswordError(false);
        setPasswordChecker(false);
      }
    },
    [passwordRef]
  );

  const onConfirmChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      switch (e.currentTarget.value !== passwordRef?.current.value!) {
        case true:
          setShowConfirmError(true);
          setConfirmChecker(false);
          break;

        case false:
          setShowConfirmError(false);
          setConfirmChecker(true);
          break;
      }

      if (e.currentTarget.value.length === 0) {
        setShowConfirmError(false);
        setConfirmChecker(false);
      }
    },
    [confirmationRef]
  );

  const renderShowpassword = showPassword ? (
    <SvgIcon
      className={classes.icon}
      onClick={() => setShowPassword(!showPassword)}
    >
      <VisibilityIcon />
    </SvgIcon>
  ) : (
    <SvgIcon
      className={classes.icon}
      onClick={() => setShowPassword(!showPassword)}
    >
      <VisibilityOffIcon />
    </SvgIcon>
  );

  const renderFormInputs = [
    {
      ref: emailRef,
      id: "email",
      type: "email",
      placeholder: "Enter Email",
      htmlFor: "email",
      ariaDescribedby: "email",
      name: "email",
      error: showEmailError ? true : false,
      errorMsg: showEmailError ? "Please enter valid email address" : "",
      onChange: onEmailChange,
    },

    {
      ref: passwordRef,
      id: "password",
      type: showPassword ? "password" : "",
      placeholder: "Enter password",
      htmlFor: "password",
      ariaDescribedby: "password",
      name: "password",
      error: showPasswordError ? true : false,
      errorMsg: showPasswordError
        ? "Password must be 8-16 letters, lowercase, uppercase, 1 symbole, and no spaces"
        : "",
      onChange: onPasswordChange,
      renderShowPassword: renderShowpassword,
    },

    {
      ref: confirmationRef,
      id: "confirm",
      type: showPassword ? "password" : "",
      placeholder: "Enter confirm",
      htmlFor: "confirm",
      ariaDescribedby: "confirm",
      name: "confirm",
      error: showConfirmError ? true : false,
      errorMsg: showConfirmError ? "Passwords do not match!" : "",
      onChange: onConfirmChange,
      renderShowPassword: renderShowpassword,
    },
  ].map((input, inputIndex) => (
    <Fragment key={inputIndex}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={input.htmlFor} className={classes.label}>
          {input.placeholder}
        </InputLabel>
        <Input
          inputRef={input.ref}
          type={input.type}
          required
          name={input.name}
          error={input.error}
          id={input.id}
          aria-describedby={input.ariaDescribedby}
          onChange={input.onChange}
        />
      </FormControl>
      {input.errorMsg}
    </Fragment>
  ));
  return <>{renderFormInputs}</>;
};

export default FormInputs;
