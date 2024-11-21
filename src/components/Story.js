import Image from "next/image";
import React from "react";

const Story = () => {
  return (
    <div className=" mx-auto pt-20 w-full">
      <div className=" px-[10px] md:min-h-[600px] grid md:grid-rows-3 grid-flow-row md:grid-flow-col gap-4 pb-8 roundCurve" >
      <h1 className="text-4xl  lg:text-6xl md:col-span-2 font-frijole flex items-center justify-center">
    Our Story
  </h1>
        <div className="w-[80%] text-start font-indie   mx-auto text-[18px] md:text-[20px]   xl:text-[30px] order-last md:order-none md:row-span-2 md:col-span-2">
          <p>
            Welcome to Bread Factory, where flavors and people meet! Since June
            2016, we've been delighting customers with our premium quality
            products and a steadfast commitment to a zero-chemical policy. At
            Bread Factory, we specialize in creating customized celebration
            cakes that make every occasion unforgettable. Our expert bakers
            craft each cake to perfection, ensuring your special moments are as
            sweet as can be.
          </p>
        </div>

        <div className="mx-auto flex justify-center items-center rounded-3xl sm:min-w-[50px] md:min-w-[100px]  lg:min-w-[600px]  md:row-span-3  ">
          <Image
            src={"/assests/cake1.gif"}
            width={0}
            unoptimized
            height={0}
            className="w-[200px] md:w-[450px] rounded-3xl md:h-[550px]      rounded-4xl "
            alt=""
          />
        </div>
      </div>


      <div className=" px-[10px] md:min-h-[600px] grid md:grid-rows-3 grid-flow-row md:grid-flow-col gap-4 pb-8 roundCurve">
      <div className="mx-auto flex justify-center items-center rounded-3xl sm:min-w-[50px] md:min-w-[100px]  lg:min-w-[500px]  md:row-span-3 ">

        <Image src={"/assests/story1.gif"} unoptimized  width={0}
            height={0}
            className="w-[200px] md:w-[450px] rounded-3xl md:h-[550px]     rounded-4xl " alt="" />
      </div>
      <h1 className="text-center font-frijole  text-4xl  lg:text-6xl md:col-span-2 md:order-none order-first flex items-center justify-center">Our Exictables</h1>
      <div className="w-[80%]  mx-auto text-start  text-[18px] md:text-[20px] font-indie    xl:text-[30px] order-last md:order-none md:row-span-2 md:col-span-2">
        <p>
            Explore our exquisite varieties of plum cakes, perfect for festive
            celebrations, and indulge in our extensive range of dry cakes,
            including Banana Cake, Dates & Carrot Cake, Grapes Cake, Apple Cake,
            Rava Cake, Ghee Cake, Marble Cake, Tea Cake, Sponge Cake, Chocolate
            Lava, Brownie, and more.
          </p>
        </div>
        
      </div>




      <div className=" px-[10px] md:min-h-[600px] grid md:grid-rows-3 grid-flow-row md:grid-flow-col gap-4 pb-8 roundCurve ">
      <h1 className="text-center font-frijole text-4xl  lg:text-6xl  md:col-span-2 flex items-center justify-center">
    Our Essence
  </h1>
        <div className="w-[80%] mx-auto text-start text-[18px] md:text-[20px] font-indie   xl:text-[30px]  order-last md:order-none md:row-span-2 md:col-span-2">
          <p>
             For those seeking healthier options, we offer a selection of
            wholesome whole wheat bread that doesn't compromise on flavor. In
            addition to our cakes and cookies, we offer a wide variety of bread,
            buns, puffs, spicy rolls, and sandwiches to satisfy all your
            cravings. Visit Bread Factory today and experience a place where
            every bite is a celebration!
          </p>
        </div>

        <div className="mx-auto flex justify-center items-center  sm:min-w-[50px] md:min-w-[100px] lg:min-w-[600px]  md:row-span-3 ">
          <Image
            src={"/assests/donut.gif"}
            width={0}
            height={0}
            className="w-[200px] md:w-[100%]  md:h-[100%] rounded-[40px]"
            alt=""
            unoptimized
          />
        </div>
      </div>

      
    </div>
  );
};

export default Story;
