import { useLocation } from "@reach/router";
import { Link, navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import ImageConstants from "../constants/imageConstants";
import routes from "../constants/routes";
import hambarIcon from "../images/icons/hambar.webp";
import headerHome from "../images/icons/header-home.webp";
import closeIcon from "../images/icons/close-icon.webp";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [pathName, setPathName] = useState();
  const location = useLocation();

  useEffect(() => {
    setPathName(location?.pathname);
  }, [location?.pathname]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light container">
        <Link to={routes.home} className="navbar-brand">
          <img
            loading="lazy"
            src={ImageConstants.logo}
            alt="logo"
            width={"100%"}
            height={"100%"}
          />
        </Link>
        <div
          className="collapse navbar-collapse nav-items-container"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav nav-items">
            <li
              className={
                pathName === routes.howItWorks
                  ? "nav-item active-link"
                  : "nav-item "
              }
            >
              <Link className={"nav-link"} to={routes.howItWorks}>
                How It Works
              </Link>
            </li>
            <li
              className={
                pathName === routes.pricing
                  ? "nav-item active-link"
                  : "nav-item "
              }
            >
              <Link className="nav-link" to={routes.pricing}>
                Pricing
              </Link>
            </li>
          </ul>
          <div className="header-btns">
            <a target={"_blank"} href="https://dashboard.thunderboltjs.com/">
              <button className="login">Log In</button>
            </a>
            <a target={"_blank"} href="https://dashboard.thunderboltjs.com/">
              <button className="get-started">Get Started</button>
            </a>
          </div>
        </div>

        <div className="hambar" onClick={() => setOpen(true)}>
          <img
            loading="lazy"
            src={hambarIcon}
            alt=""
            width={"100%"}
            height={"100%"}
          />
        </div>
      </nav>

      <div
        className={`offcanvas offcanvas-top canvas-container ${
          isOpen ? "show" : ""
        }`}
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="home-button" onClick={() => setOpen(false)}>
          <Link to={routes.home}>
            <img
              loading="lazy"
              src={headerHome}
              alt=""
              width={"100%"}
              height={"100%"}
            />
          </Link>
        </div>
        <div className="close-btn-section" onClick={() => setOpen(false)}>
          <img
            loading="lazy"
            src={closeIcon}
            alt=""
            width={"100%"}
            height={"100%"}
          />
        </div>

        <div className="offcanvas-body">
          <div className="left-sidebar">
            <div className="container">
              <p
                className={
                  pathName === routes.howItWorks
                    ? " active-link"
                    : "nav-item-canvas"
                }
              >
                <Link to={routes.howItWorks}>How it works</Link>
              </p>
              <p
                className={
                  pathName === routes.pricing
                    ? "nav-item-canvas active-link"
                    : "nav-item-canvas"
                }
              >
                <Link to={routes.pricing}>Pricing</Link>
              </p>
              {/* <p className="nav-item-canvas">
                <Link>Advantages</Link>
              </p> */}
              <p className="nav-item-canvas">
                <Link
                  to={`${routes.home}#page-speed`}
                  onClick={() => setOpen(false)}
                >
                  Check Pagespeed Insights
                </Link>
              </p>
            </div>
          </div>
          <div className="right-sidebar">
            <div className="sidebar-content">
              <h2 className="title">
                The best way to Build, deploy & scale Thunderbolt sites
              </h2>

              <div className="buttons">
                <a
                  href="https://dashboard.thunderboltjs.com/"
                  target={"_blank"}
                >
                  <div className="btn-container active-btn">
                    <button>Get Started</button>
                  </div>
                </a>
                <div className="btn-container">
                  <a href="https://calendly.com/razrco" target={"_blank"}>
                    <button className="footer-action-btn p-0 m-0">
                      Book a call
                    </button>
                  </a>
                </div>
              </div>

              <div className="sidebar-footer">
                <p
                  role={"button"}
                  onClick={() => navigate(routes.privacyPolicy)}
                >
                  Privacy Policy
                </p>
                <p role={"button"} onClick={() => navigate(routes.Terms)}>
                  Terms
                </p>
                <a
                  target={"_blank"}
                  href="https://dashboard.thunderboltjs.com/"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
