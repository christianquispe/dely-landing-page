import classNames from "classnames";
import React from "react";
import { Container } from "react-bootstrap";
import "./styles.scss";

interface ISection
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  fluid?: boolean;
  type?: "white" | "gray";
}

export const Section: React.FC<ISection> = ({
  className,
  children,
  fluid,
  type,
  ...rest
}) => {
  const classes = classNames(className, "Section", {
    [`Section-fluid`]: fluid,
    [`Section--${type}`]: type,
  });
  return (
    <section className={classes} {...rest}>
      <Container>{children}</Container>
    </section>
  );
};
