import PropertiesDisplay from "./PropertiesDisplay";
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from "react";

function Properties() {

  return (
    <div>
      <h3 style={{ color: "#EE3BE3", marginLeft: "20px" }}>Search Property</h3>
      <br/><PropertiesDisplay/>
    </div>
  );
}

export default Properties;