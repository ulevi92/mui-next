import { FC, useRef, useState, useEffect } from "react";
import Link from "next/link";

import { Button } from "@material-ui/core";

import { dropdownStyles } from "../../theme/theme";

const Dropdown: FC = () => {
  const [active, setActive] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.addEventListener(
      "click",
      () => {
        setActive(false);
      },
      { capture: true }
    );
  }, []);

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setActive(!active);
  };

  return (
    <div>
      <button onClick={onButtonClick}>Click</button>

      <h1>Dropdown</h1>
      <h1>{active ? "true" : "false"}</h1>
    </div>
  );
};

export default Dropdown;
