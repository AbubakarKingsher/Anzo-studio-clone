import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

function Page4() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".page4Text", {
      duration: 5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".page4Text",
        start: "top 50%",
      },
    });
  });

  return (
    <div className="h-screen overflow-hidden p-3 bg-[#fafafa]">
      <div className="h-full flex items-center shadow-[0px_0px_8px_5px_#00000024] shadow-gray-400 justify-center bg-[url(https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_810,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Background%20Anzo_Studio.jpg)] bg-cover rounded-[30px] ">
        <h1 className="page4Text text-white text-[25vw] font-[anzo1]">
          <span className="text-gray-300">WHAT</span> I DO
        </h1>
      </div>
    </div>
  );
}

export default Page4;
