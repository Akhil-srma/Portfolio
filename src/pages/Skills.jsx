// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import { SiTailwindcss, SiJavascript, SiJquery } from 'react-icons/si';
import { FaHtml5, FaCss3, FaBootstrap, FaNodeJs, FaJava, FaPython, FaCode, FaReact } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

const skillsData = {
  languages: [
    { name: 'Html5', icon: <FaHtml5 className="text-xl" /> },
    { name: 'Css', icon: <FaCss3  className="text-xl" />},
    { name: 'Bootstrap', icon: <FaBootstrap className="text-xl" />},
    { name: 'Tailwind', icon: <SiTailwindcss className="text-xl" />},
    { name: 'JavaScript', icon: <SiJavascript className="text-xl" />},
    { name: 'Java', icon: <FaJava className="text-xl" />},
    { name: 'C++', icon: <TbBrandCpp className="text-xl" />},
    { name: 'Python', icon: <FaPython className="text-xl" />},
  ],
  technologies: [
    { name: 'React.js', icon: <FaReact className="text-xl" />},
    { name: 'Node.js', icon: <FaNodeJs className="text-xl" />},
    { name: 'Express.js', icon: <FaCode className="text-xl" />},
    { name: 'JQuery', icon: <SiJquery className="text-xl" />},
  ],
  concepts: [
    'Data Structure and Algorithms', 'Object-Oriented Programming', 'API' , 'Web Development', 'Responsive Design', 'Version Control (Git)',"AWS Basics"
  ],
};

const Skills = () => {
  return (
    <div className="bg-white py-20 px-6 md:px-20">
      <motion.h2
        className="text-4xl font-semibold text-center text-slate-800 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Technical Skills
      </motion.h2>

      <div className="space-y-12">
        {/* Languages Section */}
        <div>
          <motion.h3
            className="text-3xl font-semibold text-slate-800 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Programming Languages
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillsData.languages.map((language, index) => (
              <motion.div
                key={index}
                className="bg-slate-100 px-4 py-2 rounded-lg shadow-md text-slate-700 font-medium flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-sky-400 hover:text-white hover:border-2 hover:border-sky-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {language.icon}
                <span className="mt-2">{language.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div>
          <motion.h3
            className="text-3xl font-semibold text-slate-800 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Technologies & Frameworks
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillsData.technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-slate-100 px-4 py-2 rounded-lg shadow-md text-slate-700 font-medium flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-sky-400 hover:text-white hover:border-2 hover:border-sky-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {tech.icon}
                <span className="mt-2">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Concepts Section */}
        <div>
          <motion.h3
            className="text-3xl font-semibold text-slate-800 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Key Concepts
          </motion.h3>
          <div className="flex flex-wrap gap-6">
            {skillsData.concepts.map((concept, index) => (
              <motion.div
                key={index}
                className="bg-slate-100 px-4 py-2 rounded-lg shadow-md text-slate-700 font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-sky-400 hover:text-white hover:border-2 hover:border-sky-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {concept}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
