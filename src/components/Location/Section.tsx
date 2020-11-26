import { Section } from "@components/Section";
import { Title } from "@components/Typography";
import LocationsContext, {
  ILocationContextDefault
} from "@helpers/LocationContext";
import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Item } from "./Item";
import "./styles.scss";

export const Location = () => {
  const [location, setLocation] = useState(0);
  const allLocations = useContext(LocationsContext);
  const indexed = allLocations.reduce(
    (acc, el: ILocationContextDefault) => [...acc, { [el.key]: el }],
    []
  );
  return (
    <Section id="locate-us">
      <Row className="align-items-center">
        <Col xs={12} lg={6}>
          <Title className="Locations__title" level={2}>
            Puntos de venta
          </Title>
          {allLocations.map((location: ILocationContextDefault, index) => {
            if (location.key === "address") {
              return (
                <>
                  <div
                    onClick={() => setLocation(index)}
                    style={{ marginBottom: "20px" }}
                  >
                    <span className="d-block font-weight-bold">
                      {location.address}
                    </span>
                    <span className="d-block">
                      Horario de atención: {location.businessHours}
                    </span>
                  </div>
                  <p>Sucursales</p>
                </>
              );
            }
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
        </Col>
        <Col className="Locations__container-img" xs={12} md={6}>
          <img
            src={allLocations[location].image}
            alt=""
            className="Locations__img"
          />
        </Col>
      </Row>
    </Section>
  );
};
