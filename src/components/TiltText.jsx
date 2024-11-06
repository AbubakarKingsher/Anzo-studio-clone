import React from "react";

function TiltText(props) {
  return (
    <div id="tiltText" ref={props.tilt} className="absolute top-56 left-16">
      <h1 className="text-white leading-[70px] text-[60px] font-[anzo2]">
        I AM <span className="text-black">DARK MODE</span>™
      </h1>
      <h1 className="text-white leading-[80px] text-[112px] font-[anzo5]">
        DESIGNER
      </h1>
      <h1 className="text-white leading-[70px] text-[60px] font-[anzo2]">
        TO HIRE
      </h1>
    </div>
  );
}

export default TiltText;
