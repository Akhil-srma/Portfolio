import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Chatting App',
    technologies: 'React.js, Node.js, Express.js, MongoDB, Socket.io, Tailwind CSS',
    description: [
      'Built a real-time chatting application that allows users to create accounts, log in, and chat with other users instantly',
      'Implemented backend logic using Node.js and Express.js with routes for authentication, user management, and messaging.',
      'Integrated Socket.io for real-time message sending and receiving without page reloads.',
      'Designed a clean and responsive user interface using React.js, ensuring smooth and fast chat experience.'
    ],
    link: 'https://github.com/Akhil-srma/fullstack-chat-app'
  },
  {
    name: 'Todo List Project',
    technologies: 'HTML, CSS, JavaScript, Node.js',
    description: [
      'Built a task management application that allows users to add tasks, mark them as complete (true or false), delete tasks, and clear all completed tasks.',
      'Implemented backend logic using Node.js with routes for adding, completing, deleting tasks, and clearing completed tasks.',
      'Designed a user-friendly interface using HTML and CSS, ensuring smooth interactions and task management.'
    ],
    link: 'https://github.com/Akhil-srma/ToDo-List-'
  },
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
