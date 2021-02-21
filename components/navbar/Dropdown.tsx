import { FC, useRef, useState, useEffect } from "react";
import router from "next/router";

import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ul: {
    display: "none",
    height: 100,
    transition: "all 0.5s ease-in-out",
    padding: 0,
    marginBottom: 0,

    "&.active": {
      background: "linear-gradient(to top, #2178bb, #2d9bef)",
      animation: `$growDown 350ms ${theme.transitions.easing.easeInOut}`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      position: "absolute",
      width: "100%",
    },
  },

  btn: {
    display: "none",
    borderRadius: 0,

    "&.active": {
      display: "block",
      animation: `$itemMove 350ms ${theme.transitions.easing.easeInOut} 300ms`,
    },
  },

  "@keyframes growDown": {
    "0%": {
      transform: "translateY(-50px)",
    },

    "80%": {
      transform: "translateY(15px)",
    },

    "100%": {
      transform: "translateY(0)",
    },
  },

  "@keyframes itemMove": {
    "0%": {
      transform: "translateX(5px)",
    },

    "80%": {
      transform: "translateX(-5px)",
    },

    "100%": {
      transform: "translateX(0)",
    },
  },
}));

const Dropdown: FC = () => {
  const [active, setActive] = useState(false);

  const classes = useStyles();

  const menuRef = useRef<HTMLUListElement>(null);
  const accBtnRef = useRef<HTMLButtonElement>(null);
  const logoutBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    window.addEventListener("click", () => setActive(false));

    return window.removeEventListener("click", () => setActive(false));
  }, []);

  useEffect(() => {
    const setClass = () => {
      menuRef.current.classList.add("active");
      accBtnRef.current.classList.add("active");
      logoutBtnRef.current.classList.add("active");
    };

    const rmClass = () => {
      menuRef.current.classList.remove("active");
      accBtnRef.current.classList.remove("active");
      logoutBtnRef.current.classList.remove("active");
    };

    return active ? setClass() : rmClass();
  }, [active]);

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    !active ? setActive(true) : setActive(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <Button onClick={onButtonClick}>Dropdown</Button>
      <ul ref={menuRef} className={classes.ul}>
        <Button
          ref={accBtnRef}
          className={classes.btn}
          onClick={() => router.push("/account")}
        >
          account
        </Button>
        <Button
          ref={logoutBtnRef}
          className={classes.btn}
          // onClick={} will logout
        >
          logout
        </Button>
      </ul>
    </div>
  );
};

export default Dropdown;
