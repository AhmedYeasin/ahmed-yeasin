import React from 'react';
import profile from '../../assets/ahmed.jpeg.jpg';
import cvFile from '../../../public/Resume Template.pdf'; 
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 py-16 px-4 overflow-x-hidden" id="home">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* টেক্সট সেকশন */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left w-full lg:w-1/2 space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Hello, this is <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Ahmed Yeasin Ramadan
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-base-content/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              A passionate <span className="font-bold text-primary">Web Developer</span> specializing in building high-performance, beautiful, and interactive user interfaces for the modern web.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="btn btn-primary px-8 btn-lg hover:scale-105 transition-transform">
                My Projects
              </a>
              <a 
                href={cvFile} 
                download="Ahmed_Yeasin_CV.pdf" 
                className="btn btn-outline btn-secondary px-8 btn-lg hover:scale-105 transition-transform"
              >
                <FaDownload/> Download CV
              </a>
            </div>
          </motion.div>
          
          {/* ইমেজ সেকশন */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <img 
              src={profile} 
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-2xl border-4 border-base-100 object-cover" 
              alt="Ahmed Yeasin Ramadan"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Home;