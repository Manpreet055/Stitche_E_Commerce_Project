import "./index.css";
import SideBar from "./Components/sidebar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <div className="flex w-full ">
        <SideBar />
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
