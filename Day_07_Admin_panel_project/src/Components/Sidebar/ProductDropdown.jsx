import React from "react";
import Dropdown from "./Dropdown";
import { ShoppingBag, ChartBarStacked, Grid, PackagePlus } from "lucide-react";
import { NavLink } from "react-router-dom";

const ProductDropdown = () => {
  let dropDownArray = [
    {
      name: "All Products",
      route: "/products",
      icon: <Grid />,
    },
    {
      name: "Add Product",
      route: "products/add",
      icon: <PackagePlus />,
    },
    {
      name: "Categories",
      route: "products/categories",
      icon: <ChartBarStacked />,
    },
  ];
  return (
    <div className="w-full sidebar-links">
      <Dropdown buttonName="Products" buttonIcon={<ShoppingBag />}>
        <NavLink to="products" className={({ isActive }) => {
                        return `w-full flex sidebar-links    ${
                          isActive ? "text-blue-500" : ""
                        }`;
                      }}>
          {<Grid />}All Products{" "}
        </NavLink>
        <NavLink to="product/add" className={({ isActive }) => {
                return `w-full flex sidebar-links    ${
                  isActive ? "text-blue-500" : ""
                }`;
              }}>
          {<PackagePlus />}Add Product
        </NavLink>
        <NavLink to="products/categories" className={({ isActive }) => {
                return `w-full flex sidebar-links    ${
                  isActive ? "text-blue-500" : ""
                }`;
              }}>
          {<ChartBarStacked />}Categories
        </NavLink>
      </Dropdown>
    </div>
  );
};

export default ProductDropdown;
