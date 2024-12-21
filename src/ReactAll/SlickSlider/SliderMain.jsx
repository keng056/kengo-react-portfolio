import React, { useState, useEffect } from "react";
import SliderDetail from "./SliderDetail";

const SliderTime = () => {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });
  const [position, setPosition] = useState(0); // 現在の位置を管理
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const newSeconds = date.getSeconds();
      const currentTenSeconds = Math.floor(time.seconds / 10); // 現在の秒の10の位
      const newTenSeconds = Math.floor(newSeconds / 10); // 新しい秒の10の位
      setTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: newSeconds,
      });
      // 10の位が変わった場合、位置を更新する
      if (currentTenSeconds !== newTenSeconds) {
        setPosition((prevPosition) => prevPosition + 350); // 右に350px移動
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [time.seconds]);
  return (
    <div>
      <h1>
        現在の時刻: {time.hours}時{time.minutes}分{time.seconds}秒
      </h1>
      <div
        className="cardBox"
        style={{
          transition: "transform 0.3s ease",
          transform: `translateX(${position}px)`, // 現在の位置に基づいて移動
        }}
      >
        <SliderDetail />
      </div>
    </div>
  );
};
const SliderMain = () => {
  return (
    <div>
      <SliderTime />
    </div>
  );
};
export default SliderMain;
