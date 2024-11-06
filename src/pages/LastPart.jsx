import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function LastPart() {
  useGSAP(() => {
    gsap.to("#exal", {
      duration: 7,
      rotate: 360,
      repeat: -1,
      ease: "linear",
    });
  });

  return (
    <div className="h-screen p-8 mt-20 bg-[#fafafa] text-white">
      <div className="h-full bg-cover pt-[80px] pr-[50px] pl-[70px] rounded-[30px] bg-[url(https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_811,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Background%20Anzo_Studio.jpg)] overflow-hidden w-full">
        <div className="text-[17vw] mb-5 font-[anzo1] leading-[12vw]">
          <h1>
            GOT <span className="text-[#9ca3af]">AN</span>
          </h1>
        </div>

        <div className="flex items-center justify-between w-[80%]">
          <h1 className="text-[17vw] mb-5 font-[anzo1] leading-[12vw]">IDEA</h1>
          <div className="flex items-center gap-[41px] justify-center">
            <div>
              <img
                id="exal"
                className="w-[5.5rem]"
                src="https://static.wixstatic.com/media/f1c650_7a84fb38cb2d4bebb8b34004f66d4c3d~mv2.png/v1/fill/w_74,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/World%20Contact.png"
              />
            </div>
            <div className="h-[100px] w-[2px] bg-white"></div>
            <div>
              <p className="text-[18px] leading-[23px] text-[#9ca3af] opacity-[0.8]">
                WORLD SERVICE
              </p>
              <h3 className="text-[20px] leading-[23px] font-bold">
                I CAN COME TO WHEREVER YOU ARE.
              </h3>
              <p className="text-[18px] leading-[23px] text-[#9ca3af] opacity-[0.8]">
                +31 68 4564137
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full mt-3">
          <div>
            <h2 className="text-lg leading-[20px] font-thin text-[#9ca3af]">
              IT IS NOT JUST ABOUT SOLVING THE PROBLEM
            </h2>
            <h2 className="text-lg leading-[20px] font-thin text-[#9ca3af]">
              BUT{" "}
              <span className="font-semibold text-white">
                OFFERING THE TRANSFORMATION!
              </span>
            </h2>
          </div>
          <h4 className="font-semibold">© 2024 Anzo.Studio™</h4>
        </div>
      </div>
    </div>
  );
}

export default LastPart;
