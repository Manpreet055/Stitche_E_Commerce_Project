import "./index.css";
import MainMenu from "./Components/Layout/Sidebar/MainMenu";
import { Outlet } from "react-router-dom";
import SearchContextProvider from "./Context/searches/SearchContextProvider";
import SearchValueContextProvider from "./Context/SearchValueContextProvider";
function App() {
  return (
    <div>
      <div className="flex w-full ">
        <MainMenu />
        <SearchContextProvider>
          <SearchValueContextProvider>
            <main
              className={`scrollbar-hidden w-full mt-10 lg:mt-0 lg:ml-80 px-2 lg:pl-5`}
            >
              <Outlet></Outlet>
            </main>
          </SearchValueContextProvider>
        </SearchContextProvider>
      </div>
    </div>
  );
}

export default App;
