import React from "react";
import reactImg from "../../assets/react.svg";
import htmlLogo from "../../assets/HTML5_logo_and_wordmark.svg.png"
import css from '../../assets/css3.png'
import javascript from "../../assets/javascript.png";
import tailwind from "../../assets/tailwind.png";
import daysi from "../../assets/daysi.jpg";
import node from "../../assets/node.png";
import firebase from "../../assets/firebase.png";
import mongo from "../../assets/mongo.png";
import git from "../../assets/git.png";
import vs from "../../assets/vs.png"
import github from "../../assets/github-logo-png_seeklogo-304612.png";
import vercel from "../../assets/vercel.svg"
import express from "../../assets/express.png"


const About = () => {
  const skills = [
    { name: "React", icon: reactImg },
    { name: "JavaScript", icon: javascript }, // Sobgulor jonno alada icon import kore ekhane boshiye dabi
    { name: "Tailwind CSS", icon: tailwind },
    { name: "DaisyUI", icon: daysi },
    { name: "Node.js", icon: node },
    { name: "Firebase", icon: firebase },
    { name: "Git & GitHub", icon: git, github },
  ];



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

        <div className="grid md:grid-cols-1 gap-10 items-center mb-5">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-secondary">Who I am?</h3>
            <p className="text-lg leading-relaxed">
               I am an aspiring Web Developer specializing in building modern web applications. With a primary focus on Frontend Development (React.js), I bridge the gap between design and functionality.



Having basic knowledge of the MERN stack, I am now expanding my expertise into Next.js and advanced backend concepts. I am eager to contribute my technical skills to a professional team and continue growing as a developer while delivering high-quality digital solutions
            </p>
          </div>

          {/* <div className="card bg-base-200 shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-5 text-center">
              My Skills
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="badge badge-primary badge-outline h-auto py-3 px-4 hover:bg-primary hover:text-white transition-all duration-300 cursor-default flex items-center gap-3"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-6 object-contain"
                  />
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}

              <div className="flex items-center justify-center gap-4">
                <span>
                  <img src={reactImg} alt="" className="w-3xl" />
     
                </span>
                <span>
                  <img src={javascript} alt="" className="w-3xl object-contain" />
              
                </span>
                <span>
                  <img src={tailwind} alt="" className="w-3xl object-contain" />
              
                </span>
                <span>
                  <img src={node} alt="" className="bg-gray-50"/>
                  <p></p>
                </span>
                <span>
                  <img src={express} alt="" />
               
                </span>
                <span>
                  <img src={mongo} alt="" />
                 
                </span> &
                <span className="">
                  
                   <img src={github} alt="" className="w-3xl"/>
                </span>
              </div>
            
            </div>
            
          </div> */}
          
        </div>

         <h2 className="text-4xl font-bold border-b-4 border-primary inline-block pb-2">
            My Tech Stacks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
  {techStacks.map((stack, index) => (
    <div key={index} className="card bg-base-200 shadow-xl border border-base-300">
      <div className="card-body items-center text-center">
        {/* Card Headline */}
        <h3 className="card-title text-2xl font-bold mb-6 text-secondary border-b-2 border-primary pb-1">
          {stack.category}
        </h3>
        
        {/* Skills with Images */}
        <div className="flex flex-wrap gap-4 justify-center">
          {stack.skills.map((skill, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center gap-2 p-2 hover:scale-110 transition-transform duration-200"
            >
              {/* Skill Image */}
              <div className="w-12 h-12 flex items-center justify-center hover:shadow-amber-300 hover:shadow-accent-content rounded-full p-2 shadow-sm">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              
              {/* Skill Name */}
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default About;
