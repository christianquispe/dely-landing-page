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
}

export const Section: React.FC<ISection> = ({
  className,
  children,
  fluid,
  ...rest
}) => {
  const classes = classNames(className, "Section", {
    [`Section-fluid`]: fluid,
  });
  return (
    <section className={classes} {...rest}>
      <Container>{children}</Container>
    </section>
  );
};
