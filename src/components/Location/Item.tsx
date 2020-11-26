import React from "react";

interface ILocationItem
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  name: string;
  address: string;
  businessHours?: string;
}

export const Item: React.FC<ILocationItem> = ({
  name,
  address,
  businessHours,
  ...rest
}) => {
  return (
    <div className="Locations__item" {...rest}>
      <span className="d-block font-weight-bold text-primary">{name}</span>
      <span className="d-block text-primary">{address}</span>
    </div>
  );
};
