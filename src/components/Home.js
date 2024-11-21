import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row   pt-10 bg-[]">
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
          Where People and Flavours Meet
        </p>
      </div>

      <div className=" flex justify-center mx-auto items-center flex-1 ">
        <Image
        unoptimized
          src={"/assests/head4.gif"}
          width={0}
          className="w-full lg:w-[700px] h-full rounded-3xl p-4"
          height={300}
          alt="head"
        />
      </div>
    </div>
  );
};

export default Home;
