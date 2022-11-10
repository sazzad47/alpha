import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import { IoAppsSharp } from "react-icons/io5";


const Hero: React.FC = () => {
  return (
    <React.Fragment>

      <div className="global_hero_section">
        <div className="global_navbar">
          <div className="brand_logo"><Link href="/"><Image src={'/logo.png'} alt="logo" layout="fill" objectFit="contain" /></Link></div>
           <div className="flex items-center z-10">
              <IoAppsSharp className="text-2xl mr-5"/>
               <button className="ml-2 text-sm border-1 rounded-2xl px-3 py-1 hover:bg-slate-600">Sign in</button>
           </div>
        </div>
        <video src={"/bg-hero.mp4"} autoPlay loop muted/>
        <SearchBar />
      </div>
    </React.Fragment>
  );
};

export default Hero;
