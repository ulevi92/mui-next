import { Typography } from "@material-ui/core";
import { useFooterStyles } from "../../theme/theme";

const Credit = () => {
  const creditList = ["legal", "privacy", "cookies", "ads"];

  const classes = useFooterStyles();

  const renderCreditList = creditList.map((item, i) => (
    <Typography key={i} className={classes.creditItem}>
      {item}
    </Typography>
  ));

  return <>{renderCreditList}</>;
};

export default Credit;
