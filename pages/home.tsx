import { useEffect } from "react";
import router from "next/router";
const Home = () => {
  useEffect(() => {
    router.push("/");
  });
  return <></>;
};

export default Home;
