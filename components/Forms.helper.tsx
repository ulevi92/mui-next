import {
  Dispatch,
  FC,
  Fragment,
  SetStateAction,
  useCallback,
  useEffect,
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
  remainder?: boolean;
  login?: boolean;
  signup?: boolean;
  hasEmail: boolean;
  hasPassword?: boolean;
  hasConfirm?: boolean;

  setSubmitCondition: Dispatch<
    SetStateAction<{
      email?: string;
      password?: string;
      confirmPassword?: string;
      canSubmit: boolean;
    }>
  >;
}

const FormInputs: FC<FormInputsProps> = ({
  hasEmail: hasEmail,
  hasPassword: hasPassword,
  hasConfirm: hasConfirm,
  remainder,
  login,
  signup,
  setSubmitCondition,
}) => {
  const [showEmailError, setShowEmailError] = useState(false);

  const [showPasswordError, setShowPawsswordError] = useState(false);
  const [showConfirmError, setShowConfirmError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [emailChecker, setEmailChecker] = useState(false);
  const [passwordChecker, setPasswordChecker] = useState(false);
  const [confirmChecker, setConfirmChecker] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null)!;
  const passwordRef = useRef<HTMLInputElement>(null)!;
  const confirmationRef = useRef<HTMLInputElement>(null)!;

  const classes = useStyles();

  const signupEffect = () => {
    signup &&
    EmailValidator.validate(emailRef.current?.value!) &&
    schema.validate(passwordRef.current?.value!) &&
    confirmationRef.current?.value! === passwordRef.current?.value!
      ? setSubmitCondition({
          email: emailRef.current?.value!,
          password: passwordRef.current?.value!,
          confirmPassword: confirmationRef.current?.value!,
          canSubmit: true,
        })
      : null;

    (signup && confirmationRef.current?.value!.length === 0) ||
    (signup && confirmationRef.current?.value! !== passwordRef.current?.value!)
      ? setSubmitCondition({
          canSubmit: false,
        })
      : null;
  };

  const loginEffect = () => {
    login &&
    EmailValidator.validate(emailRef.current?.value!) &&
    schema.validate(passwordRef.current?.value!)
      ? setSubmitCondition({
          email: emailRef.current?.value!,
          password: passwordRef.current?.value!,
          canSubmit: true,
        })
      : null;

    login && !schema.validate(passwordRef.current?.value!)
      ? setSubmitCondition({
          canSubmit: false,
        })
      : null;
  };

  const remainderEffect = () => {
    remainder && EmailValidator.validate(emailRef.current?.value!)
      ? setSubmitCondition({ email: emailRef.current?.value!, canSubmit: true })
      : setSubmitCondition({
          canSubmit: false,
        });
  };

  useEffect(() => {
    signup ? signupEffect() : null;

    return () => {
      signup ? signupEffect() : null;
    };
  }, [signup ? confirmationRef.current?.value! : null]);

  useEffect(() => {
    login ? loginEffect() : null;

    return () => {
      login ? loginEffect() : null;
    };
  }, [login ? passwordRef.current?.value! : null]);

  useEffect(() => {
    remainder ? remainderEffect() : null;

    return () => {
      remainder ? remainderEffect() : null;
    };
  }, [remainder ? emailRef.current?.value! : null]);

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
          setPasswordChecker(false);
          break;

        case true:
          setShowPawsswordError(false);
          setPasswordChecker(true);
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
      render: hasEmail ? true : false,
      ref: emailRef,
      id: "email",
      type: "email",
      placeholder: "Enter Email",
      htmlFor: "email",
      ariaDescribedby: "email",
      name: "email",
      error: showEmailError ? true : false,
      errorMsg: showEmailError ? (
        <FormHelperText className={classes.helperText}>
          Please enter valid email address
        </FormHelperText>
      ) : (
        ""
      ),
      onChange: onEmailChange,
    },

    {
      render: hasPassword ? true : false,
      ref: passwordRef,
      id: "password",
      type: showPassword ? "password" : "",
      placeholder: "Enter password",
      htmlFor: "password",
      ariaDescribedby: "password",
      name: "password",
      error: showPasswordError ? true : false,
      errorMsg: showPasswordError ? (
        <FormHelperText className={classes.helperText}>
          Password must be 8-16 letters, lowercase, uppercase, 1 symbole, and no
          spaces
        </FormHelperText>
      ) : (
        ""
      ),
      onChange: onPasswordChange,
      renderShowPassword: renderShowpassword,
    },

    {
      render: hasConfirm ? true : false,
      ref: confirmationRef,
      id: "confirm",
      type: showPassword ? "password" : "",
      placeholder: "Confirm Password",
      htmlFor: "confirm",
      ariaDescribedby: "confirm",
      name: "confirm",
      error: showConfirmError ? true : false,
      errorMsg: showConfirmError ? (
        <FormHelperText className={classes.helperText}>
          Passwords do not match!
        </FormHelperText>
      ) : (
        ""
      ),
      onChange: onConfirmChange,
    },
  ].map((input, inputIndex) =>
    input.render ? (
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
    ) : null
  );
  return <>{renderFormInputs}</>;
};

export default FormInputs;
