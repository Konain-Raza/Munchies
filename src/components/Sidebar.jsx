import React, { useEffect, useState } from "react";
import DarkMode from "./DarkMode"

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const sections = [
    { title: "📖 Get Started", href: "#get-started", isSubSection: false },
    { title: "⚙️ API Endpoints", href: "#api-endpoints", isSubSection: false },
    {
      title: "🍔 Get All Munchies",
      href: "#get-all-munchies",
      isSubSection: true,
    },
    {
      title: "🍽️ Get Munchies by Category",
      href: "#get-munchies-by-category",
      isSubSection: true,
    },
    {
      title: "📂 Get Munchies Categories",
      href: "#get-munchies-categories",
      isSubSection: true,
    },
    { title: "🍕 Add a Munchie", href: "#add-munchie", isSubSection: true },
    { title: "🔗 Resources", href: "#resources", isSubSection: false },
  ];

  return (
    <>
      <aside className={`md:relative w-full md:w-1/4 text-white min-h-ma p-5 transition duration-500 ease-in-out`}>
        <div className="flex flex-row justify-between">
          <h2 className="text-3xl sm:text-4xl my-3 dark:text-white text-black font-extrabold tracking-wide flex items-center">
            Munchies 🍪
          </h2>
          <button
            className="md:hidden p-2 text-black dark:text-white bg-black"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "✖️" : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
        <DarkMode />
        <ul className={`space-y-4 ${isSidebarOpen ? "block w-full" : "hidden md:block"}`}>
          {sections.map((section, index) => (
            <li key={index}>
              <a
                href={section.href}
                onClick={() => setSelectedSection(section.title)}
                className={`block py-3 px-4 text-lg rounded-lg ${
                  section.title === selectedSection
                    ? "bg-gray-300 text-black dark:bg-gray-900 dark:text-white"
                    : section.isSubSection
                    ? "text-black dark:text-white text-lg hover:bg-gray-300 ml-4"
                    : "text-black font-bold text-xl dark:text-white"
                } transition-colors duration-300 ease-in-out`}
              >
                {section.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#demo" // Link to the demo section
              onClick={() => setSelectedSection("API Experiment Station 🔬✨")}
              className={`block py-3 px-4 text-lg rounded-lg ${
                "API Experiment Station 🔬✨" === selectedSection
                  ? "bg-gray-300 text-black dark:bg-gray-900 dark:text-white"
                  : "text-black dark:text-white text-lg hover:bg-gray-300 ml-4"
              } transition-colors duration-300 ease-in-out`}
            >
              API Playground 🔬✨
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
