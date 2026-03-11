import React from "react";
import github from "../../assets/github-logo-png_seeklogo-304612.png";
import me from "../../assets/AYR.png"
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <a
            href="#home"
            className="text-xl hover:text-purple-700 font-bold flex items-center gap-2"
          >
            {" "}
            <img className="h-15 ml-4" src={me} alt="" />
            
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal gap-6">
            <li className="hover:text-purple-600 hover:underline transition-colors duration-300">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-purple-600 hover:underline transition-colors duration-300">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-purple-600 hover:underline transition-colors duration-300">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-purple-600 hover:underline transition-colors duration-300">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          {/* <a className="btn">Contribute</a> */}
          <a href="https://github.com/AhmetChatgami"
            to="https://github.com/AhmetChatgami"
            target="_blank"
            className="flex justify-center mt-4 mb-2 btn bg-radial-[at_25%_25%] from-[#632EE3] to-[#9F62F2] text-white"
          >
            {" "}
            <img className="h-6" src={github} alt="" />
            <p className="">Contribute</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
