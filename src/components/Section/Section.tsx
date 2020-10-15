import classNames from "classnames";
import React from "react";
import { Container } from "react-bootstrap";
import './styles.scss';

interface ISection
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  fluid?: boolean;
}

export const Section: React.FC<ISection> = (props) => {
  const classes = classNames(props.className, "Section" , {
    [`Section-fluid`]: props.fluid,
  });
  return (
    <section>
      <Container className={classes}>{props.children}</Container>
    </section>
  );
};
