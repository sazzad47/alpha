import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import AppsMenu from "./AppsMenu";

const Hero = () => {
  return (
    <React.Fragment>
      <div className="global_hero_section">
        <div className="global_navbar">
          <div className="brand_logo">
            <Link href="/">
              <Image
                src={"/logo.png"}
                alt="logo"
                fill
              />
            </Link>
          </div>
          <div className="flex items-center z-10">
            <div className="mr-5">
              <AppsMenu />
            </div>
            <button className="ml-2 text-sm focus:outline-none border-1 rounded-2xl px-3 py-1 hover:bg-slate-600">
              Sign in
            </button>
          </div>
        </div>
        <Image src="/epsilon-bg.jpg" alt="" fill />
        <div className="absolute w-full h-full translate-y-[-100px]">
        <SearchBar />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
