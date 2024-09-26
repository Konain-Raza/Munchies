import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode) {
      const isDarkMode = JSON.parse(storedMode);
      setDarkMode(isDarkMode);
      document.documentElement.classList.toggle("dark", isDarkMode);
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="flex items-center my-4">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" checked={darkMode} onChange={handleToggle} className="sr-only" />
        <div className="w-11 h-6 bg-gray-200 rounded-full shadow-inner transition duration-200 ease-in-out"></div>
        <div className={`absolute w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ease-in-out ${darkMode ? "transform translate-x-5" : "translate-x-0"}`}></div>
      </label>
      <span className="ml-3 text-gray-700 dark:text-gray-300">{darkMode ? "🌙 Dark Mode" : "🌞 Light Mode"}</span>
    </div>
  );
};

export default DarkModeToggle;
