import React from "react";
import globeloader from "./globeloader.gif"

const Spinner=()=>{
    return (
      <div className="text-center">
        <img src={globeloader} alt="globeloader"/>
      </div>
    )
}

export default Spinner