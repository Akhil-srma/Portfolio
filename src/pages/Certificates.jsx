import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
  {
    title: 'Data Structure and Algorithms',
    issuer: 'Coding Blocks',
    date: 'Feb 2024 - Jul 2024',
    link: 'https://drive.google.com/file/d/14T8tCEZcfX6ruy_rzwmuGS1p0dko3Qsh/view?usp=drive_link ',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Coding Blocks',
    date: 'Sep 2024 - Mar 2025',
    link: 'https://coursera.org/verify/certificate-link',
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen bg-white pt-24 px-6 md:px-20 pb-20">
      <motion.h2
        className="text-4xl font-extrabold text-center text-slate-800 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Certificates
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 ease-in-out duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">{cert.title}</h3>
            <p className="text-sm text-slate-600 mb-4">
              <span className="font-semibold">{cert.issuer}</span> — <em>{cert.date}</em>
            </p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800 text-lg font-medium transition-all ease-in-out"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
