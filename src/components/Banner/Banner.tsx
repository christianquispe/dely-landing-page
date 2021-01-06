import React from "react";
import { Button, Carousel } from "react-bootstrap";
import image1 from "../../assets/promociones/lenymar-conservas.jpg";
import image2 from "../../assets/promociones/lenysol-fideos.jpg";
import image3 from "../../assets/promociones/lenysol.jpg";
import "./Banner.scss";

export const Banner = () => {
  return (
    <Carousel
      nextIcon={
        <i style={{ fontSize: "50px" }} className="fas fa-chevron-right"></i>
      }
      prevIcon={
        <i style={{ fontSize: "50px" }} className="fas fa-chevron-left"></i>
      }
    >
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 Banner__img"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 Banner__img"
          src={image2}
          alt="Third slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 Banner__img"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
