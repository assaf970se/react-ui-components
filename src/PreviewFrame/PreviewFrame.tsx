import React from "react";
import "./PreviewFrame.scss";

interface PreviewFrameProps {
  height?: string;
}

export const PreviewFrame = ({ height }: PreviewFrameProps) => {
  return (
    <div style={{ height }} className="preview-frame">
      {/*-----------------------*/}
      {/*Selection layer goes here*/}
      {/*-----------------------*/}
      <iframe
        src="https://assafse1.wixsite.com/16-bittttts"
        style={{ width: "100%", height: "100%" }}
        // id="preview"
        // allowFullScreen="true"
        // style={{top: "107px", left: "60px", width: "1041px", height: "698px", zIndex: 0, pointerEvents: "none"}}
      ></iframe>
    </div>
  );
};
