import { Section } from "@components/Section";
import React from "react";
import { Image } from "react-bootstrap";
import image7 from "../../assets/marcas-socios/monte-sol.png";
import image6 from "../../assets/marcas-socios/nestle.png";
import image3 from "../../assets/marcas-socios/paramonga.png";
import image1 from "../../assets/marcas-socios/pg.png";
import image5 from "../../assets/marcas-socios/san-jorge.png";
import image2 from "../../assets/marcas-socios/sancela.png";
import image4 from "../../assets/marcas-socios/yichang.png";
import "./styles.scss";
export const Supports = () => {
  return (
    <Section>
      <span className="Supports__title">Con el apoyo de:</span>
      <div className="Supports__container-img">
        <Image className="Supports__img" src={image1} alt="" rounded />
        <Image className="Supports__img" src={image2} alt="" rounded />
        <Image className="Supports__img" src={image3} alt="" rounded />
        <Image className="Supports__img" src={image5} alt="" rounded />
        <Image className="Supports__img" src={image6} alt="" rounded />
        <Image className="Supports__img" src={image7} alt="" rounded />
        <Image className="Supports__img" src={image4} alt="" rounded />
        <Image className="Supports__img" src={image2} alt="" rounded />
      </div>
    </Section>
  );
};
