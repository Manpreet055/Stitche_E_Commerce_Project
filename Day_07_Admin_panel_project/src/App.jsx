import { useState } from "react";
import "./index.css";
import SideBar from "./Components/sidebar";
import Form from "./Components/Form/Form";
function App() {
  return (
    <div>
      <div className="flex w-full ">
        <SideBar />
        <Form></Form>
      </div>
    </div>
  );
}

export default App;
