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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <input type="text" value="" />
      </div>
    </div>
  );
};
