import React from "react";
import react from "../../assets/react.svg";
import prochallenger from "../../assets/prochallenger.jpg"
import homeHero from "../../assets/homeHero.jpg"
import toy from "../../assets/hero.jpg"
import htmlLogo from "../../assets/HTML5_logo_and_wordmark.svg.png";
import css from "../../assets/css3.png"
import javascript from "../../assets/javascript.png";
import tailwind from "../../assets/tailwind.png";
import node from "../../assets/node.png";
import firebase from "../../assets/firebase.png";
import mongo from "../../assets/mongo.png";
import express from "../../assets/express.png";

const Projects = () => {
  // Image style common class
  const techIconStyle = "w-6 h-6 object-contain hover:scale-125 transition-transform duration-300";

  return (
    <section id="projects" className="py-20 bg-base-200">
      <div className="container mx-auto px-5">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold border-b-4 border-primary inline-block pb-2">
            My Projects
          </h2>
          <p className="mt-4 text-gray-500 text-lg">My Recent Works</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: ProChallenger */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden border border-white/10" data-aos="fade-up">
            <figure className="relative overflow-hidden">
              <img src={prochallenger} alt="ProChallenger" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-secondary">
                ProChallenger <div className="badge badge-accent">New</div>
              </h2>
              <p className="text-sm text-gray-600">A robust Full-Stack Web Application built with the MERN stack (React, Node.js, and MongoDB).</p>
              
              {/* Tech Icons Card 1 */}
              <div className="mt-4">
                <p className="text-xs font-bold mb-2 uppercase text-gray-400">Tech Stack:</p>
                <div className="flex flex-wrap gap-3 p-2 bg-base-200 rounded-lg">
                  <img src={react} className={techIconStyle} alt="React" title="React" />
                  <img src={tailwind} className={techIconStyle} alt="Tailwind" title="Tailwind" />
                  <img src={node} className={techIconStyle} alt="Node.js" title="Node.js" />
                  <img src={express} className={techIconStyle} alt="Express" title="Express" />
                  <img src={mongo} className={techIconStyle} alt="MongoDB" title="MongoDB" />
                  <img src={firebase} className={techIconStyle} alt="Firebase" title="Firebase" />
                </div>
              </div>

              <div className="card-actions justify-end mt-6">
                <a href="https://github.com/AhmetChatgami/proChallenger.git" target="_blank" className="btn btn-sm btn-outline hover:btn-secondary transition-colors">GitHub</a>
                <a href="https://ornate-horse-0239d6.netlify.app/" target="_blank" className="btn btn-sm btn-primary text-white">Live Demo</a>
              </div>
            </div>
          </div>

          {/* Card 2: Home Hero */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden border border-white/10" data-aos="fade-up" data-aos-delay="200">
            <figure className="relative overflow-hidden">
              <img src={homeHero} alt="Home Hero" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-secondary">Home Hero</h2>
              <p className="text-sm text-gray-600">A comprehensive Service Provider Web Application built with a focus on both Frontend and Backend.</p>
              
              {/* Tech Icons Card 2 */}
              <div className="mt-4">
                <p className="text-xs font-bold mb-2 uppercase text-gray-400">Tech Stack:</p>
                <div className="flex flex-wrap gap-3 p-2 bg-base-200 rounded-lg">
                  <img src={javascript} className={techIconStyle} alt="JS" title="JavaScript" />
                  <img src={react} className={techIconStyle} alt="React" title="React" />
                  <img src={node} className={techIconStyle} alt="Node.js" title="Node.js" />
                   <img src={express} className={techIconStyle} alt="Express" title="Express" />
                  <img src={mongo} className={techIconStyle} alt="MongoDB" title="MongoDB" />
                  <img src={firebase} className={techIconStyle} alt="Firebase" title="Firebase" />
                </div>
              </div>

              <div className="card-actions justify-end mt-6">
                <a href="https://github.com/AhmetChatgami/homeHero.git" target="_blank" className="btn btn-sm btn-outline hover:btn-secondary transition-colors">GitHub</a>
                <a href="https://voluble-narwhal-c287c9.netlify.app/" target="_blank" className="btn btn-sm btn-primary text-white">Live Demo</a>
              </div>
            </div>
          </div>

          {/* Card 3: Toy Tophia */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden border border-white/10" data-aos="fade-up" data-aos-delay="400">
            <figure className="relative overflow-hidden">
              <img src={toy} alt="Toy Tophia" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-secondary">Toy Tophia</h2>
              <p className="text-sm text-gray-600">Explore curated apps with real-time search functionality for quick discovery and ratings.</p>
              
              {/* Tech Icons Card 3 */}
              <div className="mt-4">
                <p className="text-xs font-bold mb-2 uppercase text-gray-400">Tech Stack:</p>
                <div className="flex flex-wrap gap-3 p-2 bg-base-200 rounded-lg">
                  <img src={htmlLogo} className={techIconStyle} alt="HTML" title="HTML5" />
                  <img src={css} className={techIconStyle} alt="HTML" title="CSS3" />
                  <img src={javascript} className={techIconStyle} alt="JS" title="JavaScript" />
                  <img src={react} className={techIconStyle} alt="React" title="React" />
                  <img src={tailwind} className={techIconStyle} alt="Tailwind" title="Tailwind" />
                </div>
              </div>

              <div className="card-actions justify-end mt-6">
                <a href="https://github.com/AhmetChatgami/assignment-8.git" target="_blank" className="btn btn-sm btn-outline hover:btn-secondary transition-colors">GitHub</a>
                <a href="https://zesty-hero-app-ab6a38.netlify.app/" target="_blank" className="btn btn-sm btn-primary text-white">Live Demo</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;