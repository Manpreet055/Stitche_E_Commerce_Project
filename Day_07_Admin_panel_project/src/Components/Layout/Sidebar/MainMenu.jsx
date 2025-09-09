import React, { useState,useEffect,useRef } from "react";
import Sidebar from "./Sidebar";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";

const MainMenu = () => {
  let menuRef = useRef();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  
  useEffect(() => {
    const handler = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    // Cleanup: remove listener when component unmounts or re-renders
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []); 
  return (
    <div className="">
      <div className="hidden lg:flex">
        <Sidebar></Sidebar>
      </div>
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden w-fit h-fit absolute left-2 top-4  block"
      >
        <Menu />
      </button>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
          ref={menuRef}
            initial={{ x: -320}}
            animate={{ x: 0}}
            exit={{ x: -320}}
            transition={{ duration: 0.3 }}
            className={`block sidebar fixed left-0 top-0 h-full z-50 w-fit lg:hidden`}
          >
            <Sidebar></Sidebar>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainMenu;
