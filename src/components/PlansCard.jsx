import React from "react";
import { Link, navigate } from "gatsby";
import routes from "../constants/routes";

const PlansCard = ({ data, isMonthly, bgColor = "#FFFFFF", scrollSpy }) => {
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
            <p className="price-info">{"per month"}</p>
          </>
        ) : (
          <p className="custom-text">Contact Sales</p>
        )}
      </div>
      {!isMonthly && !data?.isCustom ? (
        <p className="billed-info">(Billed annually)</p>
      ) : null}
      <p className="price-info-bold">{data?.pages}</p>
      <a target={"_blank"} href={data.link ?? "#"}>
        <button className="get-started">Get started</button>
      </a>
      <p className="pricing-read-more">
        <Link
          to={`${routes.pricing}#${scrollSpy}`}
          state={{ monthly: isMonthly }}
          aria-label="know more in pricing page"
        >
          Read more
        </Link>
      </p>
    </div>
  );
};

export default PlansCard;
