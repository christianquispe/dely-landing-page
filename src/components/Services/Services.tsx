import { Section } from "@components/Section";
import { Title } from "@components/Typography";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import imageVentasInst from "../../assets/servicios/ventas_inst.jpg";
import imageVentasCorp from "../../assets/servicios/ventas.jpg";
import "./Services.scss";

export const Services = () => {
  return (
    <Section
      className="Services section-common-home--white"
      fluid={true}
      id="services"
    >
      <Title level={2} className="Services__title text-center">
        Servicios
      </Title>
      <div className="services-content-layout">
        <div className="Service">
          <div className="Services__content">
            <Title level={3} className="Services__subtitle text-center">
              Ventas Institucionales
            </Title>
            <p>
              Estamos dispuestos a brindar un servicio especializado y precios
              justos, además contamos con todos los certificados
              correspondientes y el Registro Nacional de Proveedores (RNP)
              vigente.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <img src={imageVentasInst} alt="" className="Services__img" />
          </div>
        </div>
        <div className="divider-horizontal"></div>
        <div className="Service">
          <div>
            <Title level={3} className="Services__subtitle text-center">
              Ventas Corporativa
            </Title>
            <p>
              Contamos con personal efectivo dispuesto a ofrecer productos de
              calidad y con las mejores ofertas del mercado, para distintos
              fines tales como: Donaciones, Productos para la realización de
              canastas, entre otros.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <img src={imageVentasCorp} alt="" className="Services__img" />
          </div>
        </div>
      </div>
      <Row className="Services__list">
        <div>
          <div className="Services__item">
            <div className="Services__item__img"></div>
            <span>Gobieno Regional</span>
          </div>
        </div>
        <div className="Services__item">
          <div className="Services__item__img"></div>
          <span>Qaliwarma</span>
        </div>
        <div className="Services__item">
          <div className="Services__item__img"></div>
          <span>Municipalidades</span>
        </div>
        <div className="Services__item">
          <div className="Services__item__img"></div>
          <span>Corporativos</span>
        </div>
      </Row>
    </Section>
  );
};
