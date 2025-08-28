import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ChevronUp } from "lucide-react";

const Dropdown = ({ items = [], buttonName = "Menu", buttonIcon = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="w-full h-full">
      <button className="flex pr-8 justify-between items-center w-full gap-2" onClick={() => setIsOpen((prev) => !prev)}>
      <div className="flex gap-2 items-center">
          {buttonIcon}
        {buttonName}
      </div>
        <div
          className={`${
            isOpen ? "rotate-0" : "rotate-180"
          } transition-all duration-400 will-change-transform ease-in-out`}
        >
          <ChevronUp />
        </div>
      </button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="origin-top overflow-hidden p-4 transition-all duration-300 ease-in-out will-change-transform flex flex-col justify-evenly h-auto text-xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100%", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <ul>
              {items.map((obj, index) => (
                <li className="" key={index}>
                  <NavLink
                    to={obj.route}
                    className="w-full flex sidebar-links"
                  >
                    {obj.icon}
                    {obj.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Dropdown;
