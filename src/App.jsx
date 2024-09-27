// src/App.js
import React from "react";
import Documentation from "./pages/Documentation";
import "./App.css"; // Ensure your Tailwind CSS file is imported
import Sidebar from "./components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-[#E9ECDF] dark:bg-black">
      <Sidebar />
      <main className="flex-1 overflow-y-auto  h-max">
        <Documentation />
      </main>
   
    </div>
  );
}

export default App;
