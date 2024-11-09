"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";





const Nav = () => {
  const [navColor, setNavColor] = useState("transparent");


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

const handleScroll = () => {
  if(window.scrollY>200){
    setNavColor("#f15f15");
    } else {
      setNavColor("#ffffff");
     }
  }
  

  return (
    <div className="sticky top-0  " id="mynav" style={{backgroundColor: navColor}}> 
       <Image src={"/assests/logo.png"} alt="Logo" width={60} height={60} className=" block md:hidden mx-auto" />
    <div    className="panel-footer  flex flex-nowrap items-center ">
      <Image src={"/assests/logo.png"} alt="Logo" width={60} height={60} className=" hidden md:block" />

      <div className="flex-grow text-center">
        <div className="flex flex-row gap-8 justify-center font-mono md:text-xl">
          <Link href="/"><p className="hover-underline-animation left">Home</p></Link>
          <Link href="/location"><p className="hover-underline-animation center">Location</p></Link>
          <Link href="/contact"><p className="hover-underline-animation right">Contact Us</p></Link>
        </div>
      </div>

      
    </div>
   
    </div>
  );
};

export default Nav;
