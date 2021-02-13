import { FC, useRef, useState } from "react";
import Link from "next/link";

import { Button } from "@material-ui/core";

import { dropdownStyles } from "../../theme/theme";

interface DropdownProps {
  path?: string[];
}

const Dropdown: FC<DropdownProps> = ({ path }) => {
  const listRef = useRef<HTMLDivElement>();

  const [active, setActive] = useState(false);

  const classes = dropdownStyles();

  const dropdownList = ["account", "logout"];

  const renderList = dropdownList.map((item, i) => {
    return (
      <Link key={i} href={`/${item}`}>
        <a className={(classes.dropdownItem, active ? "active" : "")}>{item}</a>
      </Link>
    );
  });

  const onDropdownClick = () => {
    setActive(!active);
    listRef.current.classList.toggle("active");
  };

  return (
    <>
      <Button onClick={onDropdownClick}>Dropdown</Button>
      <div ref={listRef} className={classes.dropdownList}>
        {renderList}
      </div>
    </>
  );
};
export default Dropdown;

{
  /* <Link key={item} href={`/${path[i]}`}>
<a>{item}</a>
</Link> */
}
