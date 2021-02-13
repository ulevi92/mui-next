import { FC } from "react";
import router from "next/router";

import { Button } from "@material-ui/core";

interface NavButtonType {
  path: string;
  title: string;
}

const NavButton: FC<NavButtonType> = ({ title, path }) => {
  const onButtonClick = () => {
    return router.push(`/${path}`);
  };

  return <Button onClick={onButtonClick}>{title}</Button>;
};

export default NavButton;
