import { useContext, useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import { SlTag } from "react-icons/sl";

import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "./utils/ContextApi";
import { menu } from "./utils/Constants";
import SearchBar from "./SearchBar";
import Link from "next/link";
import Image from "next/image";
import AppsMenu from "./AppsMenu";

const SearchResultHeader = () => {
    const [selectedMenu, setSelectedMenu] = useState("All");
    const { setImageSearch } = useContext(Context);

    useEffect(() => {
        return () => setImageSearch(false);
    }, []);

    const clickHandler = (menuItem) => {
        let isTypeImage = menuItem.name === "Images";
        setImageSearch(isTypeImage ? true : false);
        setSelectedMenu(menuItem.name);
    };

    return (
        <div className="fixed bg-stone-400 px-5 w-full h-[5rem] flex items-center justify-between">
            <div className="brand_logo">
            <Link href="/">
              <Image
                src={"/logo.png"}
                alt="logo"
                fill
              />
            </Link>
          </div>
            <SearchBar/>
            <div className="flex items-center z-10">
            <div className="mr-5 text-black">
                <AppsMenu />
            </div>
            <button className="w-[5rem] ml-2 text-sm focus:outline-none border-1 rounded-2xl px-3 py-1 hover:bg-slate-600">
                Sign in
            </button>
            </div>
        </div>
    );
};

export default SearchResultHeader;
