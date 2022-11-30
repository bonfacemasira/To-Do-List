import React from "react";
import Clock from "react-live-clock";

function LiveClock() {
  return (
    <div className="ClockContainer">
      <div>
        <div className="hdr">
          <div>Hi, Welcome</div>
        </div>
        <div className="clk">
          <Clock format={"HH:mm:ss"} ticking={true} />
        </div>
      </div>
    </div>
  );
}

export default LiveClock;
