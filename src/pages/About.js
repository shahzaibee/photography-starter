import React, { useContext } from "react";

//images

import WomanImg from "../img/about/woman.png";

//import links
import { Link } from "react-router-dom";
//motion

import { motion } from "framer-motion";
//transtition
import { transition1 } from "../transitions";
//import cursor context
import { CursorContext } from "../context/CursorContext";

const About = () => {
  const { mousEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div
        onMouseEnter={mousEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="container mx-auto h-full relative"
      >
        {/* text & img wrapper */}
        <div className=" flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={WomanImg} alt="" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pb-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="text-5xl font-bold font-primary">About me</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and <b>publishing industries for previewing layouts </b>and
              visual mockups,
              <br />
              <br />
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
              </p>
            </p>

            <Link to={"/portfolio"} className="btn">
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
