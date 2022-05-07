import React, { MouseEventHandler } from "react";
import { IconButton } from "@material-ui/core";
import clsx from "clsx";
import "./Button.scss";

type Props = {
  className?: string;
  icon: string;
  iconColor?: string;
  color?: "inherit" | "primary" | "secondary" | "default";
  onClick?: MouseEventHandler;
};

function Button({ className, icon, iconColor, color, onClick }: Props) {
  return (
    <div className={clsx("button", className)} onClick={onClick}>
      <IconButton size="medium" color={color}>
        <i className={icon} style={{ color: iconColor }} />
      </IconButton>
    </div>
  );
}

Button.defaultProps = {
  className: null,
  iconColor: null,
  color: "default",
  onClick: null,
};

export default Button;
