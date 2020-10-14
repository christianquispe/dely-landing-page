import React from "react";
import { Button } from "react-bootstrap";
import "./Banner.scss";

export const Banner = () => {
  return (
    <div className="Banner">
      <div className="Banner__btn">
        <Button className="btn btn-light">Aquí</Button>
      </div>
    </div>
  );
};
