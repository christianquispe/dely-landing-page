import { Section } from "@components/Section";
import { Title } from "@components/Typography";
import React from "react";
import imageMision from "../../assets/about-us/mision.png";
import "./styles.scss";

export const AboutUs = () => {
  return (
    <section className="section-common-home--gray">
      <Section id="about-us" className="section-common-home">
        <Title className="AboutUs__title text-center" level={2}>
          Nosotros
        </Title>
        <div className="about-us-mision-vision">
          <img
            className="AboutUs__img"
            src={imageMision}
            alt="Vision de la empresa"
          />
          <div>
            <Title className="AboutUs__subtitle text-center" level={4}>
              Reseña de la empresa
            </Title>
            <p className="text-center">
              Consorcio Dely S.A.C. identificada con el RUC: 20601228492 es una
              empresa peruana dedicada a la comercialización de abarrotes en el
              canal mayorista a nivel nacional, contamos con un amplio surtido
              de productos gracias a nuestros aliados como: P&G, Alicorp,
              Nestlé, Gloria, Molitalia, entre otros.
            </p>
          </div>
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
