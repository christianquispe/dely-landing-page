import { Section } from "@components/Section";
import { Title } from "@components/Typography";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import image4 from "../../assets/marcas/dely-fish.png";
import image5 from "../../assets/marcas/lenymar.png";
import image2 from "../../assets/marcas/lenysol-aceite.png";
import image1 from "../../assets/marcas/lenysol-fideos.png";
import image3 from "../../assets/marcas/lenysol.png";
import "./styles.scss";

export const Brands = () => {
  return (
    <Section id="brands">
      <Title level={2} className="BrandsSection__title">
        Marcas Dely
      </Title>
      <Row className="d-flex justify-content-between">
        <Col xs={24} md={6} lg={4}>
          <Image className="BrandsSection__img" src={image1} rounded />
        </Col>
        <Col xs={24} md={6} lg={4}>
          <Image className="BrandsSection__img" src={image2} rounded />
        </Col>
        <Col xs={24} md={6} lg={4}>
          <Image className="BrandsSection__img" src={image3} rounded />
        </Col>
        <Col xs={24} md={6} lg={4}>
          <Image className="BrandsSection__img" src={image4} rounded />
        </Col>
        <Col xs={24} md={6} lg={4}>
          <Image className="BrandsSection__img" src={image5} rounded />
        </Col>
        <Col xs={24} md={6} lg={4}>
          <Image
            className="BrandsSection__img"
            src="https://cdnx.jumpseller.com/carabela/image/11642227/resize/265/265?1600205590"
            rounded
          />
        </Col>
      </Row>
    </Section>
  );
};
