import { Section } from "@components/Section";
import { Title } from "@components/Typography";
import React, { useState } from "react";
import { Card, Col, Row, Tab, Tabs } from "react-bootstrap";
import { dataProducts } from "../../data/products.json";
import "./styles.scss";

export const Products = () => {
  const [key, setKey] = useState("groceries");

  const productList = dataProducts.map((product) => {
    return (
      <Col key={product.id} xs={12} md={6} lg={4}>
        <Card
          style={{ width: "100%", marginBottom: "20px" }}
          className="Products__item"
        >
          <Card.Img
            variant="top"
            src="https://cdnx.jumpseller.com/carabela/image/11642227/resize/265/265?1600205590"
          />
          <Card.Body>
            <Card.Title className="text-center text-secondary">
              {product.brand}
            </Card.Title>
            <Card.Text className="text-center">{product.name}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return (
    <Section className="Products" fluid={true}>
      <div className="Products__heading">
        <Title level={2} className="Products__title">
          Products
        </Title>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="groceries" title="Abarrotes">
            <div style={{ padding: "20px" }}>
              <Row className="d-flex justify-content-between">
                {productList}
              </Row>
            </div>
          </Tab>
          <Tab eventKey="waters-and-drinks" title="Aguas y bebidas">
            <div style={{ padding: "20px" }}>
              <Row className="d-flex justify-content-between">
                {productList}
              </Row>
            </div>
          </Tab>
          <Tab eventKey="sausages" title="Embutidos">
            <div style={{ padding: "20px" }}>
              <Row className="d-flex justify-content-between">
                {productList}
              </Row>
            </div>
          </Tab>
        </Tabs>
      </div>
    </Section>
  );
};
