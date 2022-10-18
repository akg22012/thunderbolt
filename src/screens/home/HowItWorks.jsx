import React from "react";
import buildIcon from "../../images/icons/build.webp";
import customiseIcon from "../../images/icons/customise.webp";
import purchasePackageIcon from "../../images/icons/purchase-package.webp";
import { navigate } from "gatsby";
import Routes from "../../constants/routes";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h1 className="section-title">How it works?</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4 how-it-works-card">
            <img
              loading="lazy"
              src={purchasePackageIcon}
              alt=""
              width={"100%"}
              height={"100%"}
            />
            <h3>Purchase a package or book a call</h3>
            <p>Simply purchase a package that suits your needs...</p>
          </div>
          <div className="col-md-4 how-it-works-card">
            <img
              loading="lazy"
              src={customiseIcon}
              alt=""
              width={"100%"}
              height={"100%"}
            />
            <h3 className="w-50">Customise on the fly</h3>
            <p>Easy and quick design customisations on the go…</p>
          </div>
          <div className="col-md-4 how-it-works-card">
            <img
              loading="lazy"
              src={buildIcon}
              alt=""
              width={"100%"}
              height={"100%"}
            />
            <h3 className="w-50">Build & Launch</h3>
            <p>We will share a review link for your website before…</p>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <a target={"_blank"} href="https://dashboard.thunderboltjs.com/">
          <button className="active-btn">Get Started</button>
        </a>
        <button
          className="inactive-btn"
          onClick={() => navigate(Routes.howItWorks)}
        >
          Know more
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
