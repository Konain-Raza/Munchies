import React, { useEffect, useState } from "react";
import DarkMode from "./DarkMode";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null); // State for the selected section

  const sections = [
    { title: "📖 Get Started", href: "#get-started", isSubSection: false },
    // { title: "🆕 What's New", href: "#whats-new", isSubSection: false },
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
      {/* Sidebar */}
      <aside
        className={`md:relative w-full md:w-1/4 text-white min-h-ma p-5 transition duration-500 ease-in-out`}
      >
        {/* Header with an icon */}
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

        <ul
          className={`space-y-4 ${isSidebarOpen ? "block w-full" : "hidden md:block"}`}
        >
          {sections.map((section, index) => (
            <li key={index}>
              <a
                href={section.href}
                onClick={() => setSelectedSection(section.title)} // Update the selected section on click
                className={`block py-3 px-4 text-lg rounded-lg ${
                  section.title === selectedSection // Check whiteif the section is selected
                    ? "bg-gray-300 text-black dark:bg-gray-900 dark:text-white" // Change the background color for selected
                    : section.isSubSection
                    ? "text-black dark:text-white text-lg hover:bg-gray-300 ml-4"
                    : " text-black font-bold text-xl dark:text-white"
                }  transition-colors duration-300 ease-in-out`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
