import { Link } from "gatsby";
import React from "react";
import ImageConstants from "../constants/imageConstants";
import routes from "../constants/routes";

const Footer = () => {
  const links = [
    {
      name: "How It Works",
      link: routes.howItWorks,
    },
    {
      name: "Why ThunderboltJS",
      link: `${routes.home}#why-thunderbolt`,
    },
    // {
    //   name: "Who Uses",
    //   link: routes.howItWorks,
    // },
    // {
    //   name: "Advantages",
    //   link: routes.howItWorks,
    // },
  ];
  const newLinks = [
    {
      name: "Check Pagespeed Insights",
      link: `${routes.home}#page-speed`,
    },
    {
      name: "Pricing",
      link: routes.pricing,
    },
  ];
  return (
    <footer className="site-footer">
      <div className="footer-container row">
        <div className="col-12 mt-md-0 mt-5 col-md-4 footer-logo-conatiner ">
          <img
            loading="lazy"
            className="footer-logo px-3 px-md-3"
            src={ImageConstants.logo}
            width={"100%"}
            height={"100%"}
          />
          <p className="footer-description px-3">
            ThunderboltJS is a framework, a compiler that improves your core web
            vitals which results in your site loading superfast. A new way of
            rendering websites basically.
          </p>
        </div>
        <div
          className="col-12 mt-md-0 mt-3 col-md-4 d-flex footer-links "
          style={{ marginLeft: "0px" }}
        >
          <ul>
            {Array.from(links).map((l, key) => {
              return (
                <li>
                  <Link className="footer-link" to={l.link}>
                    {l.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul>
            {Array.from(newLinks).map((l, key) => {
              return (
                <li>
                  <Link className="footer-link" to={l.link}>
                    {l.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-12 col-md-2"></div>
        <div className="col-md-2 col-12 px-md-5 px-3">
          <div className="canvas-btns">
            <a href="https://dashboard.thunderboltjs.com/" target={"_blank"}>
              <button className="px-md-0 footer-action-btn">Get Started</button>
            </a>
            <a href="https://calendly.com/razrco" target={"_blank"}>
              <button className="footer-action-btn">Book a call</button>
            </a>
          </div>
          <div className="mt-3 footer-social-icons justify-content-between mb-md-3 mt-md-2">
            <a
              href="https://www.linkedin.com/company/88646989/admin/"
              target={"_blank"}
              className="mt-3 pointer"
            >
              <img
                src={ImageConstants.InstaIcon}
                width={"100%"}
                height={"100%"}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/88646989/admin/"
              target={"_blank"}
              className="px-3 pointer"
            >
              <img
                src={ImageConstants.LinkdinIcon}
                width={"100%"}
                height={"100%"}
              />
            </a>
          </div>
          <div className=" d-md-none d-flex footer-bootom-links">
            <Link to={routes.privacyPolicy} className="px-5 pointer">
              Privacy Policy
            </Link>
            <Link to={routes.Terms} className="pointer">
              Terms
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom  d-md-flex ">
        <p>2022 @Razr Tech Sarl</p>
        <div className=" d-md-flex d-none footer-bootom-links">
          <Link to={routes.privacyPolicy} className="px-5 pointer">
            Privacy Policy
          </Link>
          <Link to={routes.Terms} className="pointer">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
