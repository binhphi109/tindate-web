import React, { MouseEventHandler } from "react";
import { IconButton } from "@material-ui/core";
import clsx from "clsx";
import "./NavBarItem.scss";

type Props = {
  className?: string;
  icon?: string;
  iconColor?: string;
  title?: string;
  color?: "inherit" | "primary" | "secondary" | "default";
  onClick?: MouseEventHandler;
};

function NavBarItem({ className, icon, iconColor, title, color, onClick }: Props) {
  return (
    <div className={clsx("navbarItem", className)} onClick={onClick}>
      {icon && (
        <IconButton size="medium" color={color}>
          <i className={icon} style={{ color: iconColor }} />
        </IconButton>
      )}
      {title && <div className="navbarTitle">{title}</div>}
    </div>
  );
}

NavBarItem.defaultProps = {
  className: null,
  icon: null,
  iconColor: null,
  title: null,
  color: "default",
  onClick: null,
};

export default NavBarItem;
