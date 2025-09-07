import "./index.css";
import MainMenu from "./Components/Sidebar/MainMenu";
import { Outlet } from "react-router-dom";
import { Navbar } from "flowbite-react";
import SearchContextProvider from "./Context/SearchContextProvider";
function App() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div className="flex w-full ">
        <MainMenu />
        <SearchContextProvider>
          <main
            className={`scrollbar-hidden w-full mt-10 lg:mt-0 lg:ml-80 px-2 lg:pl-5`}
          >
            <Outlet></Outlet>
          </main>
        </SearchContextProvider>
      </div>
    </div>
  );
}

export default App;
