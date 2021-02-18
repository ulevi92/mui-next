import { FC, useRef, useState, useEffect, createRef } from "react";
import router from "next/router";

import { Button } from "@material-ui/core";

import { useDropdownStyles } from "../../theme/theme";

const Dropdown: FC = () => {
  const [active, setActive] = useState(false);

  const classes = useDropdownStyles();

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
