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
          title="Season's Pairings / Statement Pairings"
          subtitle="Outfit That give maximum style with minimum effort"
          imgurl1={require("../img/tshirt-banner.jpg")}
          imgurl2={require("../img/bottom-banner.jpg")}
        />
        <HomeProductsContainer
          title="New Arrivals"
          subtitle="Be the first to wear the newest trends in town"
          types="New"
        />
        <HomeBanner2
          title="Statement Staples"
          subtitle="Upgrade your everyday style with unique designs"
          imgurl1={require("../img/banner3.jpg")}
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
