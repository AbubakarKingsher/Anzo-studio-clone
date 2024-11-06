import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function BottomText() {
  useGSAP(function () {
    gsap.to("#roll img", {
      rotate: "360deg",
      duration: 3,
      repeat: -1,
      ease: "linear",
    });
  });

  return (
    <div className=" px-14 absolute bottom-[50px] w-[99%] flex items-end justify-between">
      <div>
        <h1 className="text-white text-[18px] font-[anzo2]">
          BRAND DESIGN | WEBSITE DESIGN
        </h1>
        <h1 className="text-white text-[18px] font-[anzo3] opacity-[0.5] leading-[13px]">
          BESPOKE FREELANCE
        </h1>
      </div>

      <div id="roll">
        <img
          className="h-20 w-20 mb-5"
          src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_83,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png"
        />
        <img
          className="h-20 w-20"
          src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_83,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png"
        />
      </div>
    </div>
  );
}

export default BottomText;
