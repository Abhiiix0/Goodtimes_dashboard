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
    { id: 1, src: require("../img/hero-banner01.png") },
    // { id: 2, src: require("../img/hero-banner01.png") },
    // { id: 3, src: require("../img/hero-banner01.png") },
  ];
  return (
    <section className="relative z-0">
      <Slide>
        {images.map((image, index) => (
          <div key={index} className="">
            <img
              // style={{ background: `url(${image.src})` }}
              src={image.src}
              className="w-full h-48 sm:h-auto"
            ></img>
          </div>
        ))}
      </Slide>
    </section>
  );
};

export default HeroSection;
