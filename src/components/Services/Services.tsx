import { Section } from "@components/Section";
import { Title } from "@components/Typography";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/servicios/1.png";
import "./Services.scss";

export const Services = () => {
  return (
    <Section className="Services" fluid={true} id="products-and-services">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="Services__content">
              <Title level={2} className="Services__title">
                Servicios
              </Title>
              <p className="Services__subtitle">Ventas Institucionales</p>
              <p>
                Estamos dispuestos a brindar un servicio especializado y precios
                justos, además contamos con todos los certificados
                correspondientes y el Registro Nacional de Proveedores (RNP)
                vigente.
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
        <div className="Services__sales-content">
          <p className="Services__subtitle">Ventas Corporativa</p>
          <p>
            Contamos con personal efectivo dispuesto a ofrecer productos de
            calidad y con las mejores ofertas del mercado, para distintos fines
            tales como: Donaciones, Productos para la realización de canastas,
            entre otros.
          </p>
        </div>
      </Container>
    </Section>
  );
};
