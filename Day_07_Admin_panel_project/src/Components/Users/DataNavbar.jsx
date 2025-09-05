import Reac, { useState, useRef } from "react";
import { Search, ListFilter, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import clickEvent from "../../Utilities/Animations/onClick";
import Filters from "./Filters";

const DataNavbar = () => {
  const [filters, showFilters] = useState(false);
  const timeref = useRef(null);

  const handleHoverStart = () => {
    clearTimeout(timeref.current);
    showFilters(true);
  };

  const handleHoverEnd = () => {
    timeref.current = setTimeout(() => {
      showFilters(false);
    }, 500);
  };

  return (
    <nav className="w-full flex gap-10 py-3">
      <div className="h-full w-fit flex items-center gap-2">
        <input
          type="text"
          className="border border-gray-400 h-full rounded-3xl px-6"
          placeholder="Search Name, Email etc.."
        />
        <motion.button
          variants={clickEvent}
          initial="default"
          whileHover="hover"
          whileTap="click"
          className=" p-3 flex items-center gap-2 text-xl rounded-2xl"
        >
          <Search size={28} />
          Search
        </motion.button>
      </div>
      <div className="flex items-center relative">
        <motion.button
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          onClick={() => showFilters((prev) => !prev)}
          className="flex items-center gap-3 text-xl"
        >
          <ListFilter />
          Filters
          <div
            className={`${
              filters ? "rotate-0" : "rotate-180"
            } transition ease-in-out duration-300`}
          >
            <ChevronUp />
          </div>
        </motion.button>
        <AnimatePresence>
          {filters && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.3 }}
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
              className="min-w-2xl"
            >
              <Filters></Filters>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default DataNavbar;
