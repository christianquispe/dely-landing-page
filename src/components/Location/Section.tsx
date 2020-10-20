import { Section } from "@components/Section";
import { Title } from "@components/Typography";
import LocationsContext from "@helpers/LocationContext";
import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Item } from "./Item";
import "./styles.scss";

export const Location = () => {
  const [location, setLocation] = useState(0);
  const allLocations = useContext(LocationsContext);
  return (
    <Section>
      <Row>
        <Col xs={12} lg={6}>
          <Row>
            <Title className="Locations__title" level={2}>
              Puntos de venta
            </Title>
            {allLocations.map((location, index) => {
              return (
                <Col key={index} xs="12">
                  <Item
                    onClick={() => setLocation(index)}
                    name={location.name}
                    address={location.address}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col className="Locations__container-img" xs={12} md={6}>
          <img src={allLocations[location].image} alt="" className="Locations__img" />
        </Col>
      </Row>
    </Section>
  );
};
