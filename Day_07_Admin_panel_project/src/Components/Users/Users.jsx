import React, { useState } from "react";
import UsersData from "./UsersData";
import {container} from "../../Utilities/Animations/ListStagger"
import {motion} from "framer-motion";
import UserRow from "./UserRow";
import DataNavbar from "./DataNavbar";

const Users = () => {
  return <section className="w-full p-4 h-screen overflow-y-auto scrollbar-hidden flex flex-col gap-4">
    <h2 className="text-4xl font-semibold">Users</h2>
    <DataNavbar />
    
    <div className="blur-bg px-3 w-full min-w-[900px]">
        <ul className="h-[60px] grid grid-cols-[60px_1fr_2fr_80px_160px_50px_240px] place-items-center text-xl font-medium border-b  border-gray-400 ">
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
      className="px-6 flex flex-col"
      >
        {
          UsersData.map((user,index)=>(
            <UserRow serial={index + 1 } phone={user.phone} joindate={user.dateJoined} isVerified={user.verified} city={user.address.city} country={user.address.country} userID={user.id} name={user.Username} email={user.email} status={user.status} role={user.role} lastLogin={user.lastLogin} orders={user.orders}/>
          ))
        }
      </motion.ul>
    </div>

    
    </section>;
};

export default Users;