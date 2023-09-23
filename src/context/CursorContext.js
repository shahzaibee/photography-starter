import React, { useState, useEffect, useContext, createContext } from "react";

//CREATE CONTENT

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  //cursor pointer

  const [cursorPOs, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  //cursor bg state
  const [cursorBG, setCursorBG] = useState("default");

  const mobileViewportIsActive = window.innerWidth < 768;

  useEffect(() => {
    if (!mobileViewportIsActive) {
      const move = (e) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", move);

      return () => {
        window.removeEventListener("mousemove", move);
      };
    } else {
      setCursorBG("none");
    }
  });

  //cursor variants

  const cursorVariants = {
    default: {
      x: cursorPOs.x - 16,
      y: cursorPOs.y - 16,
      backgroundColor: "#0e1112",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPOs.x - 72,
      y: cursorPOs.y - 72,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: "rgba(255,255,255,1)",
    },
  };

  // mouse enter handler

  const mousEnterHandler = () => {
    setCursorBG("text");
  };

  // mouse LeaveHandler handler

  const mouseLeaveHandler = () => {
    setCursorBG("default");
  };

  return (
    <CursorContext.Provider
      value={{ cursorVariants, cursorBG, mousEnterHandler, mouseLeaveHandler }}
    >
      {children}
    </CursorContext.Provider>
  );
};
export default CursorProvider;
