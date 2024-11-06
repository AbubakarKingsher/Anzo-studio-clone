import React from "react";

function Page3() {
  return (
    <div className="h-screen flex items-center relative bg-[#fafafa] justify-center">
      <img className="absolute z-20 h-[80vh]" src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_598,h_344,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/try.png" />
        <video className="h-[60vh] relative z-10 w-[49vw]" autoPlay muted src="/src/assets/video.mp4"></video>

        <div className="h-[2px] opacity-[0.3] top-[65%] w-[100%] bg-black absolute"></div>
        <div className="h-[2px] opacity-[0.3] top-[50%] left-[9%] w-[90%] bg-black absolute"></div>
        <div className="h-[2px] opacity-[0.3] top-[35%] left-[21%] w-[65%] bg-black absolute"></div>
        
    </div>
  );
}

export default Page3;
