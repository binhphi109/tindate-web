import React from "react";
import clsx from "clsx";
import "./ListItem.scss";

type Props = {
  className?: string;
  imageUrl: string;
  title: string;
  subtitle: string;
};

function ListItem({ className, imageUrl, title, subtitle }: Props) {
  return (
    <div className={clsx("listItem", className)}>
      <div className="listItemImageContainer">
        <div
          className="listItemImage"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
      </div>
      <div className="listItemFooter">
        <div className="listItemTitle">{title}</div>
        <div className="listItemSubtitle">{subtitle}</div>
      </div>
    </div>
  );
}

ListItem.defaultProps = {
  className: null,
};

export default ListItem;
