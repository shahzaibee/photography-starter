import React,{useContext} from "react";
//import components
import Socials from "./Socials";
import Logo from "../img/header/logo.svg";
import MobileNav from "./MobileNav";

// import link
import { Link } from "react-router-dom";
//motion
import { motion } from "framer-motion";
//transtition
import { transition1 } from "../transitions";
//import Context
import { CursorContext } from "../context/CursorContext";

const Header = () => {
  const { mousEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className=" fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[130px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* {logo} */}
        <Link 
        onMouseEnter={mousEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        to={"/"} className="max-w-[200px]">
          <img src={Logo} alt="" />
        </Link>
        {/* {nav-initally hidden - show on desktop} */}
        <nav 
        onMouseEnter={mousEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        
        className="hidden xl:flex gap-x-12 font-semibold">
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            About
          </Link>
          <Link
            to={"/portfolio"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Portfolio
          </Link>
          <Link
            to={"/contact"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* {Socials} */}
      <Socials />
      {/* MobileNav */}
      <MobileNav />
    </header>
  );
};

export default Header;
