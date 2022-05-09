import React from "react";
import { useSelector } from "react-redux";
import pipe from "./assest/sprites/pipe-green.png";

export default function Pipe() {
  const pipeState = useSelector((state) => state.pipe);
  const { posX, pipes } = pipeState;

  return (
    <>
      {pipes.map(({ height }, i) => {
        return (
          <div key={i}>
            <div
              className="topPipe"
              style={{
                background: `url(${pipe})`,
                backgroundRepeat: "no-repeat",
                transition: "all 1000ms linear",
                transform: "rotate(180deg)",
                position: "absolute",
                width: "52px",
                top: 0,
                left: pipeState.posX + i * 250,
                height: height,
              }}
            ></div>
            <div
              className="bottomPipe"
              style={{
                background: `url(${pipe})`,
                backgroundRepeat: "no-repeat",
                transition: "all 1000ms linear",
                position: "absolute",
                width: "52px",
                height: "400px",
                left: pipeState.posX + i * 250,
                top: height + 80,
              }}
            ></div>
          </div>
        );
      })}
    </>
  );
}
