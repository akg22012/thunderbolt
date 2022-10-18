import React from "react";
import PlansCard from "../../components/PlansCard";

const HighPerformanceSection = ({ isMonthly, data }) => {
  return (
    <section className="high-performance">
      <h1>High Performing Pay Monthly Managed Websites</h1>
      <p className="sub-title">
        We provide affordable digital solution for one monthly fees to design,
        deploy and managed your business sites.
      </p>
      {/* <div className="cards-container">
        {data.map((el) => {
          return (
            <PlansCard bgColor={"#F8F9FA"} data={el} isMonthly={isMonthly} />
          );
        })}
      </div> */}

      <div className="container">
        <div className="row justify-content-center">
          {data.map((el) => {
            return (
              <div className="col-md-3">
                <div className="cards-container">
                  <PlansCard
                    bgColor={"#F8F9FA"}
                    data={el}
                    isMonthly={isMonthly}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="high-performance-footer">
        <p>
          Your business requires a digital strategy & stunning high converting
          websites that generate enquires and grow online.
        </p>
      </div>
    </section>
  );
};

export default HighPerformanceSection;
