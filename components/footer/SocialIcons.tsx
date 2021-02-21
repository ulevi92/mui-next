import { IconButton, makeStyles } from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { theme } from "../../theme/theme";

const useStyles = makeStyles((theme) => ({
  socialIcons: {
    marginRight: 20,
    transition: "all 0.35 ease-in-out",
    color: theme.palette.primary.main,

    "&:hover": {
      opacity: 0.65,
    },
  },
}));

const SocialIcons = () => {
  const classes = useStyles();

  return (
    <>
      <IconButton className={classes.socialIcons}>
        <FacebookIcon />
      </IconButton>
      <IconButton className={classes.socialIcons}>
        <TwitterIcon />
      </IconButton>
      <IconButton className={classes.socialIcons}>
        <InstagramIcon />
      </IconButton>
    </>
  );
};

export default SocialIcons;
