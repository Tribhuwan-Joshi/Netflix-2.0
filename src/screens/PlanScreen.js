import React, { useState } from "react";
import "./PlanScreen.css"
function PlanScreen() {
  const [products] = useState([
    { name: "Premium", description: "4k + HDR" },
    { name: "Basic", description: "720p" },
    { name: "Standard", description: "1080p" },
  ]);
  return (
    <div className="planScreen">
      {products.map((p) => {
        return (
          <div key={p.name} className="planScreen_plan">
            <div className="planScreen_info">
              <h5>{p.name}</h5>
              <h6>{p.description}</h6>
            </div>
            <button>Subscribe</button>
          </div>
        );
      })}
    </div>
  );
}

export default PlanScreen;
