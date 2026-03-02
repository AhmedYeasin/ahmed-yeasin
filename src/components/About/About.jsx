import React from 'react';

const About = () => {
  // Tomar skill-gulo ekhane add koro
  const skills = ["React", "JavaScript", "Tailwind CSS", "DaisyUI", "Node.js", "Firebase", "Git & GitHub"];

  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-5">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold border-b-4 border-primary inline-block pb-2">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side: Short Bio */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-secondary">Who I am?</h3>
            <p className="text-lg leading-relaxed">
              I am an aspiring Web Developer specializing in building modern web applications. With a primary focus on Frontend Development (React.js), I bridge the gap between design and functionality.

Having basic knowledge of the MERN stack, I am now expanding my expertise into Next.js and advanced backend concepts. I am eager to contribute my technical skills to a professional team and continue growing as a developer while delivering high-quality digital solutions
            </p>
            
          </div>

          {/* Right Side: Skills Section */}
          <div className="card bg-base-200 shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-5 text-center">My Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="badge badge-primary badge-outline badge-lg p-4 hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;