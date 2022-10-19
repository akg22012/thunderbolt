import React from "react";
import ImageConstants from "../../constants/imageConstants";

const PayMonthlyWebsite = ({
  showBootom = true,
  showFeaturs = true,
  isExtraAddOn = false,
  showDescription = true,
  showSub = false,
  currency,
  isMonthly,
}) => {
  const convertPrice = (price) => {
    return {
      currency,
      price,
    };
  };
  const cards = [
    {
      title: "Brochure Style Website",
      des: "Launch your online platform, your way, with ease",
      price: convertPrice(isMonthly ? 75 : 60),
      link: isMonthly
        ? "https://dashboard.thunderboltjs.com/order/product?catid=57052d13-7e08-d241-11a7-495163789e68&pid=9293e8d5-69d0-7245-261a-84e853121607"
        : "https://dashboard.thunderboltjs.com/order/product?catid=57052d13-7e08-d241-11a7-495163789e68&pid=15196e02-e513-6d42-183c-e429807875d3",
      features: [
        "Free Custom Design 1-5 Pages, additional pages at extra cost",
        "Terms and Privacy Pages Included",
        "Unlimited pages/Content",
        "Contact forms and gallaries",
        "Includes CMS Backend (Content Management System)",
        "Mobile and tablet Optimized",
        "Basic on-page SEO",
        "Google Search Console Index",
        "Google Analytics",
        "30 Minutes of our Monthly Time",
        "Monthly Updates, Backups, Reporting",
        "Blog/News",
        "Newsletter Subscription",
        "Live Chat",
        "Event Calendar",
        "Booking/Appointment system",
        "Sell Products/Services",
        "Payment Gateway integration",
      ],
      garyAfter: 10,
    },
    {
      title: "Booking Style Website",
      des: "The complete solution for your business growth",
      price: convertPrice(isMonthly ? 125 : 100),
      link: isMonthly
        ? "https://dashboard.thunderboltjs.com/order/product?catid=57052d13-7e08-d241-11a7-495163789e68&pid=301e96d2-9853-7d4e-d5ea-e4e120637085"
        : "https://dashboard.thunderboltjs.com/order/product?catid=57052d13-7e08-d241-11a7-495163789e68&pid=1261e509-8973-d247-0dec-145e610832d7",
      features: [
        "Free Custom Design 1-8 Pages, additional pages at extra cost",
        " Terms and Privacy Pages Included",
        "Unlimited pages/Content",
        " Contact forms and gallaries ",
        " Includes CMS Backend (Content Management System) ",
        "Mobile and tablet Optimized",
        "Basic on-page SEO ",
        " Google Search Console Index ",
        " Google Analytics ",
        "30 Minutes of our Monthly Time",
        "Monthly Updates, Backups, Reporting ",
        "Blog/News  ",
        "Newsletter Subscription",
        "Live Chat",
        "Event Calendar",
        "Booking/Appointment system",
        "Sell Products/Services",
        "Payment Gateway integration",
      ],
      garyAfter: 15,
    },
    {
      title: "E-commerce Website",
      des: "Perfect for growing your high traffic sites",
      price: convertPrice(isMonthly ? 150 : 120),
      link: isMonthly
        ? "https://dashboard.thunderboltjs.com/order/product?catid=57052d13-7e08-d241-11a7-495163789e68&pid=1280d163-9e23-7d43-858b-d4610589e572"
        : "https://dashboard.thunderboltjs.com/order/product?catid=57052d13-7e08-d241-11a7-495163789e68&pid=301e96d2-9853-7d4e-9e9b-e4e120637085",
      features: [
        "Free Custom Design 1-10 Pages, additional pages at extra cost ",
        "Terms and Privacy Pages Included",
        "Unlimited pages/Content",
        "Contact forms and gallaries",
        "Includes CMS Backend (Content Management System)",
        "Mobile and tablet Optimized",
        "Basic on-page SEO",
        "Google Search Console Index",
        "Google Analytics",
        "30 Minutes of our Monthly Time",
        "Monthly Updates, Backups, Reporting",
        "Blog/News",
        "Newsletter Subscription",
        "Live Chat",
        "Event Calendar",
        "Booking/Appointment system",
        "Sell Products/Services",
        "Payment Gateway integration",
      ],
      garyAfter: false,
    },
  ];
  return (
    <div className="row ">
      {cards?.map((d, key) => {
        return (
          <>
            <div className="col-md-4">
              <div className="monthly-card pay-monthly-card text-center flex-fill">
                <div className="bg-white rounded-lg ">
                  <div className="mb-2 space">{"s"}</div>
                  <p className="monthly-card-title mb-2  ">{d.title}</p>
                  <p
                    className={
                      d?.symbol === false ? "contact-sales " : "monthly-cost"
                    }
                  >
                    {d?.symbol !== false && (
                      <sup className="suptext">
                        {d?.price.currency === "euro" ? "€" : "£"}
                      </sup>
                    )}
                    <strong>{d.price.price}</strong>

                    <span> per {isMonthly ? "month" : "year"}</span>

                    <br />
                  </p>

                  <a
                    target={"_blank"}
                    href={d.link}
                    className=" mt-3 get-started-btn"
                  >
                    Get Started
                  </a>
                </div>
                {showFeaturs && (
                  <div className="points p-3">
                    {d.features.map((f, i) => {
                      const isDisable =
                        d.garyAfter === false ? false : i >= d.garyAfter + 1;
                      return (
                        <>
                          <div className="pointMain">
                            <img
                              className="pointImg"
                              src={
                                isDisable
                                  ? ImageConstants.mutedFeatureIcon
                                  : ImageConstants.featureIcon
                              }
                            />
                            <p
                              className={
                                isDisable
                                  ? "point-text-muted"
                                  : "text-start point-text "
                              }
                            >
                              {f}
                            </p>
                          </div>
                          {/* <div className={"d-flex px-2 position-realtive"}>
                            <img
                              className="position-absolute point-img"
                              loading="lazy"
                              src={ImageConstants.featureIcon}
                            />
                            <p className="text-start ">{f}</p>
                          </div> */}
                        </>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default PayMonthlyWebsite;
