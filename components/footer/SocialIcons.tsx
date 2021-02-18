import { IconButton } from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useFooterStyles } from "../../theme/theme";

const SocialIcons = () => {
  const classes = useFooterStyles();

  return (
    <>
      <IconButton color="primary" className={classes.socialIcons}>
        <FacebookIcon />
      </IconButton>
      <IconButton color="primary" className={classes.socialIcons}>
        <TwitterIcon />
      </IconButton>
      <IconButton color="primary" className={classes.socialIcons}>
        <InstagramIcon />
      </IconButton>
    </>
  );
};

export default SocialIcons;
