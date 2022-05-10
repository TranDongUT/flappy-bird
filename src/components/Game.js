import React, { useEffect } from "react";
import Bird from "./Bird";
import Pipe from "./Pipe";
import "./style/game.scss";
import base from "./assest/sprites/base.png";
import { useSelector, useDispatch } from "react-redux";

export default function Game() {
  const game = useSelector((state) => state.game);
  const birdState = useSelector((state) => state.bird);
  const pipeState = useSelector((state) => state.pipe);
  const dispatch = useDispatch();

  let fall = null;
  let renderPipe = null;

  if (game.isPlaying == false) {
    clearInterval(fall);
    clearInterval(renderPipe);
  }

  useEffect(() => {
    const handlePress = (e) => {
      if (e.keyCode == 32 || e.pointerType == "mouse") {
        birdFly();
      }
      start();
    };
    window.addEventListener("keydown", handlePress);
    window.addEventListener("click", handlePress);

    return () => {
      window.removeEventListener("touchstart", handlePress);
      window.removeEventListener("keydown", handlePress);
    };
  }, []);

  const birdFly = () => {
    dispatch({ type: "FLY" });
    clearInterval(fall); /////clean up funct
    clearInterval(renderPipe);
  };

  const start = () => {
    if (!game.isPlaying) {
      fall = setInterval(() => {
        dispatch({ type: "FALL" });
        dispatch({ type: "RUNNING" }); ////pipe
      }, 200);

      renderPipe = setInterval(() => {
        dispatch({ type: "RENDER_PIPE" });
      }, 200);

      dispatch({ type: "PLAYING" });
    }
  };

  const check = () => {
    const birdY = birdState.posY;
    const x = pipeState.posX;
    const pipes = pipeState.pipes;

    const challenge = pipes
      .map(({ height }, i) => {
        return {
          x1: x + i * 250,
          y1: height,
          x2: x + i * 250,
          y2: height + 80,
        };
      })
      .filter(({ x1 }) => {
        if (x1 > 5 && x1 < 200) {
          return true;
        }
      });
    ///main - base 550 - 160
    if (birdY > 520) {
      dispatch({ type: "GAME_OVER" });
      alert(`game over posBird:${birdY}`);
      window.location.reload(false);
    }

    if (challenge.length) {
      const { x1, x2, y1, y2 } = challenge[0];
      console.log(x1);
      if (
        (x1 < 105 && 105 < x1 + 52 && birdY < y1) ||
        (x2 < 105 && 105 < x2 + 52 && birdY > y2)
      ) {
        dispatch({ type: "GAME_OVER" });
        alert(`game over posBird:${birdY}, posPipeY${y1}, posPipeX${x1}`);

        window.location.reload(false);
      }
    }
  };
  check();

  return (
    <div className="game">
      <div className="main">
        <Bird status={game.isPlaying} />
        <Pipe />

        {/* base */}
        <div className="base">
          <img src={base} alt="" />
        </div>
      </div>
    </div>
  );
}
