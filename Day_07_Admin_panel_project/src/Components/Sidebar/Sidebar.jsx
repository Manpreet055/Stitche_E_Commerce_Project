import React from "react";
import { NavLink } from "react-router-dom";
import ProductDropdown from "./ProductDropdown";
import {
  House,
  User,
  Truck,
  Cog,
  Users,
  Power,
  UserPen,
  Mail,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div
      className={`sidebar flex z-50 bg-[#f0f0f0] flex-col justify-between h-screen w-72 md:w-80 top-0 left-0 fixed border border-neutral-300`}
    >
      <div>
        <div className="flex py-6 px-4 items-center gap-3 text-3xl font-medium">
          <span className="p-3 bg-gray-300 rounded-full">
            <User size={28} />
          </span>
          Admin
        </div>
        <ul className="flex flex-col gap-2 text-xl font-medium px-4 ">
          <li>
            <NavLink
              className={({ isActive }) => {
                return ` w-full flex sidebar-links   ${
                  isActive ? "bg-gray-300" : ""
                }`;
              }}
              to="/"
            >
              <House />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => {
                return ` w-full flex sidebar-links   ${
                  isActive ? "bg-gray-300" : ""
                }`;
              }}
              to="/inbox"
            >
              <Mail />
              Inbox
            </NavLink>
          </li>

          <li>
            <ProductDropdown />
          </li>

          <li>
            <NavLink
              className={({ isActive }) => {
                return ` w-full flex sidebar-links   ${
                  isActive ? "bg-gray-300" : ""
                }`;
              }}
              to="/orders"
            >
              <Truck />
              Orders
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => {
                return ` w-full flex sidebar-links   ${
                  isActive ? "bg-gray-300" : ""
                }`;
              }}
              to="/customers"
            >
              <Users />
              Users
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => {
                return ` w-full flex sidebar-links   ${
                  isActive ? "bg-gray-300" : ""
                }`;
              }}
              to="/settings"
            >
              <Cog />
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
      <ul className="flex mb-6 flex-col gap-2 text-xl font-medium px-4 ">
        <li>
          <NavLink
            className={({ isActive }) => {
              return ` w-full flex sidebar-links   ${
                isActive ? "bg-gray-300" : ""
              }`;
            }}
            to="/settings"
          >
            <UserPen />
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return ` w-full flex sidebar-links   ${
                isActive ? "bg-gray-300" : ""
              }`;
            }}
            to="/settings"
          >
            <Power />
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
