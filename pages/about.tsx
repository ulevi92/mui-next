import { useStyles } from "../theme/theme";

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.about}></div>
    </div>
  );
};

export default About;
