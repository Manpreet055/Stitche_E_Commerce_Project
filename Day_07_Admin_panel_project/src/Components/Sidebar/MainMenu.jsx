import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";

const MainMenu = () => {
  // const closeMenu = (event) => {
  //   event.stopPropagation();
  //   if (event.target.classList.contains("sidebar")) return;
  //   setSidebarOpen(false);
  // };
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <div className="hidden lg:flex">
        <Sidebar></Sidebar>
      </div>
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden absolute left-2 top-4  block"
      >
        <Menu />
      </button>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            drag="x"
            dragConstraints={{ left: -320, right: 0, top: 0, bottom: 0 }}
            onDragEnd={(event, info) => {
              if (info.offset.x < -100) setSidebarOpen(false);
            }}
            // onClick={(e) => closeMenu(e)}
            className={`block fixed left-0 top-0 h-full w-full lg:hidden`}
          >
            <Sidebar></Sidebar>\
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainMenu;
