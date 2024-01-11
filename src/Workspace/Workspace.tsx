import React, { useEffect, useState } from "react";
import "./Workspace.scss";
import { PreviewFrame } from "../PreviewFrame/PreviewFrame";
import { Drawer } from "../Drawer/Drawer";

interface WorkspaceProps {
  isDrawerOpen: boolean;
  handleDrawerToggle: () => void;
}

interface WorkspaceState {
  drawerState: "closed" | "open" | "partial";
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
        return "100%";
      }
    } else {
      return "0px";
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
        return "0px";
      }
    } else {
      return "100%";
    }
  };

  const drawerHeight = calcDrawerHeight(isDrawerOpen, drawerState);
  const previewFrameHeight = calcPreviewFrameHeight(isDrawerOpen, drawerState);

  return (
    <div className="workspace">
      <PreviewFrame height={previewFrameHeight} />
      <Drawer
        height={drawerHeight}
        handleDrawerHeight={handleDrawerHeight}
        handleDrawerToggle={handleDrawerToggle}
      />
    </div>
  );
};
