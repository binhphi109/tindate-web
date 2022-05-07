import React from "react";
import clsx from "clsx";
import "./NavBar.scss";

type Props = {
  className?: string;
  children: any;
};

function NavBar({ className, children }: Props) {
  return <div className={clsx("navbar", className)}>{children}</div>;
}

NavBar.defaultProps = {
  className: null,
};

export default NavBar;
