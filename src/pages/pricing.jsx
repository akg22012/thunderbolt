import React from "react";
import { useState } from "react";
import Layout from "../components/Layout";
import ExtraAddOnsCards from "../components/Pricing/ExtraAddOnsCards";
import MonthlyCards from "../components/Pricing/MonthlyCards";
import StandaredFeaturesSlider from "../components/StandaredFeaturesSlider";
import PayMonthlyWebsite from "../components/Pricing/PayMonthlyWebsite";
const Home = () => {
  const [isMonthly, setMonthly] = useState(true);
  const [currency, setCurrency] = useState("euro");
  return (
    <Layout>
      <div className="pricing--main-box bg-white p-md-5 p-4 ">
        <div class="pricing-header-section">
          <h1 class="title">
            Plans to suit your needs -<br className="d-md-flex d-none" /> Save
            upto 20% when billed annually
          </h1>{" "}
          <p class="sub-title">
            With Built-in Security and speed Optimizations for <br /> your site
            performance.
          </p>
        </div>
        <div className="tab-btn d-md-flex  mb-100 position-relative  align-items-center justify-content-center  position-realtive">
          <div className="price-tab-container  pricing-switch-btn">
            <p
              className={`${
                isMonthly
                  ? "price-tab price-tab-active pricing-monthly"
                  : "price-tab text-white"
              }`}
              onClick={() => setMonthly(true)}
            >
              Monthly
            </p>
            <p
              className={`${
                !isMonthly
                  ? "price-tab price-tab-active pricing-active-tab"
                  : "price-tab pricing-yearly"
              }`}
              onClick={() => setMonthly(false)}
            >
              Yearly
            </p>
          </div>
          <div className="pricing-selector px-5 d-flex">
            <label className="form-label mx-3 ">Select Currency</label>
            <select
              class=""
              aria-label=".form-select-sm example"
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
            >
              <option value="euro" selected>
                €
              </option>
              <option value="pound">£</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container pricing-container">
        <MonthlyCards
          showSub={false}
          currency={currency}
          isMonthly={isMonthly}
        />
      </div>

      <div className="hero-2 d- align-items-center justify-content-center">
        <div class="p-md-5 p-sm-3 jumbotron text-center jumbotron-fluid">
          <div class="container  ">
            <p className="pricing-hero-section-two">
              Enrich your plan with Add-ons
            </p>
            <p class="display-4 pricing-hero-section-two-h2">
              Pay Monthly Websites
            </p>{" "}
            <p class="lead pricing-p2  ">
              Modern Website with flexible payment options to suit your
              business, pay monthly or pay yearly with 20% off, No Set Up feesm
              No Contracts and all plans include unlimited website pages and
              unlimited content updates
            </p>
          </div>
        </div>
      </div>
      <div className="card-container  text-center">
        <div className="hero-two">
          <PayMonthlyWebsite
            showBootom={false}
            showDescription={false}
            isMonthly={isMonthly}
            currency={currency}
          />
        </div>
        <div className=" features-slider-container">
          <p className="stand text-center">Standard website features</p>
          <StandaredFeaturesSlider />
        </div>
      </div>

      <div className=" extra-addon-conatiner  text-center">
        <h2 className="extra  mb-5">Extra Add-Ons</h2>
        <ExtraAddOnsCards
          isMonthly={isMonthly}
          showFeaturs={false}
          showSub={true}
          showBootom={false}
          isExtraAddOn={true}
          showDescription={false}
          currency={currency}
        />
      </div>
    </Layout>
  );
};

export default Home;
