import React from "react";
import Layout from "../components/Layout";
import TheyTrustUs from "../components/TheyTrustUs";
import FAQs from "../screens/home/FAQs";
import FasterStats from "../screens/home/FasterStats";
import { FrameworkStatistics } from "../screens/home/FrameworkStatistics";
import HeroSection from "../screens/home/HeroSection";
import HowItWorks from "../screens/home/HowItWorks";
import PlansSection from "../screens/home/PlansSection";
import SuperfastDotCom from "../screens/home/SuperfastDotCom";
import { InView } from "react-intersection-observer";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <FasterStats />
      <FrameworkStatistics />
      <HowItWorks />
      <SuperfastDotCom />
      <PlansSection />
      <FAQs />
      <TheyTrustUs />
      {/* <InView threshold={1} triggerOnce>
        {({ inView, ref, entry }) => (
          <div ref={ref}>{inView && <FasterStats />}</div>
        )}
      </InView>
      <InView threshold={1} triggerOnce>
        {({ inView, ref, entry }) => (
          <div ref={ref}>{inView && <FrameworkStatistics />}</div>
        )}
      </InView>
      <InView threshold={1} triggerOnce>
        {({ inView, ref, entry }) => (
          <div ref={ref}>{inView && <HowItWorks />}</div>
        )}
      </InView>
      <InView threshold={1} triggerOnce>
        {({ inView, ref, entry }) => (
          <div ref={ref}>{inView && <SuperfastDotCom />}</div>
        )}
      </InView>
      <InView threshold={1} triggerOnce>
        {({ inView, ref, entry }) => (
          <div ref={ref}>{inView && <PlansSection />}</div>
        )}
      </InView>
      <InView threshold={1} triggerOnce>
        {({ inView, ref, entry }) => <div ref={ref}>{inView && <FAQs />}</div>}
      </InView>
      <InView threshold={1} triggerOnce>
        {({ inView, ref, entry }) => (
          <div ref={ref}>{inView && <TheyTrustUs />}</div>
        )}
      </InView> */}
    </Layout>
  );
};

export default Home;
