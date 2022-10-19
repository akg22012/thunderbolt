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
          content="Boost your marketing conversions upto 3x with our blazing fast technology - ThunderboltJs by RazrCorp"
        />
        <meta
          name="keywords"
          content="increase marketing conversions, boost marketing conversions, superfast website in Europe"
        />

        <meta
          property="og:title"
          content="A superfast website that gives you 3x ROI - ThunderboltJs by RazrCorp"
        />
        <meta
          property="og:description"
          content="Boost your marketing conversions upto 3x with our blazing fast technology - ThunderboltJs by RazrCorp"
        />

        <meta
          property="og:image"
          content={
            "https://res.cloudinary.com/xuppi-com/image/upload/v1666165547/Thunderbolt_favicon_white_bs1k0i.png"
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
