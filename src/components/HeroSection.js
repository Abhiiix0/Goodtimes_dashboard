import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const HeroSection = () => {
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };

  const images = [
    { id: 1, src: require("../img/casioBanner.jpg") },
    // {
    //   id: 2,
    //   src: "https://www.fastrack.in/on/demandware.static/-/Sites-titan-master-catalog/default/dw511ff3f6/images/promotions/fastrack/Reflexcurv/Curv_1.jpg",
    // },
    // {
    //   id: 3,
    //   src: "https://cdn.shopify.com/s/files/1/0261/8900/4880/files/diesel-1.jpg?v=1688555865",
    // },
  ];
  return (
    <section className="relative z-0">
      <Slide>
        {images.map((image, index) => (
          <div key={index} className="">
            <img
              // style={{ background: `url(${image.src})` }}
              alt="banner image"
              src={image.src}
              className="w-full sm:h-fit"
            ></img>
          </div>
        ))}
      </Slide>
    </section>
  );
};

export default HeroSection;
