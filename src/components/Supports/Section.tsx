import { Section } from "@components/Section";
import React from "react";
import { Image } from "react-bootstrap";
import nestle from "../../assets/marcas-socios/nestle.png";
import sancela from "../../assets/marcas-socios/sancela.png";
import yichang from "../../assets/marcas-socios/yichang.png";
import molicentro from "../../assets/marcas-socios/molicentro.jpg";
import monteSol from "../../assets/marcas-socios/monte-sol.png";
import molitalia from "../../assets/marcas-socios/molitalia.jpg";
import ajinomoto from "../../assets/marcas-socios/ajinomoto.png";
import incasur from "../../assets/marcas-socios/incasur.png";
import beltran from "../../assets/marcas-socios/beltran.jpg";
import gloria from "../../assets/marcas-socios/gloria.jpg";
import delCielo from "../../assets/marcas-socios/alicorp.jpg";
import agroindustria from "../../assets/marcas-socios/agroindustria.jpg";
import paramonga from "../../assets/marcas-socios/paramonga.png";
import sanJorge from "../../assets/marcas-socios/san-jorge.png";
import molinoElTriunfo from "../../assets/marcas-socios/molino-el-triunfo.jpg";
import pg from "../../assets/marcas-socios/pg.jpg";
import "./styles.scss";
export const Supports = () => {
  return (
    <Section>
      <span className="Supports__title">Con el apoyo de:</span>
      <div className="Supports__container-img">
        <Image className="Supports__img" src={incasur} alt="" rounded />
        <Image className="Supports__img" src={sanJorge} alt="" rounded />
        <Image className="Supports__img" src={ajinomoto} alt="" rounded />
        <Image className="Supports__img" src={beltran} alt="" rounded />
        <Image className="Supports__img" src={molitalia} alt="" rounded />
        <Image className="Supports__img" src={nestle} alt="" rounded />
        <Image className="Supports__img" src={molinoElTriunfo} alt="" rounded />
        <Image className="Supports__img" src={sancela} alt="" rounded />
        <Image className="Supports__img" src={gloria} alt="" rounded />
        <Image className="Supports__img" src={yichang} alt="" rounded />
        <Image className="Supports__img" src={molicentro} alt="" rounded />
        <Image className="Supports__img" src={monteSol} alt="" rounded />
        <Image className="Supports__img" src={pg} rounded />
        <Image className="Supports__img" src={delCielo} rounded />
        <Image className="Supports__img" src={agroindustria} rounded />
        <Image className="Supports__img" src={paramonga} rounded />
      </div>
    </Section>
  );
};
