import React, { useState } from "react";
import gatsbyLogo from "../../images/logos/gatsby-logo.webp";
import strapiLogo from "../../images/logos/strapi-logo.webp";
import awsLogo from "../../images/logos/aws-logo.webp";
import worldClassUserExperience from "../../images/superfast-dot-com/world-class-user-experience.webp";
import betterGoogleRanking from "../../images/superfast-dot-com/better-google-ranking.webp";
import improvedCustomerRetention from "../../images/superfast-dot-com/improved-customer-retention-rate.webp";
import increasedWebsiteConversion from "../../images/superfast-dot-com/increase-website-conversions.webp";
import strugglingMarketting from "../../images/superfast-dot-com/struggling-marketting.webp";
import lessBounceRate from "../../images/superfast-dot-com/less-bounce-rate.webp";
import scaleEffortlessly from "../../images/superfast-dot-com/scale-effortlessly.webp";
import thunderboltIcon from "../../images/icons/thunderbolt-icon.webp";

const SuperfastDotCom = () => {
  const [activeTab, setActiveTab] = useState(1);
  const data = [
    {
      id: 1,
      title: "World Class User Experience",
      image: worldClassUserExperience,
      data: "No one likes to wait or stare at a loading website. A superfast website will give your users what they want fast, improving user experience and satisfaction. ",
    },

    {
      id: 2,
      title: "Struggling with marketing ROI",
      image: strugglingMarketting,
      data: "Often digital marketers with fancy certifications struggle with appropriate ROI on campaigns as they miss checking the core web vitals of the landing page they intend to drive traffic to.",
    },

    {
      id: 3,
      title: "Better Google Ranking",
      image: betterGoogleRanking,
      data: "Do you ever visit Google search page 2? Didn’t think so. A superfast dot com will rank up higher in Google search results, making it easier for users to find your website easily.",
    },

    {
      id: 4,
      image: increasedWebsiteConversion,
      title: "Increase Website Conversions",
      data: "Converting users into customers is one of the hardest things of all. A superfast website gives your users what they want in a jiffy. ",
    },

    {
      id: 5,
      image: improvedCustomerRetention,
      title: "Improved Customer Retention Rate",
      data: "Users are less likely to revisit your website if it is slower than your competitors even by 250 milliseconds. ",
    },

    {
      id: 6,
      image: lessBounceRate,
      title: "Less Bounce Rate",
      data: "Faster loading website attracts organic traffic as it is more likely to be shared. Users can seamlessly move around your site if your web pages load fast giving you a much lower bounce rate.",
    },

    {
      id: 7,
      image: scaleEffortlessly,
      title: "Scale effortlessly",
      data: "Faster websites consume less computational power meaning a user with 1GB Ram will have the same experience as the one with 8 GB. This allows you to cater to a larger group of users without any hassle.",
    },
  ];
  return (
    <section className="superfast-dotcom-section" id="why-thunderbolt">
      <h1 className="superfast-title ">Why do you need a superfast dot com</h1>
      <div className="why-you-need">
        <div className="why-you-need-content">
          <div className="row">
            <div className="col-md-6 content-section">
              <div className="img-contaiers">
                <img
                  loading="lazy"
                  className="icon"
                  src={thunderboltIcon}
                  alt=""
                />
                <img
                  loading="lazy"
                  className="hero-img"
                  src={data.find((el) => el.id === activeTab).image}
                  alt=""
                />
                <div className="section-info">
                  <p>{data.find((el) => el.id === activeTab).data}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 list-section">
              <ul>
                {data.map((el) => {
                  return (
                    <li
                      onClick={() => setActiveTab(el.id)}
                      onMouseOver={() => setActiveTab(el.id)}
                      className={`${
                        el.id === activeTab
                          ? "list-option-active"
                          : "list-option"
                      }`}
                    >
                      {el.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="techs-we-use">
        <h1 className="title">Technologies we use</h1>
        <p className="subtitle">
          Thunderbolt is built upon ‘best in class’ technologies that shape the
          modern web
        </p>
        <div className="techs-img">
          <div className="big-imgs">
            <img
              loading="lazy"
              className="picture-big"
              src={gatsbyLogo}
              alt=""
              height={"100%"}
              width={"100%"}
            />
            <img
              loading="lazy"
              className="picture-big"
              src={strapiLogo}
              alt=""
              height={"100%"}
              width={"100%"}
            />
          </div>
          <img
            loading="lazy"
            className="picture-small"
            src={awsLogo}
            alt=""
            height={"100%"}
            width={"100%"}
          />
        </div>
      </div>
    </section>
  );
};

export default SuperfastDotCom;
