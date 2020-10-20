import { Section } from "@components/Section";
import { Title } from "@components/Typography";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";

export const AboutUs = () => {
  return (
    <section>
      <Container>
        <Section>
          <Row>
            <Col xs={12} lg={6}>
              <div className="Box_example"></div>
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
