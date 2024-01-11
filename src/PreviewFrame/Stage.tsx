import React from "react";
import "./Stage.scss";

// import { SelectionLayer } from "../SelectionLayer/SelectionLayer";

interface StageProps {
  height?: string;
}

export const Stage = ({ height }: StageProps) => {
  return (
    <div style={{ height }} className="stage">
      {/*<SelectionLayer />*/}
      <div className="preview-frame">
        <iframe
          src="https://assafse1.wixsite.com/16-bittttts"
          style={{ width: "100%", height: "100%", border: "none" }}
          // id="preview"
          // allowFullScreen="true"
          // style={{top: "107px", left: "60px", width: "1041px", height: "698px", zIndex: 0, pointerEvents: "none"}}
        ></iframe>
      </div>
    </div>
  );
};
