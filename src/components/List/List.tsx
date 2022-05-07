import React from "react";
import clsx from "clsx";
import "./List.scss";

type Props = {
  className?: string;
  children: any;
};

function List({ className, children }: Props) {
  return <div className={clsx("list", className)}>{children}</div>;
}

List.defaultProps = {
  className: null,
};

export default List;
