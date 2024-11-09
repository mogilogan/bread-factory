import React from "react";

const Location = () => {
  return (
    <div>
   <div><h1 className="text-center md:text-2xl">Click Anywhere to take to location</h1></div>
<div className="rounded-3xl overflow-hidden translate-x-0 w-[80%] mx-auto">
      <video className="max-h-[700px] w-full rounded-3xl" loop preload="none" muted autoPlay>
      <source src={"/assests/video/rotate\ Bread.mp4"} type="video/mp4" />
      
      Your browser does not support the video tag.
    </video>
    </div>
    </div>
  );
};

export default Location;
