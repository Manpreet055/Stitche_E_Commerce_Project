import React, { useContext, useEffect, useState } from "react";
import UsersData from "./UsersData";
import { container } from "../../../Utilities/Animations/ListStagger";
import { AnimatePresence, motion } from "framer-motion";
import UserRow from "../../../ui/UserRow";
import SearchNavbar from "../../Navbar/SearchNavbar";
import SearchContext from "../../../Context/searches/SeachContext";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import clickEvent from "../../../Utilities/Animations/onClick";
import SearchValueContext from "../../../Context/searches/SearchValueContext";

const Users = () => {

  const { searchItems, setSearchItems } = useContext(SearchContext);
  const {setSearchValue} = useContext(SearchValueContext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/users");
    setSearchItems(null);
    setSearchValue(true)
  };
  const dataProviderArray = searchItems ?? UsersData;

  return (
    <section className="w-full p-4 h-screen overflow-y-auto scrollbar-hidden flex flex-col gap-4">
      <h2 className="text-4xl font-semibold">Users</h2>
      <SearchNavbar />
      <AnimatePresence>
        {searchItems !== null && (
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="blur-bg text-start w-full text-lg items-center   px-3 py-2 flex "
          >
            <motion.button
              variants={clickEvent}
              initial="default"
              whileHover="hover"
              whileTap="click"
              onClick={goBack}
              className="flex justify-self-start items-center"
            >
              <ChevronLeft></ChevronLeft>
              Back
            </motion.button>
            {typeof searchItems !== "string" && (
              <div className="w-full flex text-xl justify-center">{`Found ${searchItems.length} Results`}</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="blur-bg px-3 w-full min-w-[900px]">
        <ul className={`h-[60px] grid grid-cols-[60px_1fr_2fr_80px_160px_50px_240px] place-items-center text-xl font-medium border-b  border-gray-400`}>
          <li>Sr No.</li>
          <li>User</li>
          <li>Email</li>
          <li>Status</li>
          <li>Role</li>
          <li>Orders</li>
          <li>Last login</li>
        </ul>
        <motion.ul
          initial="hidden"
          animate="show"
          variants={container}
          className="px-6 relative flex flex-col"
        >
          {typeof searchItems === "string" ? (
            <div className="top-[50%] flex flex-col w-full h-[660px] text-2xl font-medium justify-center items-center">{searchItems}</div>
          ) : (
            dataProviderArray.map((user, index) => (
              <UserRow serial={index + 1} key={user.id} user={user} />
            ))
          )}
        </motion.ul>
      </div>
    </section>
  );
};

export default Users;
