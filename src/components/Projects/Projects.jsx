import React from "react";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "ProChallenger",
      description:
        "A robust Full-Stack Web Application built with the MERN stack (React, Node.js, and MongoDB). It features a secure Stripe payment gateway and a comprehensive data management system. The app includes role-based dashboards tailored for Admins, Sellers, and Customers to ensure a seamless user experience.",
      image: "https://via.placeholder.com/400x225",
      liveLink: "https://ornate-horse-0239d6.netlify.app/",
      githubLink: "https://github.com/AhmetChatgami/proChallenger.git",
      tech: [
        "React",
        "Tailwind",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
      ],
    },
    {
      id: 2,
      title: "Home Hero",
      description:
        "A comprehensive Service Provider Web Application built with a focus on both Frontend and Backend. Users can seamlessly browse and book services, as well as contribute by adding their own. The app features a full CRUD system, allowing users to efficiently manage, update, and track their service requests in real-time.",
      image: "",
      liveLink: "https://voluble-narwhal-c287c9.netlify.app/",
      githubLink: "https://github.com/AhmetChatgami/homeHero.git",
      tech: [
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "Firebase",
        "MongoDB",
      ],
    },
    {
      id: 3,
      title: "Toy Tophia",
      description:
        "A responsive App Directory Web Application built with React. This project features a curated list of apps where users can explore detailed descriptions, check ratings, and simulate installing/uninstalling apps. It includes a real-time search functionality for quick discovery. For styling, I used Tailwind CSS and DaisyUI, while React Router handles seamless navigation. To enhance user experience, React Toastify and SweetAlert are integrated for interactive notifications and warnings. The data is dynamically managed using a custom JSON structure.",
      image: "https://via.placeholder.com/400x225",
      liveLink: "https://zesty-hero-app-ab6a38.netlify.app/",
      githubLink: "https://github.com/AhmetChatgami/assignment-8.git",
      tech: ["JavaScript", "React", "Tailwind", "DaisyUI"],
    },
  ];

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            // <div key={project.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div
              key={project.id}
              className="card bg-base-100 shadow-xl transition-all duration-300 hover:shadow-2xl cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={project.id * 200}
            >
              <figure>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-secondary">
                  {project.title}
                  <div className="badge badge-accent">New</div>
                </h2>
                <p className="text-sm">{project.description}</p>

                {/* Tech Stack Badges */}
                {project.tech.map((t, index) => (
                  <div
                    key={index}
                    className="badge badge-outline text-xs transition-colors duration-300 hover:badge-secondary"
                  >
                    {t}
                  </div>
                ))}

                {/* Buttons */}
                <div className="card-actions justify-end mt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="btn btn-sm btn-outline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="btn btn-sm btn-primary text-white"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
