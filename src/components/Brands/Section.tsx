import { Section } from "@components/Section";
import { Title } from "@components/Typography";
import React from "react";
import { Col, Image as $Image, Row } from "react-bootstrap";
import "./styles.scss";

const Image: React.FC = (props) => (
  <Col xs={24} md={6} lg={4}>
    <$Image
      className="BrandsSection__img"
      {...props}
      src="https://cdnx.jumpseller.com/carabela/image/11642227/resize/265/265?1600205590"
      alt=""
      rounded
    />
  </Col>
);

export const Brands = () => {
  return (
    <Section>
      <Title level={2} className="BrandsSection__title">
        Marcas Dely
      </Title>
      <Row className="d-flex justify-content-between">
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
      </Row>
    </Section>
  );
};
