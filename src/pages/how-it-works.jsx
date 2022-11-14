import React, { useState } from "react";
import Layout from "../components/Layout";
import ImageConstants from "../constants/imageConstants";
import { InView } from "react-intersection-observer";
import routes from "../constants/routes";
import { navigate } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { howitWorkslider } from "../constants/swiperConstants";
const HowItWorks = () => {
  const [currency, setCurrency] = useState("pounds");

  const convertPrice = (price) => {
    return {
      currency,
      price,
    };
  };

  const menuList = [
    {
      name: "Dashboard",
      icon: ImageConstants.InstaIcon,
    },
    {
      name: "Services",
      icon: ImageConstants.InstaIcon,
    },
    {
      name: "WorkSpace",
      icon: ImageConstants.InstaIcon,
    },
    {
      name: "Domains",
      icon: ImageConstants.InstaIcon,
    },
    {
      name: "Messages",
      icon: ImageConstants.InstaIcon,
    },
    {
      name: "Account",
      icon: ImageConstants.InstaIcon,
    },
    {
      name: "Analytics",
      icon: ImageConstants.InstaIcon,
    },
    {
      name: "Terms",
      icon: ImageConstants.InstaIcon,
    },
  ];

  const howItWorksList = [
    {
      heading: "Collaboration",
      des: "Every Thunderbolt customer gets a free discovery call once the order has been placed. This collaboration helps us align with your vision. Define your niche, customer base and strategies. All in all, giving us a deeper understanding allows us to serve the perfect design template for your website.",
      img: ImageConstants.HowItWorks1,
    },
    {
      heading: "Content & design customisations on the fly",
      des: "“Would you like some orange juice?” Or “How about some freshly squeezed pulpy orange juice?” You see what we did there. A well-researched content can influence your decisions and increase your website conversions. Check out our content packages for more information. Just like content, design has its own magic. Once you have your design in place, it’s not the end. You can always revisit your design before stepping into development.",
      img: ImageConstants.HowItWorks2,
    },
    {
      heading: "Website under construction",
      des: "Your work now here is done! All you need to do is have a seat and sip your coffee while your website is getting faster. We take xx- xx days to get your website ready.",
      img: ImageConstants.HowItWorks3,
    },
    {
      heading: "Launch",
      des: "We will share a link to review your website before we make any final tweaks. Once approved, our team will launch your website following the best industry standards.",
      img: ImageConstants.HowItWorks4,
    },
    {
      heading: "Marketing & technical support",
      des: "We will take care of your website including code updates, hosting, maintenance, SEO, core web vitals, content updates, etc. With over a decade of experience in the industry, we can definitely help you rank higher, convert more users into customers, and increase revenue. Check out our marketing plans.",
      img: ImageConstants.HowItWorks5,
    },
  ];

  const plansData = [
    {
      tag: "Economy",
      info: "Launch your online platform, your way, with ease",
      price: convertPrice(50),
      pages: "Upto 10 Pages HTML Website**",
      isCustom: false,
    },
    {
      tag: "Standard",
      info: "The complete solution for your business growth",
      price: convertPrice(100),
      pages: "Upto 20 Pages HTML Website**",
      isCustom: false,
    },
    {
      tag: "Ultimate",
      info: "Perfect for growing your high traffic sites",
      price: convertPrice(250),
      pages: "Upto 30 Pages HTML Website**",
      isCustom: false,
    },
    {
      tag: "Maximum",
      info: "Perfect for Enterprise business",
      pages: "Custom",
      isCustom: true,
    },
  ];
  const [className, setClassName] = useState("");

  return (
    <Layout>
      <div className="how-it-works-main-box  position-realtive">
        <div className=" mt-5 d- align-items-center justify-content-center">
          <div class="p-md-5 mx-md-5  p-0 m-0  mb-2 jumbotron text-center jumbotron-fluid">
            <div className="how-it-works-hero">
              <p className=" how-it-works-heading">
                How it works
              </p>
              {/* <span className="how-it-works-des">
                We’ll cover all your technology needs when we provide you the
                managed services, these services gives support for total peace
                of mind while you focus on your business, and we bring in our
                comprehensive expertise in IT
              </span> */}
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works-card-conatiner  d-md-flex align-items-center justify-content-center">
        <div class="mx-md-5 p-0 m-0  mb-2 jumbotron text-center jumbotron-fluid">
          <div className="row how-it-works-hero-card">
            {/* <img src={ImageConstants.serviceHosting} /> */}
            <div className="how-it-work-Box">
              <h3>Your full <br></br> digital support ecosystem</h3>
              <div className="digital-support-Box">
                <img src={ImageConstants.digitalSupport} className="how-it-desktop" />
                <img src={ImageConstants.digitalSupportMob}  className="how-it-mob"/>
                <div className="dBox-1">
                  <img src={ImageConstants.yourDesign} />
                  <p>Your Design or Existing Site</p>
                </div>
                <div className="dBox-2">
                  <img src={ImageConstants.yourDesign1} />
                  <p>Our Design + CMS</p>
                </div>
                <div className="dBox-3">
                  <img src={ImageConstants.yourDesign2} />
                  <p>Our Design (Static site)</p>
                </div>
              </div>
              <div className="laptop-howit-work">
                <img src={ImageConstants.laptopWeb} className="img"/>
                  <p>Converted to a blazing fast dotcom by our compiler</p>
              </div>
              <div className="lock-customer-main">
                <div className="cust-box">
                  <div className="img-box">
                    <img src={ImageConstants.lockcust} />
                    </div>
                
                </div>
                <div className="cust-box">
                    <div className="img-box plus"> 
                    <img src={ImageConstants.lockPlus} />
                    </div>
                </div>
                <div className="cust-box">
                   <div className="img-box customer"> 
                    <img src={ImageConstants.lockcare} />
                      </div>
                

                </div>
              </div>
              <div className="lock-customer-main">
                <div className="cust-box">
                  
                  <p>Looked by an engineer <br></br> incase of anything</p>
                </div>
                <div className="cust-box">
                    

<svg xmlns="http://www.w3.org/2000/svg" width="9" height="106.5" viewBox="0 0 9 106.5">
  <g id="Group_20147" data-name="Group 20147" transform="translate(-679 -1263.5)">
    <line id="Line_4822" data-name="Line 4822" y2="102" transform="translate(683.5 1263.5)" fill="none" stroke="#1664f7" stroke-width="2"/>
    <g id="Ellipse_893" data-name="Ellipse 893" transform="translate(679 1264)" fill="#1664f7" stroke="#1664f7" stroke-width="1">
      <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
      <circle cx="4.5" cy="4.5" r="4" fill="none"/>
    </g>
    <g id="Ellipse_894" data-name="Ellipse 894" transform="translate(679 1361)" fill="#1664f7" stroke="#1664f7" stroke-width="1">
      <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
      <circle cx="4.5" cy="4.5" r="4" fill="none"/>
    </g>
  </g>
</svg>

                </div>
                <div className="cust-box">
                   
                  <p>Customer service you will <br></br>  love at every step of the way</p>

                </div>
              </div>
              <div className="laptop-howit-work laptop-howit-work-btm">
                <img src={ImageConstants.laptopCms} />
                  <p>We use industry leading  <img src={ImageConstants.strapiLogo} /> as your CMS <br></br> With regular updates, you don’t need to worry about anything</p>
              </div>
               <div className="laptop-howit-work laptop-howit-work-btm">
                <img src={ImageConstants.worldIcon} />
                  <p>Once done, we show you your dotcom on a test link & point it to the <br></br> domain of your choice</p>
              </div>
              <div className="quick-Secure-Box">
                <div className="sbox">
                  <span>.biz</span>
                  <span className="org">.org</span>
                  <span className="com">.com</span>
                  <span className="info">.info</span>
                  <span className="edu">.edu</span>
                  <span className="net">.net</span>
                  <span className="gov">.gov</span>
                  <span className="tv">.tv</span>
                </div>
                <div className="sbox">
                   <img src={ImageConstants.quickArrow}  className="Arrow"/>
                </div>
                <div className="sbox">
                   <img src={ImageConstants.quickWeb} />
                </div>
                <div className="quickText">
                  <p>Quick, Easy & 100% secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="Boost-web-site">
              <h2>Boost your website in 5 steps</h2>
            </div>
          </div>
        </div>
      </div>
         <Swiper className="howitWorkslider" {...howitWorkslider}>
        <div className="swiper-wrapper">
          <SwiperSlide>
              <div className="BoosterSliderBox">
                 <div className="bimg">
              <img
                width={"100%"}
                height={"100%"}
                loading="lazy"
                src={ImageConstants.HowItWorks1}
                alt="castrol"
                  />
                </div>
                <div className="sliderTitle">
                  <p>1</p>
                   <h3 className="title"> Collaboration</h3>
                </div>
                <p className="Descriptions">Every Thunderbolt customer gets a free discovery call once the order has been placed. This collaboration helps us align with your vision. Define your niche, customer base and strategies. All in all, giving us a deeper understanding allows us to serve the perfect design template for your website.</p>
               
            </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="BoosterSliderBox">
                 <div className="bimg">
              <img
                width={"100%"}
                height={"100%"}
                loading="lazy"
                src={ImageConstants.HowItWorks2}
                alt="toi"
                  />
                </div>
                 <div className="sliderTitle">
                  <p>2</p>
                   <h3 className="title"> Content & design customisations on the fly</h3>
                </div>
              
                <p className="Descriptions">“Would you like some orange juice?” Or “How about some freshly squeezed pulpy orange juice?” You see what we did there. A well-researched content can influence your decisions and increase your website conversions. Check out our content packages for more information. Just like content, design has its own magic. Once you have your design in place, it’s not the end. You can always revisit your design before stepping into development.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="BoosterSliderBox">
                <div className="bimg">
              <img
                width={"100%"}
                height={"100%"}
                loading="lazy"
                src={ImageConstants.HowItWorks3}
                alt="goeres"
                  />
                </div>
                 <div className="sliderTitle">
                  <p>3</p>
                   <h3 className="title"> Website under construction</h3>
                </div>
              
                <p className="Descriptions">Your work now here is done! All you need to do is have a seat and sip your coffee while your website is getting faster. We take xx- xx days to get your website ready.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="BoosterSliderBox">
                 <div className="bimg">
              <img
                width={"100%"}
                height={"100%"}
                loading="lazy"
                src={ImageConstants.HowItWorks4}
                alt="firstpost"
                  />
                </div>
                 <div className="sliderTitle">
                  <p>4</p>
                   <h3 className="title"> Launch</h3>
                </div>
             
                <p className="Descriptions">We will share a link to review your website before we make any final tweaks. Once approved, our team will launch your website following the best industry standards.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="BoosterSliderBox">
                  <div className="bimg">
              <img
                width={"100%"}
                height={"100%"}
                loading="lazy"
                src={ImageConstants.HowItWorks5}
                alt="l-t"
                  />
                </div>
                 <div className="sliderTitle">
                  <p>5</p>
                   <h3 className="title"> Marketing & technical support</h3>
                </div>
               
                <p className="Descriptions">We will take care of your website including code updates, hosting, maintenance, SEO, core web vitals, content updates, etc. With over a decade of experience in the industry, we can definitely help you rank higher, convert more users into customers, and increase revenue. Check out our marketing plans.</p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      </section>
      {/* <div className=" d- align-items-center justify-content-center">
        <div class="p-0 m-0  mb-2 jumbotron text-center jumbotron-fluid">
          <div className="how-it-works-hero-two">
            <p className=" how-it-works-heading hiw-heading-hero-two mb-0">
              How It Works
            </p>
            {howItWorksList.map((card, key) => {
              const isEven = key % 2 === 0;
              const isLast = howItWorksList?.length - 1 === key;
              return (
                <>
                  {isEven ? (
                    <>
                      <div
                        className={
                          isLast
                            ? "row p-0 hiw-last-card d-md-flex d-none m-0"
                            : "row d-md-flex d-none p-0 m-0"
                        }
                      >
                        <div className="col-md-5 col-12 position-md-realtive px-md-5 img-box-hero-2">
                          <img
                            className="mx-md-5 px-md-5 user-img"
                            src={card.img}
                          />
                        </div>
                        <InView threshold={0.5}>
                          {({ inView, ref, entry }) => (
                            <div
                              ref={ref}
                              className={
                                key === 0
                                  ? "col-md-2 d-none d-md-inline center-row-conatiner mt-5"
                                  : "col-md-2 d-none d-md-inline center-row-conatiner mt-2"
                              }
                            >
                              <div
                                className={
                                  inView
                                    ? "hero-btn-round-active mb-2"
                                    : "hero-btn-round mb-2"
                                }
                              >
                                <h1>{key + 1}</h1>
                              </div>
                              <div
                                className={
                                  isLast && inView
                                    ? "vl-last"
                                    : inView && !isLast
                                    ? "full-vl"
                                    : isLast
                                    ? "vl-last-inactive"
                                    : "vl"
                                }
                              ></div>
                            </div>
                          )}
                        </InView>
                        <div
                          className={
                            key === 0
                              ? "col-md-2 d-none d-md-inline center-row-conatiner mt-5"
                              : "col-md-2 d-none d-md-inline center-row-conatiner mt-2"
                          }
                        >
                          <button className="hero-btn-round-active mb-2">
                            {key + 1}
                          </button>
                          <div
                            className={
                              isLast
                                ? "vl-last"
                                : className !== ""
                                ? className
                                : ` vl-active`
                            }
                          ></div>
                        </div>
                        <div className="col-md-5 col-12  ">
                          <div className="collabration-conatiner mt-5 ">
                            <p className="col-text">{card.heading}</p>
                            <p className="col-des">{card.des}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="d-md-flex d-none row p-0 m-0">
                      <div className="col-md-5 how-it-works-opp">
                        <p className="how-it-works-head-opp">{card.heading}</p>
                        <p className="how-it-works-des-opp">{card.des}</p>
                      </div>

                      <InView threshold={0.5}>
                        {({ inView, ref, entry }) => (
                          <div
                            ref={ref}
                            className="col-2 d-none d-md-inline center-row-conatiner-active "
                          >
                            <div
                              className={
                                inView
                                  ? "hero-btn-round-active mb-2"
                                  : "hero-btn-round mb-2"
                              }
                            >
                              <h1>{key + 1}</h1>
                            </div>
                            {
                              <div
                                className={
                                  isLast && inView
                                    ? "vl-last"
                                    : inView && !isLast
                                    ? "full-vl"
                                    : isLast
                                    ? "vl-last-inactive"
                                    : "vl"
                                }
                              ></div>
                            }
                          </div>
                        )}
                      </InView>
                      <div className="col-5">
                        <div className="hiw-oop-img-conatiner position-realtive">
                          <img src={card.img} className="hiw-oop-img" />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
            <div className=" d-md-none">
              {howItWorksList.map((card, key) => {
                const isLast = howItWorksList?.length - 1 === key;

                return (
                  <>
                    <div
                      style={key !== 0 ? { marginTop: "-30px" } : null}
                      className=" d-flex position-relative mx-3"
                    >
                      <InView threshold={0.5}>
                        {({ inView, ref, entry }) => (
                          <div ref={ref} className={" d-flex  mt-5"}>
                            <div
                              className={
                                inView
                                  ? "hero-btn-round-active mb-2"
                                  : "hero-btn-round mb-2"
                              }
                            >
                              <h1>{key + 1}</h1>
                            </div>
                            <div
                              className={
                                isLast ? "vl-last" : inView ? "full-vl" : "vl"
                              }
                            ></div>
                            <div>
                              <p className="hiw-card-heading">{card.heading}</p>
                              <img
                                className="hiw-card-img-mob "
                                src={card.img}
                              />
                              <p className="hiw-card-des-mob">{card.des}</p>
                            </div>
                          </div>
                        )}
                      </InView>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div> */}
      <div className="how-it-works-hero-three  position-realtive">
        <div className=" d- align-items-center justify-content-center">
          <div class="p-md-5 mx-md-5 mx-2 p-0 m-0  mb-2 jumbotron text-center jumbotron-fluid">
            <div className="hiw-hero-three-inside mt-3 ">
              <p className=" hiw-hero-three-heading">
               High Performing Pay Monthly Managed Websites
              </p>
              <div className="hiw-hero-three-span-parent">
                <span className="hiw-hero-three-inside-des ">
                 We provides affordable digital solution for one monthly fees to design, deploy and managed your business sites.
                </span>
              </div>
              <br />
              <button
                className="view-pricing-btn"
                onClick={() => navigate(routes.pricing)}
              >
                View pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorks;
