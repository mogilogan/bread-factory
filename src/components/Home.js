import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center  pt-10">
      <div className="flex flex-col items-center">
        {/* Adjust the margin-bottom here to reduce the gap */}
        <div className="hidden sm:block  mr-[120px]">
          <Image src={"/assests/logo.png"} width={85} height={85} alt="logo" />
        </div>
        {/* Adjust the margin-top here if needed */}
        <p className="font-blackadder text-8xl  sm:text-[150px] mt-[-20px]">
          Bread Factory
        </p>
        <p className=" font-pacifico sm:font-bold text-md sm:text-3xl">
          Where People and Flavours Meet
        </p>
      </div>

      <div className="w-full flex justify-center items-center">
        <Image
          src={"/assests/head4.gif"}
          width={600}
          className=" rounded-3xl p-4"
          height={300}
          alt="head"
        />
      </div>
    </div>
  );
};

export default Home;
