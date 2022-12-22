import React from "react";
import Layout from "../components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { becameagency } from "../constants/swiperConstants";
import ImageConstants from "../constants/imageConstants";

const Becomeagency = () => {
  return (
    <Layout>
      <section className="BeComePartnerSection">
        <div className="container">
          <div className="row align-items-center reverFlexMobile">
            <div className="col-lg-7">
              <div className="becamePartnertitle">
                <h1>
                  Enhance, <br></br> transform & revamp your client’s digital
                  presence.
                </h1>
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="becamePartnerHeroimg">
                <img
                  src={ImageConstants.becameagencyBanner}
                  width={"auto"}
                  height={"auto"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="BecamewhySlider">
        <div class="container">
          <div class="row">
            <div className="col-12">
              <div className="sliderTextMobile">
                Why partner with <br></br> thunderboltJS?
              </div>
              <Swiper
                className="becameagency"
                {...becameagency}
                navigation={true}
              >
                <div className="slider-bg-text">
                  Why partner <br></br> with <br></br> thunderboltJS?
                </div>
                <div className="swiper-wrapper">
                  <SwiperSlide className="mobileHide">
                    <div className="emtySlider"></div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="whyPartnerBox slider-overlay">
                      <div>
                        <img
                          src={ImageConstants.agencyEernmore}
                          width={"auto"}
                          height={"auto"}
                        />
                        <h5>Earn more revenue</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="whyPartnerBox">
                      <div>
                        <img
                          src={ImageConstants.agencysuperfat}
                          width={"auto"}
                          height={"auto"}
                        />
                        <h5>Super-fast engineering support</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="whyPartnerBox">
                      <div>
                        <img
                          src={ImageConstants.agencyResult}
                          width={"auto"}
                          height={"auto"}
                        />
                        <h5>Results-oriented outcome</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="HowITWorkSection">
        <div class="container">
          <div class="row">
            <div className="col-12">
              <div className="howittext">
                <h2>How it works?</h2>
                <p>
                  We work with leading agencies to power their client’s dotcoms.
                  Agencies can benefit from bulk pricing <br></br> starting from
                  50-5000 pages. Speak with our team to know which plan works
                  best for you.
                </p>
                <a href="https://calendly.com/razrco" target={"_blank"}>
                  <button className="btn btn-primary">Book a call</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Becomeagency;
