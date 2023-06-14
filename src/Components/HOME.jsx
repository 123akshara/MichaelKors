import React, { useState, useEffect } from "react";
import imagebg from "/assets/imagebg.png";
import "/src/styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselData from "/src/Data/carouselData.json";
import { useGeolocation } from "rooks";

export default function HOME() {
  const [text] = useState("FATHER'S DAY GIFTS");
  const [hoverText, setHoverText] = useState("SHOP FATHER'S DAY GIFTS");
  useGeolocation();
  useEffect(() => {
    handleLeave();
  }, []);

  const handleHover = () => {
    setHoverText(
      "Time to treat him. Give your dad the gift of style this Father's Day with our handsome, hand-picked gifts."
    );
  };

  const handleLeave = () => {
    setHoverText("SHOP FATHER'S DAY GIFTS");
  };

  return (
    <>
      <div className="position-relative mt-5">
        <img src={imagebg} className="img-fluid" alt="imagebg" />
        <div className="overlay-text">
          <div className="row">
            <div className="col text-center">
              <p
                className="text-dark fw-bolder fs-3 pt-0 border-0"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                {text}
              </p>
              <p
                className="text-dark fs-5"
                style={{ letterSpacing: "4px", lineHeight: "1.5rem" }}
              >
                {hoverText}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="text-uppercase text-center mt-5 fs-1 fw-bolder handbags">
              Trending now
            </p>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={3000}
              showArrows={false}
              showStatus={false}
              showIndicators={false}
            >
              {carouselData.map((slide, index) => (
                <div key={index}>
                  <img
                    src={slide.image}
                    className="col-lg-4 mb-5"
                    alt={`Slide ${index}`}
                  />
                  <p className="caption fw-bold fs-6">{slide.caption}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
