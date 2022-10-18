import React from "react";
import ImageConstants from "../constants/imageConstants";

const ClientsImages = () => {
  return (
    <div className="container">
      <div className="row clients-img">
        <div className="col-lg-2 col-4">
          <img
            loading="lazy"
            src={ImageConstants.clientVodafone}
            alt=""
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="col-lg-2 col-4">
          <img
            loading="lazy"
            src={ImageConstants.clientMpay}
            alt=""
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="col-lg-2 col-4">
          <img
            loading="lazy"
            src={ImageConstants.clientTomorrowStreet}
            alt=""
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="col-lg-2 col-4">
          <img
            loading="lazy"
            src={ImageConstants.clientAudi}
            alt=""
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="col-lg-2 col-4">
          <img
            loading="lazy"
            src={ImageConstants.clientGeMoney}
            alt=""
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientsImages;
