import { FC, useRef, useState } from "react";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  makeStyles,
} from "@material-ui/core";

import * as EmailValidator from "email-validator";

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
}));

interface InputsProps {
  htmlFor: string;
  placeholder: string;
  id: string;
  ariaDescribedby: string;
  isEmail?: boolean;
  isPassword?: boolean;
  isConfirm?: boolean;
}

const InputsForm: FC<InputsProps> = ({
  ariaDescribedby,
  htmlFor,
  id,
  placeholder,
  isEmail,
  isPassword,
  isConfirm,
}) => {
  const [showError, setShowError] = useState(false);
  const [emailChecker, setEmailChecker] = useState(false);
  const [passwordChecker, setPasswordChecker] = useState(false);
  const [confirmChecker, setConfirmChecker] = useState(false);
  const [helperText, setHelperText] = useState("");

  const emailRef = useRef<HTMLInputElement>(null)!;
  const passwordRef = useRef<HTMLInputElement>(null)!;
  const confirmationRef = useRef<HTMLInputElement>(null)!;

  const classes = useStyles();

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (EmailValidator.validate(e.currentTarget.value)) {
      case true:
        setEmailChecker(true);

        break;
      case false:
        setShowError(true);
        setEmailChecker(false);

        break;
    }
    if (e.currentTarget.value.length >= 1) {
      return (
        setHelperText("Please enter valid email address"), setShowError(true)
      );
    } else {
      return setShowError(false), setHelperText("");
    }
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const onConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const renderInputs = isEmail ? (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={htmlFor} className={classes.label}>
        {placeholder}
      </InputLabel>
      <Input
        inputRef={emailRef}
        required
        id={id}
        aria-describedby={ariaDescribedby}
        onChange={onEmailChange}
      />
    </FormControl>
  ) : isPassword ? (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={htmlFor} className={classes.label}>
        {placeholder}
      </InputLabel>
      <Input
        inputRef={passwordRef}
        required
        id={id}
        aria-describedby={ariaDescribedby}
        onChange={onPasswordChange}
      />
    </FormControl>
  ) : isConfirm ? (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={htmlFor} className={classes.label}>
        {placeholder}
      </InputLabel>
      <Input
        inputRef={confirmationRef}
        required
        id={id}
        aria-describedby={ariaDescribedby}
        onChange={onConfirmChange}
      />
    </FormControl>
  ) : null;

  return <>{renderInputs}</>;
};

export default InputsForm;
