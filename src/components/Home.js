import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="w-full flex  flex-col  pt-10 bg-[]">
      <div className="flex flex-col  flex-1  ">
        {/* Adjust the margin-bottom here to reduce the gap */}
        <div className="hidden sm:block  mx-auto pr-[140px]">
          <Image src={"/assests/logo.png"} width={85} height={85} alt="logo" />
        </div>
        {/* Adjust the margin-top here if needed */}
        <p className="font-blackadder text-8xl  sm:text-[150px] mt-[-20px] text-center ">
          Bread Factory
        </p>
        <p className=" font-pacifico sm:font-bold text-md sm:text-3xl text-center text-[#433636]">
          Where Flavours and People Meet
        </p>
      </div>

    <div>
    <Image  src={"/assests/home.jpg"} unoptimized className="w-[75%] h-[75%] mx-auto my-8 rounded-3xl" width={0} height={0} alt="logo" />
    </div>
    </div>
  );
};

export default Home;
