import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import {
  TO_EMAIL,
  SUBJECT_MAIL,
  SERVICE_ID,
  TEMPLATE_ID,
  USER_ID,
  TO_NAME,
} from "@config/constants";

export const FormContact: React.FC = () => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      to_name: TO_NAME,
      to_email: TO_EMAIL,
      subject: SUBJECT_MAIL,
      message: values.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        required={true}
        name="name"
        placeholder="*Nombres"
        onChange={handleInputChange}
        className="Form_input"
      />
      <input
        type="email"
        name="email"
        required={true}
        placeholder="*E-mail"
        onChange={handleInputChange}
        className="Form_input"
      />
      <textarea
        name="message"
        placeholder="*Escribe tu mensaje aqui"
        onChange={handleInputChange}
        className="Form_input"
      />
      <div style={{ padding: "20px 0" }} className="d-flex flex-nowrap">
        <span className="text-white">
          Los campos se deben llenar obligatoriamente para poder procesar
          correctameent la solicitud
        </span>
        {/* <Button type="submit">Enviar</Button> */}
        <input type="submit" value="Enviar" />
      </div>
    </form>
  );
};
