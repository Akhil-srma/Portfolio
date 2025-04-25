import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Todo List Project',
    technologies: 'HTML, CSS, JavaScript, Node.js',
    description: [
      'Built a task management application that allows users to add tasks, mark them as complete (true or false), delete tasks, and clear all completed tasks.',
      'Implemented backend logic using Node.js with routes for adding, completing, deleting tasks, and clearing completed tasks.',
      'Designed a user-friendly interface using HTML and CSS, ensuring smooth interactions and task management.'
    ],
    link: 'https://todolist-on0t.onrender.com/'
  },
  {
    name: 'Project Name 2',
    technologies: 'Spring Boot, Express.js, TensorFlow, PyTorch, jQuery, Bootstrap',
    description: [
      'Developed a data visualization dashboard using D3.js, providing stakeholders with real-time insights and improving decision-making processes.',
      'Built a CI/CD pipeline using Jenkins and Docker, reducing deployment time by 40% and ensuring consistent and reliable releases.'
    ],
    link: 'https://project2link.com'
  },
  {
    name: 'Project Name 3',
    technologies: 'Python, Flask, Jinja2, Firebase, Bootstrap',
    description: [
      'Contributed to an open-source project on GitHub, collaborating with a global community and achieving 500+ stars and 50 forks.',
      'Implemented automated testing for a critical module using Selenium, reducing regression bugs by 30% and ensuring a more stable release cycle.'
    ],
    link: 'https://project3link.com'
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <motion.h2
        className="text-4xl font-extrabold text-center text-slate-800 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 ease-in-out"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">{project.name}</h3>
            <p className="mt-2 text-sm text-slate-600">Technologies: {project.technologies}</p>
            <ul className="mt-4 text-slate-700 space-y-2">
              {project.description.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 mr-3 rounded-full mt-1" />
                  {point}
                </li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition"
            >
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                View Project
              </button>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
