import Footer from "../components/Footer";
// import Header from "../components/Header";
import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import "mapbox-gl/dist/mapbox-gl.css";

export default function App({ Component, pageProps }) {
  const progress = new ProgressBar({
    size: 4,
    color: "#FE595E",
    className: "z-50",
    delay: 100,
  });

  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);

  return (
    <>
      {/* <Header /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
