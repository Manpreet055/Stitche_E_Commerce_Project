import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Layout/Dashboard/Dashboard";
import Products from "./Components/Layout/Products/Products";
import Settings from "./Components/Layout/Settings/Settings";
import Users  from "./Components/Layout/Users/Users";
import Inbox from "./Components/Layout/Inbox/Inbox";
import AddProduct from "./Components/Layout/AddProduct/AddProduct";
let route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/add",
        element: <AddProduct />,
      },
      {
        path:"settings",
        element:<Settings/>
      },
      {
        path:"users",
        element:<Users />
      },
      {
        path:"inbox",
        element:<Inbox />
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
