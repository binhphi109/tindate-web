import React from "react";
import clsx from "clsx";
import "./GridItem.scss";

type Props = {
  className?: string;
  imageUrl: string;
  title: string;
  subtitle: string;
};

function GridItem({ className, imageUrl, title, subtitle }: Props) {
  return (
    <div className={clsx("gridItem", className)}>
      <div
        className="gridItemImage"
        style={{
          backgroundImage: `url(${imageUrl})`,
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
