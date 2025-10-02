import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm md:px-6 ">
        <div className="flex-1 ">
          <a className="md:text-xl font-bold cursor-default select-none">
            CS — Ticket System
          </a>
        </div>
        <div className="gap-6 items-center hidden md:flex">
          <button className="cursor-pointer hover:text-purple-600 transition-colors duration-300">
            Home
          </button>
          <button className="cursor-pointer hover:text-purple-600 transition-colors duration-300">
            FAQ
          </button>
          <button className="cursor-pointer hover:text-purple-600 transition-colors duration-300">
            Changelog
          </button>
          <button className="cursor-pointer hover:text-purple-600 transition-colors duration-300">
            Blog
          </button>
          <button className="cursor-pointer hover:text-purple-600 transition-colors duration-300">
            Download
          </button>
          <button className="cursor-pointer hover:text-purple-600 transition-colors duration-300">
            Contact
          </button>
        </div>
        <div>
          <button
            className="btn bg-gradient-to-r from-purple-600 to-indigo-800 text-white font-semibold ml-4
            hover:from-purple-700 hover:to-indigo-900
            transition-colors duration-300
          "
          >
            + New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
