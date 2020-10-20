import { Section } from "@components/Section";
import { Title } from "@components/Typography";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";

export const AboutUs = () => {
  return (
    <section>
      <Container>
        <Section id="about-us">
          <Row>
            <Col xs={12} lg={6}>
              <img
                className="AboutUs__img"
                src="https://brashli.com/wp-content/uploads/2018/11/trabaja-con-nosotros-enex.jpg"
              />
            </Col>
            <Col xs={12} lg={6}>
              <Title className="AboutUs__title" level={2}>
                Nosotros
              </Title>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                ut optio voluptatum! Numquam consequuntur ea rerum et! Vitae quo
                fuga, ducimus aspernatur impedit vero deleniti explicabo dicta
                consequuntur esse sunt?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                ut optio voluptatum! Numquam consequuntur ea rerum et! Vitae quo
                fuga, ducimus aspernatur impedit vero deleniti explicabo dicta
                consequuntur esse sunt?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                ut optio voluptatum! Numquam consequuntur ea rerum et! Vitae quo
                fuga, ducimus aspernatur impedit vero deleniti explicabo dicta
                consequuntur esse sunt?
              </p>
            </Col>
          </Row>
        </Section>
      </Container>
    </section>
  );
};
