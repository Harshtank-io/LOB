import React, { useState } from "react";
import "../css/Service.css";
import DsaMap from "../components/roadsMaps/DsaMap";

export default function Services() {
  return (
    <>
      <div className="dendrogram" style={{ width: "100%", height: "100%" }}>
        <DsaMap />
      </div>
    </>
  );
}
