import "./index.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
function App() {

  return (
    <div>
      <div className="flex w-full ">
        <Sidebar></Sidebar>
        <main className={`w-full mt-12 lg:mt-0 lg:ml-80 pl-5`}>
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
}

export default App;
