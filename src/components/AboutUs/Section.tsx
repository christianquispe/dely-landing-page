import { Section } from "@components/Section";
import { Title } from "@components/Typography";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";

export const AboutUs = () => {
  return (
    <section className="section-common-home--gray">
      <Container>
        <Section id="about-us" className="section-common-home">
          <Row>
            <Col xs={12}>
              <Title className="AboutUs__title text-center" level={2}>
                Nosotros
              </Title>
            </Col>
            <br></br>
            <br></br>
            <br></br>
            <Col xs={12} md={12}>
              <div className="about-us-mision-vision">
                <div>
                  <Title className="AboutUs__title text-center" level={4}>
                    Misión
                  </Title>
                  <p className="text-center">
                    Tenemos el compromiso de crecer con nuestros clientes; por
                    lo tanto, brindamos el mejor servicio, precios accesibles y
                    productos de calidad.
                  </p>
                </div>
                <div className="divider-horizontal"></div>
                <div>
                  <Title className="AboutUs__title text-center" level={4}>
                    Visión
                  </Title>
                  <p className="text-center">
                    Ser una empresa líder en el rubro de la comercialización de
                    abarrotes y con el apoyo de nuestro efectivo equipo de
                    trabajo seguir brindando el excelente servicio que nuestros
                    clientes se merecen.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Section>
      </Container>
    </section>
  );
};
