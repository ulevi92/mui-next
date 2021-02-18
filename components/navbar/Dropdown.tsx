import { FC, useRef, useState, useEffect } from "react";
import Link from "next/link";

import { Button } from "@material-ui/core";

import { useDropdownStyles } from "../../theme/theme";

const Dropdown: FC = () => {
  const [active, setActive] = useState(false);
  // const [];

  const menuRef = useRef<HTMLUListElement>(null);

  const classes = useDropdownStyles();

  useEffect(() => {
    window.addEventListener("click", () => setActive(false));

    return window.removeEventListener("click", () => setActive(false));
  }, []);

  useEffect(() => {
    active
      ? menuRef.current.classList.add("active")
      : menuRef.current.classList.remove("active");
  }, [active]);

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    !active ? setActive(true) : setActive(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <Button onClick={onButtonClick}>Dropdown</Button>
      <ul ref={menuRef} className={classes.ul}>
        <li className={classes.li}>a</li>
      </ul>
      {active ? "true" : "false"}
    </div>
  );
};

export default Dropdown;
