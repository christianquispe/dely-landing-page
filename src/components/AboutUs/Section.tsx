import { Section } from "@components/Section";
import { Title } from "@components/Typography";
import React from "react";
import { Container } from "react-bootstrap";
import imageMision from "../../assets/about-us/mision.jpg";
import "./styles.scss";

export const AboutUs = () => {
  return (
    <section className="section-common-home--gray">
      <Section id="about-us" className="section-common-home">
        <Title className="AboutUs__title text-center" level={2}>
          Nosotros
        </Title>
        <br></br>
        <br></br>
        <br></br>
        <div className="about-us-mision-vision">
          <img
            className="AboutUs__img"
            src={imageMision}
            alt="Vision de la empresa"
          />
          <div>
            <Title className="AboutUs__subtitle text-center" level={4}>
              Misión
            </Title>
            <p className="text-center">
              Tenemos el compromiso de crecer con nuestros clientes; por lo
              tanto, brindamos el mejor servicio, precios accesibles y productos
              de calidad.
            </p>
          </div>
          <div className="divider-horizontal"></div>
          <div>
            <Title className="AboutUs__subtitle text-center" level={4}>
              Visión
            </Title>
            <p className="text-center">
              Ser una empresa líder en el rubro de la comercialización de
              abarrotes y con el apoyo de nuestro efectivo equipo de trabajo
              seguir brindando el excelente servicio que nuestros clientes se
              merecen.
            </p>
          </div>
        </div>
      </Section>
    </section>
  );
};
