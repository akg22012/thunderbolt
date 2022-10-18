import React from "react";
import ImageConstants from "../../constants/imageConstants";

const ExtraAddOnsCards = ({ isMonthly, currency }) => {
  const convertPrice = (price) => {
    return {
      currency,
      price,
    };
  };
  console.log("isMonth", isMonthly);
  const slides = [
    {
      title: "Subscription Services",
      des: "We set up and add a newsletter subscription form to your website from any 3rd party provider such as Mailchimp.",
      sub: "One-off Cost. Works with all Plans",
      cost: convertPrice(isMonthly ? 125 : 100),
      symbol: "£",
      buttonText: "Get Started",
    },
    {
      title: "Abandoned Basket",
      des: "Remind your customers who have left items in their shopping basket with automatic emails at set intervals.",
      sub: "One-off Cost. Works with all Plans",
      cost: convertPrice(isMonthly ? 250 : 200),
      symbol: "£",
      buttonText: "Get Started",
    },
    {
      title: "Custom Forms",
      des: "A dedicated project team of min 3-5 developments, UI/UX designers, project managers who works with you",
      sub: "One-off Cost. Works with all Plans",
      cost: convertPrice(isMonthly ? 60 : 48),
      symbol: "£",
      buttonText: "Get Started",
    },

    {
      title: "Membership System",
      des: "We add a full-featured membership solution to your website. Lock away content and give access to valued members.",
      sub: "One-off Cost. Works with all Plans",
      cost: convertPrice(isMonthly ? 350 : 280),
      symbol: "£",
      buttonText: "Get Started",
    },
    {
      title: "Paid Subscriptions",
      des: "Capture recurring revenue with a variety of paid subscriptions for physical or virtual products and services.",
      sub: "One-off Cost. Works with all Plans",
      symbol: "£",
      cost: convertPrice(isMonthly ? 450 : 360),
      buttonText: "Get Started",
    },
    {
      title: "On-Demand Developer",
      des: "Any Developers L5 Range (React/Node Js/Python/Php/Wordpress) & Application Support (Testers & Maintenance) for Man Day (7 Hours)",
      sub: "One-off Cost. Works with all Plans",
      cost: convertPrice(isMonthly ? 150 : 12),
      symbol: "£",
      buttonText: "Get Started",
    },
  ];
  return (
    <div className="row addon-container">
      {slides.map((s, index) => {
        const isLast = index === slides?.length - 1;
        return (
          <div key={index} className="col-md-4 addon-cards">
            <div className="extra-card-width ">
              <div className=" rounded-lg ">
                <div className="mb-2 space">{"s"}</div>
                <p className="monthly-card-title mb-3">{s.title}</p>
                <p className="monthly-cost px-5 ">
                  <sup className="suptext">
                    {s?.cost?.currency === "euro" ? "€" : "£"}
                  </sup>
                  <strong>{s?.cost?.price}</strong>
                  {/* <span> per {isMonthly ? "month":"year"}</span> */}
                  <br />
                  <span className="monthly-cost-sub-description">{s.sub}</span>
                </p>
                <p className={"text-black extra-card-description mt-4 px-4"}>
                  {s.des}
                </p>
                <br />
                <a
                  target={"_blank"}
                  href="https://dashboard.thunderboltjs.com/"
                >
                  <button
                    className={
                      isLast
                        ? "get-started-btn get-started-btn-last mt-0 mb-5"
                        : "get-started-btn mt-0 mb-5"
                    }
                  >
                    {s.buttonText}
                  </button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ExtraAddOnsCards;
