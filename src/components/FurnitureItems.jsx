import React from "react";
import { useSelector } from "react-redux";
import Pulse from "react-reveal/Pulse";

function FurnitureItems({ title, img }) {

  return (
    <Pulse>

    <div className="furniture__item" >
      <div className="furniture__item-wrapper">
        <div className="furniture__item-img">
          <img src={img} alt="" />
        </div>
        <div className="furniture__item-title">{title}</div>
      </div>
    </div>
    </Pulse>
  );
}

export default FurnitureItems;
