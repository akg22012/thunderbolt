import React, { useState } from "react";
import Layout from "../components/Layout";
import ImageConstants from "../constants/imageConstants";
import { InView } from "react-intersection-observer";
import routes from "../constants/routes";
import { navigate } from "gatsby";
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
      <div className="how-it-works-main-box mb-5 position-realtive">
        <div className=" mt-5 d- align-items-center justify-content-center">
          <div class="p-md-5 mx-md-5  p-0 m-0  mb-2 jumbotron text-center jumbotron-fluid">
            <div className="how-it-works-hero">
              <p className=" how-it-works-heading">
                Your full <br /> digital support ecosystem
              </p>
              <span className="how-it-works-des ">
                We’ll cover all your technology needs when we provide you the
                managed services, these services gives support for total peace
                of mind while you focus on your business, and we bring in our
                comprehensive expertise in IT
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works-card-conatiner  d-md-flex align-items-center justify-content-center">
        <div class="p-md-5 mx-md-5 p-0 m-0  mb-2 jumbotron text-center jumbotron-fluid">
          <div className="row how-it-works-hero-card">
            <img src={ImageConstants.serviceHosting} />
          </div>
        </div>
      </div>
      <div className=" mt-5 d- align-items-center justify-content-center">
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
                        {/* <div
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
                        </div> */}
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
      </div>
      <div className="how-it-works-hero-three  position-realtive">
        <div className=" d- align-items-center justify-content-center">
          <div class="p-md-5 mx-md-5 mx-2 p-0 m-0  mb-2 jumbotron text-center jumbotron-fluid">
            <div className="hiw-hero-three-inside mt-3 ">
              <p className=" hiw-hero-three-heading">
                High Performing Pay Monthly Managed Websites
              </p>
              <div className="hiw-hero-three-span-parent">
                <span className="hiw-hero-three-inside-des ">
                  We provides affordable digital solution for one monthly fees
                  to design, deploy and managed your business sites.
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
