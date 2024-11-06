import React from "react";

function Page6() {
  return (
    <div className="h-screen p-3 bg-[#fafafa]">
      <div className="h-full shadow-[0px_0px_8px_5px_#00000024] shadow-gray-300 flex items-center justify-start overflow-hidden rounded-[30px]">
        <video
          loop
          muted
          autoPlay="auto"
          className="h-full w-full object-cover"
          src="/src/assets/video2.mp4"
        ></video>

        <h1 className="text-[40vw] tracking-[10px] mt-[9%] ml-[5%] text-[#fafafa] font-[anzo1] leading-[30vw] absolute">
          ABOUT
        </h1>
      </div>
    </div>
  );
}

export default Page6;
