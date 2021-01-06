import { Section } from "@components/Section";
import { Title } from "@components/Typography";
import React from "react";
import { Col, Image as $Image, ImageProps, Nav, Row } from "react-bootstrap";
import { FormContact } from "./FormContact";
import "./styles.scss";

const Image: React.FC<ImageProps> = (props) => (
  <$Image
    className="Supports__img"
    {...props}
    src="https://cdnx.jumpseller.com/carabela/image/11642227/resize/265/265?1600205590"
    alt=""
    rounded
  />
);

export const Footer = () => {
  return (
    <Section id="contact" className="Footer">
      <Title level={2} className="Footer__title">
        Contacto
      </Title>
      <Row>
        <Col className="Locations__container-img" xs={12} md={12}>
          <Row>
            <Col xs={6} md={6} lg={4}>
              <ul className="reset-list">
                <li className="text-white">
                  <i
                    style={{ marginRight: "10px" }}
                    className="fas fa-map-marker-alt text-white"
                  ></i>{" "}
                  Av. la Cultura Nro. 701, Mercado Productores, Santa Anita,
                  Lima, Perú.
                </li>
                <li className="text-white d-flex align-items-center">
                  <i
                    className="fas fa-phone text-white"
                    style={{ marginRight: "10px" }}
                  ></i>
                  <div>
                    <a className="text-white d-block" href="tel:+51957689893">
                      +51 957 689 893
                    </a>
                  </div>
                </li>
                <li className="text-white">
                  <a
                    href="https://wa.me/+51957689893"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <i
                      className="fab fa-whatsapp"
                      style={{ marginRight: "10px" }}
                    ></i>
                    WhatsApp
                  </a>
                </li>
                <li className="text-white">
                  <a className="text-white" href="">
                    <i
                      className="fas fa-globe text-white"
                      style={{ marginRight: "10px" }}
                    ></i>
                    ventas@dely.pe
                  </a>
                </li>
              </ul>
              <p className="text-white font-weight-bold">
                TODOS LOS DERECHOS RESERVADOS
              </p>
            </Col>
            <Col xs={6} md={6} lg={3}>
              <Nav defaultActiveKey="/home" className="flex-column">
                <span className="text-white font-weight-bold text-uppercase FooterNav__title">
                  Navegación
                </span>
                <Nav.Link
                  className="text-white text-uppercase"
                  href="#about-us"
                >
                  Nosotros
                </Nav.Link>
                <Nav.Link
                  className="text-white text-uppercase"
                  eventKey="link-2"
                  href="#services"
                >
                  Servicios
                </Nav.Link>
                <Nav.Link
                  className="text-white text-uppercase"
                  eventKey="link-1"
                  href="#products"
                >
                  Productos
                </Nav.Link>
                <Nav.Link
                  className="text-white text-uppercase"
                  eventKey="link-2"
                  href="#locate-us"
                >
                  Ubicanos
                </Nav.Link>
                <Nav.Link
                  className="text-white text-uppercase"
                  eventKey="link-2"
                  href="#contact"
                >
                  Contacto
                </Nav.Link>
              </Nav>
            </Col>
            <Col xs={12} md={12} lg={5}>
              <span className="text-white tex-uppercase font-weight-bold">
                INFORMES
              </span>
              <br />
              <br />
              <FormContact />
            </Col>
          </Row>
        </Col>
      </Row>
    </Section>
  );
};
