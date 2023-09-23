import React, { useContext } from "react";
//import images
import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";
//import Link
import { Link } from "react-router-dom";
//motion
import { motion } from "framer-motion";
//transtition
import { transition1 } from "../transitions";
//import Context
import { CursorContext } from "../context/CursorContext";

const Portfolio = () => {
  const { mousEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-80%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/* text */}
          <motion.div
            onMouseEnter={mousEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start gap-y-4"
          >
            <h1 className="text-5xl font-bold font-primary">Portfolio</h1>
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
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me
            </Link>
          </motion.div>
          {/* Image grid*/}
          <div
            onMouseEnter={mousEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="grid grid-cols-2 lg:gap-2"
          >
            {/* Image */}
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                src={Image1}
                alt=""
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                src={Image2}
                alt=""
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                src={Image3}
                alt=""
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                src={Image4}
                alt=""
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
