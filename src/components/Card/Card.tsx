import React from "react";
import clsx from "clsx";
import "./Card.scss";

type Props = {
  className?: string;
  imageUrl: string;
  title: string;
  subtitle: string;
};

function Card({ className, imageUrl, title, subtitle }: Props) {
  return (
    <div className={clsx("card", className)}>
      <div
        className="cardImage"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="cardFooter">
        <div className="cardTitle">{title}</div>
        <div className="cardSubtitle">{subtitle}</div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  className: null,
};

export default Card;
