import React, { useState } from "react";
import PlansCard from "../../components/PlansCard";
import HighPerformanceSection from "./HighPerformanceSection";

const PlansSection = () => {
  const [isMonthly, setMonthly] = useState(true);
  const [currency, setCurrency] = useState("euro");

  const convertPrice = (price) => {
    const cost = isMonthly ? price : price - (price * 20) / 100;
    return {
      currency,
      price: cost,
    };
  };

  const plansData = [
    {
      tag: "Economy",
      info: "Launch your online platform, your way, with ease",
      price: convertPrice(50),
      pages: "Upto 10 Pages HTML Website**",
      link: isMonthly
        ? "https://dashboard.thunderboltjs.com/order/product?catid=9293e8d5-69d0-7245-91f8-4e8531216076&pid=050381d7-80e7-2d4d-16dc-6413569926e5"
        : "https://dashboard.thunderboltjs.com/order/product?catid=9293e8d5-69d0-7245-91f8-4e8531216076&pid=1280d163-9e23-7d43-e23c-d4610589e572",
      isCustom: false,
    },
    {
      tag: "Standard",
      info: "The complete solution for your business growth",
      price: convertPrice(100),
      pages: "Upto 20 Pages HTML Website**",
      link: isMonthly
        ? "https://dashboard.thunderboltjs.com/order/product?catid=9293e8d5-69d0-7245-91f8-4e8531216076&pid=9293e8d5-69d0-7245-211b-84e853121607"
        : "https://dashboard.thunderboltjs.com/order/product?catid=9293e8d5-69d0-7245-91f8-4e8531216076&pid=1280d163-9e23-7d43-e82a-d4610589e572",
      isCustom: false,
    },
    {
      tag: "Ultimate",
      info: "Perfect for growing your high traffic sites",
      price: convertPrice(250),
      pages: "Upto 30 Pages HTML Website**",
      link: isMonthly
        ? "https://dashboard.thunderboltjs.com/order/product?catid=9293e8d5-69d0-7245-91f8-4e8531216076&pid=d35983e2-306e-7540-d1ea-54981d210d76"
        : "https://dashboard.thunderboltjs.com/order/product?catid=9293e8d5-69d0-7245-91f8-4e8531216076&pid=050381d7-80e7-2d4d-011c-6413569926e5",
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
      link: isMonthly
        ? "https://dashboard.thunderboltjs.com/order/product?catid=57052d13-7e08-d241-11a7-495163789e68&pid=9293e8d5-69d0-7245-261a-84e853121607"
        : "https://dashboard.thunderboltjs.com/order/product?catid=57052d13-7e08-d241-11a7-495163789e68&pid=15196e02-e513-6d42-183c-e429807875d3",
      isCustom: false,
    },
    {
      tag: "Booking Style Website",
      price: convertPrice(125),
      pages: "Free Custom Design 1-8 Pages, additional pages at extra cost",
      link: isMonthly
        ? "https://dashboard.thunderboltjs.com/order/product?catid=57052d13-7e08-d241-11a7-495163789e68&pid=301e96d2-9853-7d4e-d5ea-e4e120637085"
        : "https://dashboard.thunderboltjs.com/order/product?catid=57052d13-7e08-d241-11a7-495163789e68&pid=1261e509-8973-d247-0dec-145e610832d7",
      isCustom: false,
    },
    {
      tag: "Booking Style Website",
      price: convertPrice(150),
      pages: "Free Custom Design 1-10 Pages, additional pages at extra cost",
      link: isMonthly
        ? "https://dashboard.thunderboltjs.com/order/product?catid=57052d13-7e08-d241-11a7-495163789e68&pid=1280d163-9e23-7d43-858b-d4610589e572"
        : "https://dashboard.thunderboltjs.com/order/product?catid=57052d13-7e08-d241-11a7-495163789e68&pid=301e96d2-9853-7d4e-9e9b-e4e120637085",
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
              return (
                <PlansCard
                  scrollSpy={"hosting-cloud-services"}
                  key={i}
                  data={el}
                  isMonthly={isMonthly}
                />
              );
            })}
          </div>
          <div className="container">
            <p style={{ color: "#FFFFFF", marginTop: "30px" }}>
              * VAT/Taxes to be charged additional as per country of purchase
            </p>
            <p className="price-footer-info">
              ** One-Off Set Up Cost for migration of your existing to new
              framework - € 250 if you have exisiting site for 5 HTML pages +
              Additional € 10 per page
            </p>
          </div>
        </div>
      </section>
      <HighPerformanceSection isMonthly={isMonthly} data={highPerformingData} />
    </>
  );
};

export default PlansSection;
