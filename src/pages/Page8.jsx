import React from "react";

function Page8() {
  return (
    <div className="h-screen p-3 bg-[#fafafa]">
      <div className="h-full shadow-[0px_0px_8px_5px_#00000024] bg-black shadow-gray-300 flex items-center justify-start overflow-hidden rounded-[30px]">
        <video
          autoPlay
          muted
          loop
          className="object-cover w-full h-full"
          src="/Anzo-studio-clone/videos/video3.mp4"
        ></video>
        <div className="flex p-8 justify-between text-[#fafafa] absolute flex-col text-center w-[99%] h-full">
          <div>
            <h1 className="font-[anzo1] text-[12vw] leading-[10vw]">
              PERSONAL
            </h1>
            <p className="text-gray-300 font-semibold text-[18px] opacity-[0.8] leading-[7px]">
              Intuition, Imagination, Discipline
            </p>
          </div>
          <div>
            <h1 className="font-[anzo1] text-[12vw] leading-[10vw]">
              PROFESSIONAL
            </h1>
            <p className="text-gray-300 font-semibold text-[18px] opacity-[0.8] leading-[7px]">
              Time Management, Multitasking, Creativity
            </p>
          </div>
          <h1 className="font-[anzo1] text-[12vw] leading-[10vw]">
            ADDITIONAL
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Page8;
