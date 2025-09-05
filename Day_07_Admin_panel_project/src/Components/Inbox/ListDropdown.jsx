import React, { useState } from "react";
import { ChevronUp } from "lucide-react";

const ListDropdown = () => {
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  return (
    <div className="">
      <button className="flex gap-4 items-center form-input-sections text-neutral-400" onClick={() => setDropDownOpen((prev) => !prev)}>Select <div className={`${isDropDownOpen ? "rotate-0" : "rotate-180"} transition duration-300 ease-in-out`}><ChevronUp/></div></button>
    </div>
  );
};

export default ListDropdown;
