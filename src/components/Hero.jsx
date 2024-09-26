import React from "react";

const Hero = () => {
  return (
    <section className=" h-max min-h-max flex items-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-4 lg:px-12">
        <img
          src="/assets/images/cookie.png"
          alt="Delicious Cookie"
          className="mx-auto w-40"
        />

        <a
          href="#"
          className="inline-flex justify-between items-center py-2 px-3 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out"
          role="alert"
        >
          <span className="text-xs bg-primary-600 rounded-full h-full  bg-gray-500 text-white px-4 py-1.5 mr-3">
            New
          </span>
          <span className="text-sm font-medium ">
            Munchies API is here! Discover delicious data
          </span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>

        <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Munchies 🍪
        </h1>

        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          🍪 Whip up some coding magic with Munchies API! 🚀 Get tasty snack
          data that’ll make your apps pop 🌟 and keep your users munching with
          joy! 😋🍕
        </p>

        <div className="flex justify-center mb-8 lg:mb-16">
          <button class="btn">
            <svg
              height="24"
              width="24"
              fill="#FFFFFF"
              viewBox="0 0 24 24"
              data-name="Layer 1"
              id="Layer_1"
              class="sparkle"
            >
              <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
            </svg>

            <span class="text">Go to Docs</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
