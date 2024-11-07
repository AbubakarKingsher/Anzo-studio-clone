import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

function Page7() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to("#image", {
      duration: 2,
      rotate: 120,
      scrollTrigger: {
        trigger: "#image",
        start: "top 100%",
        end: "top -30%",
        scrub: 2,
      },
    });
  });

  return (
    <div className="h-[900px] p-3 bg-[#fafafa]">
      <div className="h-full shadow-[0px_0px_8px_5px_#00000024] relative bg-black shadow-gray-300 overflow-hidden rounded-[30px]">
        <img
          id="image"
          src="https://static.wixstatic.com/media/f1c650_e5c1c4b281ea418a8663a17e66f283f1~mv2.png/v1/fill/w_627,h_539,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/triangle%203.png"
        />

        <div className="text-white text-[20vw] leading-[16vw] absolute left-[70px] top-[70px] font-[anzo1]">
          <h1>HOW</h1>
          <h1>CAN</h1>
        </div>

        <div className="text-white text-[20vw] leading-[16vw] absolute right-[70px] top-[70px] font-[anzo1]">
          <h1>I HELP</h1>
          <h1 className="text-right">YOU</h1>
        </div>

        <div className="flex items-center w-full gap-10 justify-evenly absolute bottom-[50px] text-white text-[16px] font-semibold">
          <p className="w-[300px]">
            I am a self-taught web and brand designer with a passion for
            creating unique and timeless masterpieces for ambitious
            professionals, entrepreneurs, artists, and boutique businesses.
          </p>

          <p className="w-[300px]">
            With a background in strategic marketing and acknowledged expertise
            in web development, I aim to minimize my client's resources spent on
            macro and micro-management, marketing research, and hiring a whole
            team of a larger agency.
          </p>

          <p className="w-[300px]">
            My mission is to drive exceptional growth for my clients by
            increasing their brand appearance, defining their identity, and
            engaging customers through captivating black-and-white aesthetics
            with a modern, luxurious, and minimalistic touch.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page7;
