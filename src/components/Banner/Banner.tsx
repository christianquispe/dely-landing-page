import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "./Banner.scss";

export const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ height: "575px", objectFit: "cover" }}
          className="d-block w-100 Banner__img"
          src="https://gananci.org/wp-content/uploads/2017/03/promocion-cruzada-x3.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <a
            href="https://wa.me/+51993583676?text=Hola"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="success">
              <i className="fab fa-whatsapp" style={{ marginRight: "5px" }}></i>
              WhatsApp
            </Button>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 Banner__img"
          style={{ height: "575px", objectFit: "cover" }}
          src="https://www.innovadeluxe.com/wp-content/uploads/2018/01/Banner-crear-banner-1280x720.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a
            href="https://wa.me/+51993583676?text=Hola"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="success">
              <i className="fab fa-whatsapp" style={{ marginRight: "5px" }}></i>
              WhatsApp
            </Button>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 Banner__img"
          style={{ height: "575px", objectFit: "cover" }}
          src="https://www.cyberclick.es/hubfs/blog/Que%20es%20un%20banner-1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <a
            href="https://wa.me/+51993583676?text=Hola"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="success">
              <i className="fab fa-whatsapp" style={{ marginRight: "5px" }}></i>
              WhatsApp
            </Button>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
