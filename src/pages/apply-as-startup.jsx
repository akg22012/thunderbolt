import React from "react";
import Layout from "../components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { becameagency } from "../constants/swiperConstants";
import ImageConstants from "../constants/imageConstants";
import FasterStats from "../screens/home/FasterStats";
import SuperfastDotCom from "../screens/home/SuperfastDotCom";
import FAQs from "../screens/home/FAQs";
import ClientsImages from "../components/ClientsImages";

const ApplyAsStartup = () => {
  return (
    <Layout>
      <section className="BeComePartnerSection">
        <div className="container">
          <div className="row align-items-center reverFlexMobile">
            <div className="col-lg-7">
              <div className="becamePartnertitle">
                <h1>
                  Start your journey <br></br> with a super-fast <br></br>{" "}
                  dotcom
                </h1>
                <a
                  href="https://form.jotform.com/223553192855461"
                  target="_blank"
                >
                  <button className="btn btn-primary">Apply Now</button>
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="becamePartnerHeroimg">
                <img
                  src={ImageConstants.startupBanner}
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
              <div className="Apply-slider-bg-text sliderTextMobile">
                <h5>Save UPTO</h5>
                <h6>90%</h6>
                <p>
                  Get Awesome Support & First 3 Months <br></br> Absolutely
                  Free.
                </p>
              </div>
              <Swiper
                className="becameagency StartupSlider "
                {...becameagency}
                navigation={true}
              >
                <div className="Apply-slider-bg-text">
                  <h5>Save UPTO</h5>
                  <h6>90%</h6>
                  <p>
                    Get Awesome Support & First <br></br> 3 Months Absolutely
                    Free.
                  </p>
                </div>
                <div className="swiper-wrapper">
                  <SwiperSlide className="mobileHide">
                    <div className="emtySlider"></div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="whyPartnerBox slider-overlay">
                      <div className="startupTemplateimg">
                        <img
                          src={ImageConstants.startupTemplate1}
                          width={"auto"}
                          height={"auto"}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="whyPartnerBox">
                      <div className="startupTemplateimg">
                        <img
                          src={ImageConstants.startupTemplate2}
                          width={"auto"}
                          height={"auto"}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="whyPartnerBox">
                      <div className="startupTemplateimg">
                        <img
                          src={ImageConstants.startupTemplate3}
                          width={"auto"}
                          height={"auto"}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
              <div className="saveUptoBTN">
                <a
                  href="https://form.jotform.com/223553192855461"
                  target="_blank"
                >
                  <button className="btn btn-primary">Apply Now</button>
                </a>
                {/* <button className="btn ExploreBtn">Explore Design</button> */}
              </div>
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
                <div className="howitWorkCard">
                  <div className="box-1">
                    <figure>
                      <img
                        src={ImageConstants.applyhowcardone}
                        width={"auto"}
                        height={"auto"}
                      />
                    </figure>
                    <div className="titlebox">
                      <h4>
                        <span>1</span>
                      </h4>
                      <h3>Get 3 Months Free</h3>
                    </div>
                  </div>
                  <div className="box-1">
                    <figure>
                      <img
                        src={ImageConstants.applyhowcardtwo}
                        width={"auto"}
                        height={"auto"}
                      />
                    </figure>
                    <div className="titlebox">
                      <h4>
                        <span>2</span>
                      </h4>
                      <h3>
                        Get Discounted Pricing <br></br> 50%-90% Off
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="SectionTitle text-center">Who is it for?</h2>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="whoisitfor">
                <figure>
                  <img
                    src={ImageConstants.startupHowItwork1}
                    width={"auto"}
                    height={"auto"}
                  />
                </figure>
                <h4>
                  Any startup <br></br> requiring a <br></br> website
                </h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="whoisitfor">
                <figure>
                  <img
                    src={ImageConstants.startupHowItwork2}
                    width={"auto"}
                    height={"auto"}
                  />
                </figure>
                <h4>
                  Startups which <br></br> run marketing <br></br> campaigns
                </h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="whoisitfor">
                <figure>
                  <img
                    src={ImageConstants.startupHowItwork3}
                    width={"auto"}
                    height={"auto"}
                  />
                </figure>
                <h4>
                  Startups which <br></br> struggle with <br></br> lead
                  generation <br></br> online
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="applyLogoSection">
        <ClientsImages />
      </section>
      <div className="FaterX">
        <FasterStats />
      </div>

      <div className="applySuper">
        <SuperfastDotCom superfastHeader="Why you need thunderboltJS" />
      </div>

      <div className="mb-5">
        <FAQs />
      </div>
    </Layout>
  );
};

export default ApplyAsStartup;
