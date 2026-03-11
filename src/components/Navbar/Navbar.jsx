import React from "react";
import github from "../../assets/github-logo-png_seeklogo-304612.png";
import me from "../../assets/AYR.png";

const Navbar = () => {
  return (
    // 'sticky top-0' ebong 'z-50' ekhanei thakte hobe
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-base-100/60 backdrop-blur-md shadow-sm">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <a href="#home" className="hidden md:flex items-center gap-2">
            <img className="h-10 w-auto" src={me} alt="Logo" />
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 px-1 font-medium">
             <li><a href="#home" className="hover:text-purple-600">Home</a></li>
             <li><a href="#about" className="hover:text-purple-600">About</a></li>
             <li><a href="#projects" className="hover:text-purple-600">Projects</a></li>
             <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
          </ul>
        </div>

        <div className="navbar-end">
          <a 
            href="https://github.com/AhmedYeasin"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm md:btn-md bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-none text-white"
          >
            <img className="h-5 mr-2" src={github} alt="GitHub" />
            <span className="hidden sm:inline">Contribute</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;