import React from "react";
import clsx from "clsx";
import "./Grid.scss";

type Props = {
  className?: string;
  children: any;
};

function Grid({ className, children }: Props) {
  return <div className={clsx("grid", className)}>{children}</div>;
}

Grid.defaultProps = {
  className: null,
};

export default Grid;
