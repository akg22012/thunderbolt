import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { statsSlider } from "../../constants/swiperConstants";
import thunderboltIcon from "../../images/icons/thunderbolt-icon.webp";
import setUpQuery from "../../utils/pageSpeedInsights";
import { isValidUrl } from "../../utils/utils";
import zero from "../../images/circles/0.webp";
import ten from "../../images/circles/10.webp";
import twenty from "../../images/circles/20.webp";
import thirty from "../../images/circles/30.webp";
import fourty from "../../images/circles/40.webp";
import fifty from "../../images/circles/50.webp";
import sixty from "../../images/circles/60.webp";
import seventy from "../../images/circles/70.webp";
import eighty from "../../images/circles/80.webp";
import ninety from "../../images/circles/90.webp";
import hundred from "../../images/circles/100.webp";

export const FrameworkStatistics = () => {
  const [baseUrl, setBaseUrl] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [categories, setCategories] = useState(false);

  const [metrics, setMetrics] = useState({
    performance: 63,
    accessibility: 93,
    "best-practices": 82,
    seo: 83,
  });

  const handleChange = (e) => {
    setBaseUrl(e.target.value);
    const valid = isValidUrl(e.target.value);
    if (!valid) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const runPageSpeed = (rawUrl) => {
    const res = isValidUrl(rawUrl);
    if (!res) return;
    else {
      const url = setUpQuery(rawUrl);
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setCategories(json.lighthouseResult.categories);
          setLoading(false);
        })
        .catch((err) => {
          setClicked(false);
          setLoading(false);
          setDisabled(false);
          setError(true);
        });
    }
  };

  const checkProgress = (value) => {
    if (value === 100 || value > 90) {
      return "circle-text-green";
    } else if (value < 90) {
      return "circle-text-red";
    }
  };

  const checkProgressImage = (value) => {
    if (value === 100) return hundred;
    else if (value >= 90 && value < 100) return ninety;
    else if (value >= 80 && value < 90) return eighty;
    else if (value >= 70 && value < 80) return seventy;
    else if (value >= 60 && value < 70) return sixty;
    else if (value >= 50 && value < 60) return fifty;
    else if (value >= 40 && value < 50) return fourty;
    else if (value >= 30 && value < 40) return thirty;
    else if (value >= 20 && value < 30) return twenty;
    else if (value >= 0 && value < 20) return ten;
    else return zero;
  };

  useEffect(() => {
    if (clicked) {
      runPageSpeed(baseUrl);
      setClicked(false);
    }
  }, [clicked]);

  useEffect(() => {
    if (categories) {
      let res = {};
      for (let category in categories) {
        res[category] = categories[category].score * 100;
      }
      setMetrics(res);
      setCategories(null);
      setBaseUrl("");
    }
  }, [categories]);

  useEffect(() => {
    if (clicked && !categories) {
      setError(false);
      setLoading(true);
    }
  }, [clicked, categories]);

  return (
    <>
      <section className="web-vitals-section" id="page-speed">
        <h2 className="title">Discover your core web vitals</h2>
        <div className="stats">
          <div className="container">
            <div className="row stats-container">
              <div className="col-md-3 col-6 circle-contain">
                <div className="circle">
                  <img
                    loading="lazy"
                    src={checkProgressImage(metrics.performance)}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                  />
                  <p className={checkProgress(metrics.performance)}>
                    {metrics.performance}
                  </p>
                </div>
                <p className="circle-info">Performance</p>
              </div>
              <div className="col-md-3 col-6 circle-contain">
                {" "}
                <div className="circle">
                  <img
                    loading="lazy"
                    src={checkProgressImage(metrics.accessibility)}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                  />
                  <p className={checkProgress(metrics.accessibility)}>
                    {metrics.accessibility}
                  </p>
                </div>
                <p className="circle-info">Accessibiity</p>
              </div>
              <div className="col-md-3 col-6 circle-contain">
                {" "}
                <div className="circle">
                  <img
                    loading="lazy"
                    src={checkProgressImage(metrics["best-practices"])}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                  />
                  <p className={checkProgress(metrics["best-practices"])}>
                    {metrics["best-practices"]}
                  </p>
                </div>
                <p className="circle-info">Best Practices</p>
              </div>
              <div className="col-md-3 col-6 circle-contain">
                {" "}
                <div className="circle">
                  <img
                    loading="lazy"
                    src={checkProgressImage(metrics.seo)}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                  />
                  <p className={checkProgress(metrics.seo)}>{metrics.seo}</p>
                </div>
                <p className="circle-info">SEO</p>
              </div>
            </div>
          </div>
        </div>

        <div className="search-webpage">
          <h3>How fast is your website?</h3>
          <div className="search-box">
            <input
              value={baseUrl}
              onChange={handleChange}
              placeholder="Enter your webpage URL"
              type="text"
            />
            <button
              disabled={disabled || isLoading}
              onClick={() => setClicked(true)}
            >
              {isLoading ? "Calculating..." : "Analyze"}
            </button>
          </div>
          {error && <p className="danger-info">Please insert a valid url</p>}
        </div>
      </section>

      <section className="framework-statistics parallax">
        <div className="container">
          <h1 className="section-title">
            A lightning fast framework which loads your website in less than 2
            seconds.
          </h1>
          <div className="row web-view-flex">
            <div className="col-4">
              <div className="stats-card mb-5">
                <h3>60%</h3>
                <p>Faster Page Load Speed</p>
              </div>
              <div className="stats-card">
                <h3>3x</h3>
                <p>ROI of marketing campaigns</p>
              </div>
            </div>
            <div className="col-4 middle-col">
              <div className="icon">
                <img
                  loading="lazy"
                  width={"70px"}
                  src={thunderboltIcon}
                  alt=""
                />
              </div>
              <div className="stats-card">
                <h3>50%</h3>
                <p>Less Bounce Rate</p>
              </div>
            </div>
            <div className="col-4">
              <div className="stats-card mb-5">
                <h3>50%</h3>
                <p>More Time Spent</p>
              </div>
              <div className="stats-card">
                <h3>2x</h3>
                <p>Impact of Integrated SEO</p>
              </div>
            </div>
          </div>

          <div className="mob-view">
            <Swiper className="pl-3" {...statsSlider}>
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <div className="stats-card-mob">
                    <h3>60%</h3>
                    <p>Faster Page Load Speed</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="stats-card-mob">
                    <h3>50%</h3>
                    <p>More Time Spent</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="stats-card-mob">
                    <h3>50%</h3>
                    <p>Less Bounce Rate</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="stats-card-mob">
                    <h3>3x</h3>
                    <p>ROI of marketing campaigns</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="stats-card-mob">
                    <h3>2x</h3>
                    <p>Impact of Integrated SEO</p>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
