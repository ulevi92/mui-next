import { FC } from "react";
import router from "next/router";

import { Grid, Typography } from "@material-ui/core";

import { useFooterStyles } from "../../theme/theme";

interface CardListProps {
  list: string[];
  title: string;
}

const CardList: FC<CardListProps> = ({ list, title }) => {
  const classes = useFooterStyles();

  const renderList = list.map((item, i) => (
    <Typography key={i} variant="subtitle1" className={classes.cardItem}>
      {item}
    </Typography>
  ));

  return <>{renderList}</>;
};

export default CardList;
