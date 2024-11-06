import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

function Page5() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".animate", {
      opacity: 0,
      duration: 2,
      stagger: 1,
      transform: "rotateX(-100deg)",
      scrollTrigger: {
        trigger: ".animate",
        start: "top 100%",
        end: "top -350%",
        scrub: 2,
      },
    });
  });

  return (
    <div id="page5" className="h-full bg-[#fafafa]">
      <div className="animate">
        <h1 className="text-[40vw] font-[anzo1] text-center leading-[35vw]">
          HELPING
        </h1>
      </div>

      <div className="animate">
        <h1 className="text-[40vw] font-[anzo1] text-center leading-[35vw]">
          MY
        </h1>
      </div>

      <div className="animate">
        <h1 className="text-[40vw] font-[anzo1] text-center leading-[35vw]">
          CLIENTS
        </h1>
      </div>

      <div className="animate">
        <h1 className="text-[40vw] font-[anzo1] text-center leading-[35vw]">
          TO ACHIEVE
        </h1>
      </div>

      <div className="animate">
        <h1 className="text-[40vw] font-[anzo1] text-center leading-[35vw]">
          THEIR
        </h1>
      </div>

      <div className="animate">
        <h1 className="text-[40vw] font-[anzo1] text-center leading-[35vw]">
          DREAMS!
        </h1>
      </div>
    </div>
  );
}

export default Page5;
