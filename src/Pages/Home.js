import React from "react";
import HeroSection from "../components/HeroSection";
import HomeBanner2 from "../components/HomeBanner2";
import HomeProductsContainer from "../components/HomeProductsContainer";
const Home = () => {
  return (
    <div className=" relative">
      <HeroSection />

      <div className=" flex flex-col gap-6 sm:gap-20 my-6 sm:my-20">
        <HomeBanner2
          title=" Statement Pairings"
          subtitle="Embrace Time's Essence: Where Every Second Tells Your Story."
          imgurl1={
            "https://images.unsplash.com/photo-1595520407624-66b24f015830?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          imgurl2={
            "https://images.unsplash.com/photo-1613520701290-480b81948f43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <HomeProductsContainer
          title="New Arrivals"
          subtitle="Be the first to wear the newest trends in town"
          types="New"
        />
        <HomeBanner2
          title="Statement Staples"
          subtitle="Timeless Elegance, Endless Possibilities."
          imgurl1={
            "https://www.fastrack.in/on/demandware.static/-/Sites-titan-master-catalog/default/dw511ff3f6/images/promotions/fastrack/Reflexcurv/Curv_1.jpg"
          }
        />
        <HomeProductsContainer
          title="Season's Best Collections"
          subtitle="Discover the latest trends in streetwear"
          types="best"
        />
      </div>
    </div>
  );
};

export default Home;
