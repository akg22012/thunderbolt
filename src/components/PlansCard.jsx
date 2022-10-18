import React from "react";
import { Link } from "gatsby";
import routes from "../constants/routes";

const PlansCard = ({ data, isMonthly, bgColor = "#FFFFFF" }) => {
  return (
    <div className="plans-card-container" style={{ backgroundColor: bgColor }}>
      <p className="tag">{data?.tag}</p>
      <p className="plans-info">{data?.info}</p>
      <div className="plan-price">
        {data?.isCustom === false ? (
          <>
            <div className="price">
              <p className="price-symbol">
                {data?.price.currency === "euro" ? "€" : "£"}
              </p>
              <p className="price-value">{data?.price?.price}</p>
            </div>
            <p className="price-info">{isMonthly ? "per month" : "per year"}</p>
          </>
        ) : (
          <p className="custom-text">Contact Sales</p>
        )}
      </div>
      <p className="price-info-bold">{data?.pages}</p>
      <a target={"_blank"} href="https://dashboard.thunderboltjs.com/">
        <button className="get-started">Get started</button>
      </a>
      <p className="pricing-read-more">
        <Link to={routes.pricing}>Read more</Link>
      </p>
    </div>
  );
};

export default PlansCard;
