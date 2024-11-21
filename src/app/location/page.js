import Image from "next/image";
import React from "react";

const Location = () => {
  return (
    <div className="h-[90vh] flex flex-col">
      <div>
        <h1 className="text-center md:text-2xl">
          Click Anywhere to take to location{" "}
        </h1>
      </div>
      <a href="https://maps.app.goo.gl/PFHt3rXaH7k7LeLr7" target="_blank"><div className="rounded-3xl overflow-hidden translate-x-0 w-[80%] mx-auto">
        <video
          className="max-h-[700px] w-full rounded-3xl overflow-hidden"
          loop
          preload="none"
          muted
          autoPlay
        >
          <source src={"/assests/video/rotate Bread.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      </a>
      <div className="flex flex-col items-center justify-center lg:text-3xl  w-[80%] mx-auto my-10">
       
          <h1>Rs.No. 160/25, 160/26, Gundusalai, salai St.,</h1>
          <h1>Moolakulam Oulgaret, Puducherry-605010.</h1>
          <div className="flex flex-row">
            <Image alt="logo-whats3words" src={"/assests/what3words.png"} width={30} height={30} />
            <p>navy.zeal.relations</p>
        
        </div>
      </div>
    </div>
  );
};

export default Location;
