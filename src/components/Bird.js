import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import birdMiddle from "./assest/sprites/yellowbird-midflap.png";
import birdFly from "./assest/sprites/yellowbird-upflap.png";
import { fall } from "../store/actions/birdActions";

export default function Bird() {
  const birdState = useSelector((state) => state.bird);

  const birdStyle = {
    backgroundImage: `url(${
      birdState.status === "fly" ? birdFly : birdMiddle
    })`,
    width: "34px",
    height: "24px",
    position: "absolute",
    left: "100px",
    transition: "all 200ms linear",
    transform: `${birdState.status === "fly" ? "rotate(-30deg)" : "rotate(0)"}`,
    top: `${birdState.posY}px`,
  };

  return <div style={birdStyle} className="bird"></div>;
}
