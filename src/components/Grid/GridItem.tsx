import React from "react";
import clsx from "clsx";
import "./GridItem.scss";

type Props = {
  className?: string;
  image: string;
  title: string;
  subtitle: string;
};

function GridItem({ className, image, title, subtitle }: Props) {
  return (
    <div className={clsx("gridItem", className)}>
      <div
        className="gridItemImage"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="gridItemFooter">
        <div className="gridItemTitle">
          {title}, {subtitle}
        </div>
      </div>
    </div>
  );
}

GridItem.defaultProps = {
  className: null,
};

export default GridItem;
