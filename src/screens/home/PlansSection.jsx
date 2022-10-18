import React, { useState } from "react";
import PlansCard from "../../components/PlansCard";
import HighPerformanceSection from "./HighPerformanceSection";

const PlansSection = () => {
  const [isMonthly, setMonthly] = useState(true);
  const [currency, setCurrency] = useState("euro");

  const convertPrice = (price) => {
    return {
      currency,
      price,
    };
  };

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

  const highPerformingData = [
    {
      tag: "Brochure Style Website",
      price: convertPrice(75),
      pages: "Free Custom Design 1-5 Pages, additional pages at extra cost",
      isCustom: false,
    },
    {
      tag: "Booking Style Website",
      price: convertPrice(125),
      pages: "Free Custom Design 1-8 Pages, additional pages at extra cost",
      isCustom: false,
    },
    {
      tag: "Booking Style Website",
      price: convertPrice(150),
      pages: "Free Custom Design 1-10 Pages, additional pages at extra cost",
      isCustom: false,
    },
  ];

  return (
    <>
      <section className="plans-section parallax">
        <div className="container">
          <div className="row">
            <div>
              <h1 className="plans-title">
                Plans for delivering super fast websites
              </h1>
              <p className="plans-subtitle">
                Simple pricing no hidden costs - we maintain, host and provide
                technical support
              </p>
            </div>
          </div>
          <div className="currency-option-container">
            <div className="price-tab-container">
              <p
                className={`${
                  isMonthly ? "price-tab price-tab-active" : "price-tab"
                }`}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </p>
              <p
                className={`${
                  !isMonthly ? "price-tab price-tab-active" : "price-tab"
                }`}
                onClick={() => setMonthly(false)}
              >
                Yearly
              </p>
            </div>
            <div className="select-currency-container">
              <p>Select Currency</p>
              <select
                value={currency}
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  setCurrency(e.target.value);
                }}
              >
                <option selected value="euro">
                  €
                </option>
                <option value="pound">£</option>
              </select>
            </div>
          </div>
          <div className="cards-container">
            {plansData.map((el, i) => {
              return <PlansCard key={i} data={el} isMonthly={isMonthly} />;
            })}
          </div>
          <div className="container">
            <p style={{ color: "#FFFFFF", marginTop: "30px" }}>
              * VAT/Taxes to be charged additional as per country of purchase
            </p>
            <p className="price-footer-info">
              ** One-Off Set Up Cost for migration of your existing to new
              framework - USD 250 if you have exisiting site for 5 HTML pages +
              Additional USD 10 per page
            </p>
          </div>
        </div>
      </section>
      <HighPerformanceSection isMonthly={isMonthly} data={highPerformingData} />
    </>
  );
};

export default PlansSection;
