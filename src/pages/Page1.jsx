import React, { useRef, useState } from "react";
import TiltText from "../components/TiltText";
import BottomText from "../components/BottomText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Page1() {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMove = (e) => {
    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 16) /
        20
    );
    setYVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 16
      ) / 20
    );
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 5,
        ease: "power4.out",
      });
    },
    [xVal, yVal]
  );

  return (
    <div
      onMouseMove={(e) => {
        mouseMove(e);
      }}
      className="h-screen bg-[#fafafa] py-3 px-3 "
    >
      <div
        id="pageInner"
        className=" bg-cover rela relative h-full w-full bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1322,h_580,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] rounded-[30px] shadow-[0px_0px_10px_1px_#00000024] shadow-black"
      >
        <img
          className="h-22 w-22 absolute top-14 left-20"
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
        />
        <TiltText tilt={tiltRef} />
        <BottomText />
      </div>
    </div>
  );
}

export default Page1;
