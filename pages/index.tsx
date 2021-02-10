import { Button, makeStyles, withStyles } from "@material-ui/core";

const ColorButton = withStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    "&:hover": {
      background: "#a15a15",
    },
  },
}))(Button);

const useStyles = makeStyles({
  btn: {
    borderRadius: 0,
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <ColorButton
        variant="contained"
        color="primary"
        style={{ marginRight: "10px" }}
      >
        Click
      </ColorButton>
      <Button variant="contained" color="primary" className={classes.btn}>
        Click
      </Button>
    </>
  );
}
