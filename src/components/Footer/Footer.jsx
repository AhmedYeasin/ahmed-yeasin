import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-neutral text-neutral-content pt-16 pb-8">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10 text-center md:text-left">
          
          {/* Column 1: Brand Info */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary">Portfolio.</span>
            </h2>
            <p className="text-gray-400">
              "I am a passionate React Developer who loves bringing new ideas to life."
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-primary transition-all duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-all duration-300">About Me</a></li>
              <li><a href="#projects" className="hover:text-primary transition-all duration-300">My Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition-all duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Social Connect */}
          <div data-aos="fade-left">
            <h3 className="text-xl font-bold mb-4 text-white">Let's Connect</h3>
            <div className="flex justify-center md:justify-start gap-4 text-2xl">
              <a href="https://github.com/" className="p-2 bg-gray-700 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/" className="p-2 bg-gray-700 rounded-full hover:bg-secondary hover:scale-110 transition-all duration-300">
                <FaLinkedin />
              </a>
              <a href="https://x.com/" className="p-2 bg-gray-700 rounded-full hover:bg-gray-500 hover:scale-110 transition-all duration-300">
                <FaXTwitter />
              </a>
              <a href="https://www.instagram.com/ahmet.yeasin.ramazan/?hl=en" className="p-2 bg-gray-700 rounded-full hover:bg-secondary hover:scale-110 transition-all duration-300">
               <FaInstagram />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400 italic">"Code never lies, comments sometimes do."</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} <span className="text-primary font-semibold">Ahmed Yeasin Ramadan</span>. All rights reserved.
          </p>

          {/* Interactive Back to Top Button */}
          <button 
            onClick={scrollToTop} 
            className="btn btn-primary btn-circle animate-bounce shadow-lg"
            title="Go to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;