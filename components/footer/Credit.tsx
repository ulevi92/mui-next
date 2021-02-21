import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  creditItem: {
    marginTop: 45,
    cursor: "pointer",
    marginRight: 20,
    transition: "all 0.35s ease-in-out",
    fontWeight: 600,

    "&:last-of-type": {
      marginRight: 0,
    },

    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

const CreditItems = () => {
  const classes = useStyles();

  const renderCreditList = ["legal", "privacy", "cookies", "ads"].map(
    (item, i) => (
      <Typography key={i} className={classes.creditItem}>
        {item}
      </Typography>
    )
  );

  return <>{renderCreditList}</>;
};

export default CreditItems;
