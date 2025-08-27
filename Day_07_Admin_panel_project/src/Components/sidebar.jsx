import React from "react";
import { NavLink } from "react-router-dom";
import {
  House,
  User,
  ShoppingBag,
  Truck,
  Cog,
  ChartLine,
  ChartBarStacked,
  Users,
  Power,
  UserPen,
} from "lucide-react";

const sidebar = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-80 top-0 left-0 fixed border border-black">
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
              to="/products"
            >
              <ShoppingBag />
              Products
            </NavLink>
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
              Customers
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => {
                return ` w-full flex sidebar-links   ${
                  isActive ? "bg-gray-300" : ""
                }`;
              }}
              to="/categories"
            >
              <ChartBarStacked />
              Categories
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => {
                return ` w-full flex sidebar-links   ${
                  isActive ? "bg-gray-300" : ""
                }`;
              }}
              to="/analytics"
            >
              <ChartLine />
              Analytics
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
            <UserPen/>
            Profile</NavLink>
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

export default sidebar;
