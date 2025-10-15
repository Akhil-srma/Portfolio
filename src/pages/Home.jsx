import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaLaptopCode } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import Projects from './Projects';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

const links = [
  {
    name: 'GitHub',
    icon: <FaGithub />,
    url: 'https://github.com/Akhil-srma',
  },
  {
    name: 'LeetCode',
    icon: <SiLeetcode />,
    url: 'https://leetcode.com/u/Akhil0004/',
  },
  {
    name: 'Codeforces',
    icon: <SiCodeforces />,
    url: 'https://codeforces.com/profile/Akhil_srma',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/akhil-sharma-537692345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
];

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-800 font-sans">

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-24 "
      >
        {/* Text Side */}
        <div className="md:w-1/2 space-y-6 text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Akhil  </span><br />
            a Web Developer
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Full-stack Developer building web and mobile apps using React, Node, Java, C++ & more.
          </motion.p>

          <motion.div
            className="flex gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-600 hover:text-blue-500 transition-transform hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="/projects"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-blue-700 transition duration-300"
            >
              View My Work
            </a>
          </motion.div>
        </div>

        {/* Image Side */}
        <motion.div
  className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
  <div className="w-72 h-72 md:w-96 md:h-96 bg-gray-100 rounded-full overflow-hidden shadow-2xl">
    <img
      src="https://static.vecteezy.com/system/resources/previews/024/346/431/original/3d-happy-cartoon-boy-on-transparent-background-generative-ai-png.png"
      alt="Harry Hero"
      className="w-full h-full object-cover transition duration-300 hover:scale-105"
    />
  </div>
</motion.div>


      </section>

      {/* Education Section */}
      <section id="education" className="mt-12 mb-2 px-6 md:px-20 ">
        <motion.h2
          className=" text-4xl font-bold text-center text-slate-800 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Education
        </motion.h2>
        <motion.div
          className="bg-gray-100 rounded-lg shadow-md p-6 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-lg font-semibold">PDM University — Expected July 2026</p>
          <p className="text-slate-600">Bachelor of Science in Computer Science (GPA: 8.01)</p>
          <p className="mt-4 text-slate-700">
            <strong>Relevant Coursework:</strong> Data Structures and Algorithms (Java), Web Development(Full-stack )
          </p>
        </motion.div>
      </section>

      {/* Other Sections */}
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="mt-20 py-10 bg-slate-200 text-center text-slate-600">
        <p>&copy; {new Date().getFullYear()} Akhil Sharma. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
