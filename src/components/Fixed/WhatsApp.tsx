import React from "react";
import { Button } from "react-bootstrap";
import "./styles.scss";

export const WhatsAppFixed = () => {
  return (
    <div className="WhatsAppFixed">
      <a
        href="https://wa.me/+51993583676?text=Hola"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="success">
          <i className="fab fa-whatsapp" style={{ fontSize: "30px" }}></i>
        </Button>
      </a>
    </div>
  );
};
