import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { CiMenuFries } from "react-icons/ci";

import "./App.css";
import HomePage from "./components/Home";
import SideBar from "./components/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen ">
      <SideBar/>

      <main className="flex-1 p-4 overflow-y-auto">
        <HomePage />
      </main>
    </div>
  );
}

export default App;
