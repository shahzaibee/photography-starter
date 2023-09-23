import React, { useContext } from "react";

//import icons

import {
  ImFacebook,
  ImTwitter,
  ImInstagram,
  ImYoutube,
  ImPinterest,
} from "react-icons/im";

// import link
import { Link } from "react-router-dom";
//motion
import { motion } from "framer-motion";
//transtition
import { transition1 } from "../transitions";
//import Context
import { CursorContext } from "../context/CursorContext";

const Socials = () => {
  const { mousEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div
      onMouseEnter={mousEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="hidden xl:flex ml-24"
    >
      <ul className=" flex gap-x-4">
        <li>
          <a href="https://www.facebook.com" target="_blank"></a>
          <ImFacebook />
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank"></a>
          <ImTwitter />
        </li>
        <li>
          <a href="https://www.pinterest.com" target="_blank"></a>
          <ImPinterest />
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank"></a>
          <ImInstagram />
        </li>
        <li>
          <a href="https://www.youtube.com" target="_blank"></a>
          <ImYoutube />
        </li>
      </ul>
    </div>
  );
};

export default Socials;
