import React from "react";
import ImageConstants from "../constants/imageConstants";

const ClientsImages = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="clients-img">
            <img
              loading="lazy"
              src={ImageConstants.clientVodafone}
              alt=""
              width={"100%"}
              height={"100%"}
            />
            <img
              loading="lazy"
              src={ImageConstants.clientMpay}
              alt=""
              width={"100%"}
              height={"100%"}
            />
            <img
              loading="lazy"
              src={ImageConstants.clientTomorrowStreet}
              alt=""
              width={"100%"}
              height={"100%"}
            />
            <img
              loading="lazy"
              src={ImageConstants.clientAudi}
              alt=""
              width={"100%"}
              height={"100%"}
            />
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
    </div>
  );
};

export default ClientsImages;
