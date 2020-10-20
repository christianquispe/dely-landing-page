import classNames from "classnames";
import React from "react";
import "./styles.scss";

export const tupleNum = <T extends number[]>(...args: T) => args;

const TITLE_ELE_LIST = tupleNum(1, 2, 3, 4, 5, 6);

interface ITitle
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  level?: typeof TITLE_ELE_LIST[number];
}

export const Title: React.FC<ITitle> = (props) => {
  let component: string;
  const classes = classNames(props.className, {
    [`title-level-${props.level}`]: props.level,
    [`title-level-1`]: !props.level,
  });
  if (props.level >= 1) {
    component = `h${props.level}`;
  }
  component = `h1`;
  const Component = component as any;

  return <Component className={classes}>{props.children}</Component>;
};
