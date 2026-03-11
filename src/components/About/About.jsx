import React from "react";
// ইমপোর্টগুলো চেক করে নিও
import reactImg from "../../assets/react.svg";
import htmlLogo from "../../assets/HTML5_logo_and_wordmark.svg.png";
import css from '../../assets/css3.png';
import javascript from "../../assets/javascript.png";
import tailwind from "../../assets/tailwind.png";
import daysi from "../../assets/daysi.jpg";
import node from "../../assets/node.png";
import firebase from "../../assets/firebase.png";
import mongo from "../../assets/mongo.png";
import git from "../../assets/git.png";
import vs from "../../assets/vs.png";
import github from "../../assets/github-logo-png_seeklogo-304612.png";
import vercel from "../../assets/vercel.svg";
import express from "../../assets/express.png";

const About = () => {
  const techStacks = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", icon: htmlLogo },
        { name: "CSS3", icon: css },
        { name: "Tailwind", icon: tailwind },
        { name: "React", icon: reactImg },
        { name: "JavaScript", icon: javascript },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: node },
        { name: "Express.js", icon: express },
        { name: "MongoDB", icon: mongo },
        { name: "Firebase", icon: firebase },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", icon: git },
        { name: "VS Code", icon: vs },
        { name: "GitHub", icon: github },
        { name: "Vercel", icon: vercel },
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold border-b-4 border-primary inline-block pb-2">
            About Me
          </h2>
        </div>

        {/* Who I am Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h3 className="text-2xl font-semibold text-secondary mb-4">Who I am?</h3>
          <p className="text-lg leading-relaxed text-base-content/80">
            I am an aspiring Web Developer specializing in building modern web applications. With a primary focus on Frontend Development (React.js), I bridge the gap between design and functionality. Having basic knowledge of the MERN stack, I am now expanding my expertise into Next.js and advanced backend concepts.
          </p>
        </div>

        {/* Tech Stacks */}
        <h2 className="text-3xl font-bold text-center mb-10">My Tech Stacks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => (
            <div key={index} className="card bg-base-200 shadow-lg border border-base-300 p-6">
              <h3 className="text-xl font-bold mb-6 text-center text-primary uppercase tracking-wider">
                {stack.category}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {stack.skills.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl p-2 shadow-sm">
                      <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs font-semibold">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;