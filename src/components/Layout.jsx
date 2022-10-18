import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ImageConstants } from "../constants/imageConstants";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../styles/style.css";
import "../styles/responsive.css";

const Layout = ({ children }) => {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  React.useEffect(() => {
    if (!window.console) window.console = {};
    var methods = ["log", "debug", "warn", "info", "error"];
    for (var i = 0; i < methods.length; i++) {
      console[methods[i]] = function () {};
    }
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en" title="Thunderbolt by RazrCorp" />
        <title>Thunderbolt by RazrCorp</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <meta
          name="description"
          content="It's time for a super fast dotcom. Thunderbolt is a framework built on open source tech powered by react to load your website in less than 2 seconds."
        />
        <meta
          name="keywords"
          content="Load website faster, decrease website loading speed,"
        />

        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="It's time for a super fast dotcom. Thunderbolt is a framework built on open source tech powered by react to load your website in less than 2 seconds."
        />

        <meta
          property="og:image"
          content={
            "https://res.cloudinary.com/xuppi-com/image/upload/v1657959406/favicon_si56il.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          href={ImageConstants.faviconImage}
          sizes="32x32"
        />
        <script src="https://consent.cookiefirst.com/sites/thunderboltjs.com-8db07785-6622-406d-9400-25c35cd0f103/consent.js"></script>
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
