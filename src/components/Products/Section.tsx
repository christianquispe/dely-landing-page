import { Section } from "@components/Section";
import { Title } from "@components/Typography";
import { aceiteData, conservaData, fideosData } from "@data";
import React, { useState } from "react";
import { Card, Col, Row, Tab, Tabs } from "react-bootstrap";
import "./styles.scss";

export const Products = () => {
  const [key, setKey] = useState("groceries");
  const aceiteList = aceiteData.map((product) => {
    return (
      <Col key={product.id} xs={12} md={6} lg={4}>
        <Card
          style={{ width: "100%", marginBottom: "20px" }}
          className="Products__item"
        >
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title className="text-center text-secondary">
              {product.brand}
            </Card.Title>
            <Card.Text className="text-center">{product.name}</Card.Text>
            <Card.Body className="text-center">{product.description}</Card.Body>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  const fideosList = fideosData.map((product) => {
    return (
      <Col key={product.id} xs={12} md={6} lg={4}>
        <Card
          style={{ width: "100%", marginBottom: "20px" }}
          className="Products__item"
        >
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title className="text-center text-secondary">
              {product.brand}
            </Card.Title>
            <Card.Text className="text-center">{product.name}</Card.Text>
            <Card.Body className="text-left">{product.description}</Card.Body>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  const conservaList = conservaData.map((product) => {
    return (
      <Col key={product.id} xs={12} md={6} lg={4}>
        <Card
          style={{ width: "100%", marginBottom: "20px" }}
          className="Products__item"
        >
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title className="text-center text-secondary">
              {product.brand}
            </Card.Title>
            <Card.Text className="text-center">{product.name}</Card.Text>
            <Card.Body className="text-left">{product.description}</Card.Body>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <Section className="Products section-common-home--gray" fluid={true}>
      <Title level={2} className="Products__title">
        Productos
      </Title>
      <div className="Products__heading">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="groceries" title="Fideos">
            <div style={{ padding: "20px" }}>
              <Row className="d-flex justify-content-between">{fideosList}</Row>
            </div>
          </Tab>
          <Tab eventKey="waters-and-drinks" title="Conservas">
            <div style={{ padding: "20px" }}>
              <Row className="d-flex justify-content-between">
                {conservaList}
              </Row>
            </div>
          </Tab>
          <Tab eventKey="sausages" title="Aceites">
            <div style={{ padding: "20px" }}>
              <Row className="d-flex justify-content-between">{aceiteList}</Row>
            </div>
          </Tab>
        </Tabs>
      </div>
    </Section>
  );
};
