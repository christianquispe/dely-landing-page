import { Section } from "@components/Section";
import { Title } from "@components/Typography";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/servicios/1.png";
import "./Services.scss";

export const Services = () => {
  return (
    <Section className="Services" fluid={true}>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="Services__content">
              <Title level={2} className="Services__title">
                Servicios
              </Title>
              <p className="Services__subtitle">Ventas Institucionales</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore asperiores minima mollitia est quis consectetur earum
                nemo esse. Dolorem officiis impedit est inventore, provident
                explicabo doloremque aliquam perspiciatis facere porro!
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <img src={image} alt="" className="Services__img" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <div className="Services__item">
              <div className="Services__item__img"></div>
              <span>Gobieno Regional</span>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="Services__item">
              <div className="Services__item__img"></div>
              <span>Qaliwarma</span>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="Services__item">
              <div className="Services__item__img"></div>
              <span>Municipalidades</span>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="Services__item">
              <div className="Services__item__img"></div>
              <span>Corporativos</span>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
