// src/App.js
import React from "react";
import Documentation from "./pages/Documentation";
import "./App.css"; // Ensure your Tailwind CSS file is imported
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto  h-max">
        <Documentation />
      </main>
    </div>
  );
}

export default App;
