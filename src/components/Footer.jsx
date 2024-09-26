import React from "react";

const Footer = () => {
  return (
    <footer className=" text-black dark:text-white  py-4 text-center h-[10%]">
      <div className="flex justify-center items-center">
        <span className="mr-2 text-xl font-bold">
          Made with
          <span
            role="img"
            aria-label="heart"
            className="text-red-500 animate-bounce"
          >
            ❤️
          </span>
        </span>
        <span className="text-xl font-bold">
          by{" "}
          <a
            href="https://www.linkedin.com/in/konain-raza-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 font-bold hover:underline text-xl transition duration-300 transform hover:scale-105"
          >
            Konain Raza
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;