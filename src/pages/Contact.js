import React, { useContext } from "react";

//import images
import WomanImage from "../img/contact/woman.png";

//import Link
import { Link } from "react-router-dom";
//motion
import { motion } from "framer-motion";
//transtition
import { transition1 } from "../transitions";
//import Context
import { CursorContext } from "../context/CursorContext";

const Contact = () => {
  const { mousEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-80%" }}
      transition={transition1}
      className="section bg-white"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
          {/* bg */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 right-0 left-0 top-72 -z-10"
          >
            {" "}
          </motion.div>
          {/* text & form */}
          <div
            onMouseEnter={mousEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="lg:flex-1 lg:pt-44 px-4"
          >
            <h1 className="h1">Contact me</h1>
            <p className="mb-12"> I would love to get suggestions from you.</p>

            {/* form */}
            <form className="flex flex-col gap-x-10">
              <div className="flex gap-x-10">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                />
                <input
                  type="text"
                  placeholder="Your email address"
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                />
              </div>
              <input
                type="text"
                placeholder="Your message"
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
              />
              <div className="py-2">
                <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                  Send it
                </button>
              </div>
            </form>
          </div>
          {/* image */}

          <motion.div
            onMouseEnter={mousEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={{ transition: transition1, duration: 2.5 }}
            className="lg:flex-1 lg:mt-48"
          >
            <img src={WomanImage} alt="" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
