import React from "react";
import { Stack } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../../public/logo.png'
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      p={2}
      className="navbar_beta"
    >
      <Link href="/"><div className="nav_logo_beta"><Image style={{maxHeight:'100%', maxWidth:'100%'}} src={logo} alt="" /></div></Link>
       <SearchBar/>
    </Stack>
  );
};

export default Navbar;
