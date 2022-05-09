import React, { MouseEventHandler } from "react";
import clsx from "clsx";
import "./EmptyWrapper.scss";

type Props = {
  className?: string;
  data?: any[] | null;
  children: any;
};

function EmptyWrapper({ className, data, children }: Props) {
  if (data && data.length > 0) {
    return children;
  }

  return (
    <div className={clsx("emptyWrapper", className)}>
      <i className={"fas fa-fire"} />
      <div className="title">No Data</div>
      <div className="description">There is no data defined.</div>
    </div>
  );
}

EmptyWrapper.defaultProps = {
  className: null,
  data: null,
};

export default EmptyWrapper;
