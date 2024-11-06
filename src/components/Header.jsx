import React from "react";

function Header() {
  return (
    <div className="fixed top-16 z-10 right-5 flex items-center">
      <button className="py-2 text-white px-10 border-solid shadow-[0px_0px_3px_4px_#00000024] border-4 border-white bg-black rounded-[23px]">
        Hire Me
      </button>
      <img
        id="menu"
        className="h-7 w-7 opacity-[0.1] ml-3 cursor-pointer"
        src="https://img.icons8.com/?size=50&id=78292&format=png"
      />
    </div>
  );
}

export default Header;
