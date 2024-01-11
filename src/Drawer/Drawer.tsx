import React from "react";
import "./Drawer.scss";

interface DrawerProps {
  height?: string;
  handleDrawerToggle: () => void;
  handleDrawerHeight: () => void;
}

export const Drawer = ({
  height,
  handleDrawerHeight,
  handleDrawerToggle,
}: DrawerProps) => {
  return (
    <div className="drawer" style={{ height }}>
      <div className="drawer-header" onClick={handleDrawerHeight}>
        <p>Drawer Header</p>
        <button onClick={handleDrawerToggle}>X</button>
      </div>
      <div className="drawer-body">
        <p>Drawer Body</p>
        <input type="text" value="" />
      </div>
    </div>
  );
};
