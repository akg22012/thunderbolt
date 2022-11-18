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
// import { Script } from "gatsby";

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
        <meta property="og:locale" content="en_US" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta property="og:image" itemProp="image" content={"https://res.cloudinary.com/xuppi-com/image/upload/v1666189075/preview-img_u3wq4l.png"} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:site_name" content="Thunderboltjs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://thunderboltjs.com/"} />
        <meta property="og:title" content="A blazing fast framework to load your site in less than 2 seconds for as low as 50€/month." />
        <meta property="og:description" content="Boost your campaign conversions upto 3X. Increase time spent upto 5X" />
        <meta name="description" content="Boost your campaign conversions upto 3X. Increase time spent upto 5X" />
        <meta name="keywords" content="increase marketing conversions, boost marketing conversions, superfast website in Europe" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="robots" content="index, follow" /> */}
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="icon" type="image/png" href={ImageConstants.faviconImage} sizes="32x32" />
        <Script src="https://consent.cookiefirst.com/sites/thunderboltjs.com-8db07785-6622-406d-9400-25c35cd0f103/consent.js"></Script>
        {/* <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`}
          strategy="off-main-thread"
          forward={[`dataLayer.push`]}
        /> */}
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
