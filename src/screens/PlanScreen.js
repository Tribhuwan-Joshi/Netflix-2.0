import React, { useState } from "react";
import "./PlanScreen.css"
function PlanScreen() {
  const [products,setProducts] = useState([
    { id :1 , name: "Premium", description: "4k + HDR" , isSubscribed:false },
    {id:2, name: "Basic", description: "720p" , isSubscribed:false },
    { id:3 , name: "Standard", description: "1080p" , isSubscribed:false },
  ]);
  function handleClick(id){
setProducts(products.map(p => {
    if(p.id===id) return {...p ,isSubscribed:!p.isSubscribed };
    if(p.isSubscribed) return {...p , isSubscribed:false}
    return p;
}))
  }
  return (
    <div className="planScreen">
      {products.map((p) => {
        return (
          <div key={p.id} className="planScreen_plan">
            <div className="planScreen_info">
              <h4>{p.name}</h4>
              <h5>{p.description}</h5>
            </div>
            <button
              onClick={() => handleClick(p.id)}
              style={{ backgroundColor: p.isSubscribed ? "gray" : "#e50914" }}
            >
              {p.isSubscribed ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlanScreen;
