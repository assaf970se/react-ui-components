import React, { useEffect, useState } from "react";
import "./Workspace.scss";
import { Stage } from "../PreviewFrame/Stage";
import { Drawer } from "../Drawer/Drawer";

interface WorkspaceProps {
  isDrawerOpen: boolean;
  handleDrawerToggle: () => void;
}

export const Workspace = ({
  isDrawerOpen,
  handleDrawerToggle,
}: WorkspaceProps) => {
  const [drawerState, setDrawerState] = useState<string>("partial");
  useEffect(() => {
    if (!isDrawerOpen) {
      setDrawerState("partial");
    }
  }, [isDrawerOpen]);

  const handleDrawerHeight = () => {
    if (drawerState === "partial") {
      setDrawerState("full");
    } else {
      setDrawerState("partial");
    }
  };

  const calcDrawerHeight = (isDrawerOpen: boolean, drawerState: string) => {
    if (isDrawerOpen) {
      if (drawerState === "partial") {
        return "50%";
      } else if (drawerState === "full") {
        return "calc(100% - 20px)";
      }
    } else {
      return "0%";
    }
  };

  const calcPreviewFrameHeight = (
    isDrawerOpen: boolean,
    drawerState: string,
  ) => {
    if (isDrawerOpen) {
      if (drawerState === "partial") {
        return "50%";
      } else if (drawerState === "full") {
        return "20px";
      }
    } else {
      return "100%";
    }
  };

  const drawerHeight = calcDrawerHeight(isDrawerOpen, drawerState);
  const StageHeight = calcPreviewFrameHeight(isDrawerOpen, drawerState);

  return (
    <div className="workspace">
      <Stage height={StageHeight} />
      <Drawer
        height={drawerHeight}
        handleDrawerHeight={handleDrawerHeight}
        handleDrawerToggle={handleDrawerToggle}
      />
    </div>
  );
};
