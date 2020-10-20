import { Section } from "@components/Section";
import { Title } from "@components/Typography";
import React from "react";
import {
  Button,
  Col,
  Form,
  Image as $Image,
  ImageProps,
  Nav,
  Row
} from "react-bootstrap";
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
    <Section className="Footer">
      <Title level={2} className="Footer__title">
        DELY
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
                  Av. Avenida 1 Nro. 1234 Mz. A - 1 Lt. 00
                </li>
                <li className="text-white d-flex align-items-center">
                  <i
                    className="fas fa-phone text-white"
                    style={{ marginRight: "10px" }}
                  ></i>
                  <div>
                    <span className="text-white d-block">
                      987654321 / 123-456
                    </span>
                    <span className="text-white d-block">
                      987654321 / 123-456
                    </span>
                  </div>
                </li>
                <li className="text-white">
                  <a className="text-white" href="">
                    <i
                      className="fas fa-globe text-white"
                      style={{ marginRight: "10px" }}
                    ></i>{" "}
                    web.com.pe
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
                  eventKey="link-1"
                  href="#products-and-services"
                >
                  Productos y servicios
                </Nav.Link>
                <Nav.Link
                  className="text-white text-uppercase"
                  eventKey="link-2"
                  href="#brands"
                >
                  Marcas dely
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
              <Form.Group>
                <Form.Control
                  required
                  size="sm"
                  type="text"
                  placeholder="*Nombres"
                  className="Form_input"
                />
                <br />
                <Form.Control
                  className="Form_input"
                  required
                  size="sm"
                  placeholder="*E - Mail"
                />
                <br />
                <Form.Control
                  as="textarea"
                  size="sm"
                  placeholder="*Escribe tu mensaje aquí"
                  className="Form_input"
                />
                <div
                  style={{ padding: "20px 0" }}
                  className="d-flex flex-nowrap"
                >
                  <span className="text-white">
                    Los campos se deben llenar obligatoriamente para poder
                    procesar correctameent la solicitud
                  </span>
                  <Button>Enviar</Button>
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
    </Section>
  );
};
