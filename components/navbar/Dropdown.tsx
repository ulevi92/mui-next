import { FC, useRef, useState, useEffect } from "react";
import Link from "next/link";

import { Button } from "@material-ui/core";

import { useDropdownStyles } from "../../theme/theme";

const Dropdown: FC = () => {
  const [active, setActive] = useState(false);

  const menuRef = useRef<HTMLUListElement>(null);

  const classes = useDropdownStyles();

  useEffect(() => {
    window.addEventListener("click", () => setActive(false));

    return window.removeEventListener("click", () => setActive(false));
  }, []);
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setActive(!active);
    menuRef.current.classList.toggle("active");
  };

  return (
    <>
      <Button onClick={onButtonClick}>Dropdown</Button>
      <ul ref={menuRef}></ul>
    </>
  );
};

export default Dropdown;
