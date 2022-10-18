import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeSlider } from "../../constants/swiperConstants";
import ClientsImages from "../../components/ClientsImages";
import HomeBanner from "../../images/home-banner.webp";
import HomeBanner2 from "../../images/home-banner2.webp";
import HomeBanner3 from "../../images/home-banner3.webp";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row hero-container">
          <Swiper className="homeslider" {...homeSlider} pagination={true}>
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="content-container">
                  <div className="col-sm-12 col-lg-6 content-section">
                    <h1 className="title">It’s time to fix your web</h1>
                    <h2 className="sub-title">
                      Whether 20, or 200 pages, we are here to fix your core web
                      vitals & deliver a blazing fast experience
                    </h2>
                    <a
                      href="https://dashboard.thunderboltjs.com/"
                      target={"_blank"}
                    >
                      <button className="get-started">Get Started</button>
                    </a>
                  </div>
                  <div className="col-sm-12 col-lg-6 banner-img">
                    <img
                      className="banner1"
                      src={HomeBanner}
                      alt=""
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="content-container">
                  <div className="col-sm-12 col-lg-6 content-section">
                    <h1 className="title">Marketing ROI into 3X</h1>
                    <h2 className="sub-title">
                      Your team will love you for upto 3X more conversions on
                      your digital campaigns.
                    </h2>
                    <a
                      href="https://dashboard.thunderboltjs.com/"
                      target={"_blank"}
                    >
                      <button className="get-started">Get Started</button>
                    </a>
                  </div>
                  <div className="col-sm-12 col-lg-6 banner-img">
                    <img
                      className="banner2"
                      src={HomeBanner2}
                      alt=""
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="content-container">
                  <div className="col-sm-12 col-lg-6 content-section">
                    <h1 className="title">Your website can be fast too</h1>
                    <h2 className="sub-title">
                      In the age of thunderbolt, fast enough is simply not
                      enough.
                    </h2>
                    <a
                      href="https://dashboard.thunderboltjs.com/"
                      target={"_blank"}
                    >
                      <button className="get-started">Get Started</button>
                    </a>
                  </div>
                  <div className="col-sm-12 col-lg-6 banner-img">
                    <img
                      className="banner3"
                      src={HomeBanner3}
                      alt=""
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <ClientsImages />
      </div>
    </section>
  );
};

export default HeroSection;
