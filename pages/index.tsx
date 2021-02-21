import { useEffect, useState } from "react";
import LandingPage from "../components/landingPage/LandingPage";
import { useStore } from "../hooks/StoreContext";
import Home from "./home";

export default function Index() {
  const store = useStore();

  const renderPage = !store.logged ? <LandingPage /> : <Home />;

  return <>{renderPage}</>;
}
