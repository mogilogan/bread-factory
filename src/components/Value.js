import Image from "next/image";
import React from "react";

const Value = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center h-[400px] gap-[10%] my-10">
  {[
    { text: "No Chemical Policy", src: "assests/svg/no-chemical.svg" },
    { text: "Customizable Cakes", src: "assests/svg/cake.svg" },
    { text: "More Flavours", src: "assests/svg/bread.svg" },
  ].map((item, index) => (
    <div
      key={index}
      className="flex flex-row border-2 border-black px-8 py-2 rounded-xl items-center justify-between w-[300px] h-[120px]"
    >
      <p className="flex justify-center items-center px-4">{item.text}</p>
      <Image src={item.src} width={70} height={70} alt="icon" />
    </div>
  ))}
</div>


      <div className="z-2">
      <div className="marqueeContainer ">
      <div className="marqueeContent">
         <Content/>
          </div>
        </div>
       
      </div>
    </div>
  );
};



const Content = ()=>{
    return(
        <> <p className="font-blackadder text-[80px] text-[#e690da]">Bread Factory</p> 
        <Image src={"/assests/svg/marquee/bread.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/cake.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/cookie.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/cupcake.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/donut.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/icecream.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/muffin.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/sand.svg"} alt="icons" width={80} height={80} />
        <p className="font-blackadder text-[90px] text-[#8fd4e1]">Bread Factory</p> 
        <Image src={"/assests/svg/marquee/bread.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/cake.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/cookie.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/cupcake.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/donut.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/icecream.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/muffin.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/sand.svg"} alt="icons" width={80} height={80} />
        <p className="font-blackadder text-[90px] text-[#8be46b]">Bread Factory</p> 
        <Image src={"/assests/svg/marquee/bread.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/cake.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/cookie.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/cupcake.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/donut.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/icecream.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/muffin.svg"} alt="icons" width={80} height={80} />
        <Image src={"/assests/svg/marquee/sand.svg"} alt="icons" width={80} height={80} /></>
    );
}

export default Value;
