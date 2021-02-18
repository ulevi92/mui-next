import { IconButton } from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useFooterStyles } from "../../theme/theme";

const SocialIcons = () => {
  const classes = useFooterStyles();

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
