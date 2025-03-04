import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = () => {
  const [val, setval] = useState(false);

  return (
    <div className="w-full h-screen bg-zinc-300 flex items-center justify-center">
      <div className="w-80 h-42 bg-amber-50 rounded-md relative overflow-hidden flex">
        <img
          className={`shrink-0 transition-transform duration-700 ease-in-out ${ val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1675880935779-8b116ef97811?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`shrink-0 transition-transform duration-700 ease-in-out ${ val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1562578488-50628ff55e0e?q=80&w=2092&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span onClick={()=>setval(()=>!val)} 
        className="p-4 rounded-full flex items-center justify-center bg-[#dadada8b] absolute bottom-0 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <FaArrowRightLong />
        </span>
      </div>
    </div>
  );
};

export default Card;
