// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaPhoneAlt } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";

// const Contact = () => {
//   return (
//     <section id="contact" className="py-20 px-6 md:px-20 bg-white">
//       <motion.h2
//         className="text-5xl font-extrabold text-center text-slate-800 mb-6"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         Get In Touch
//       </motion.h2>

//       <motion.p
//         className="text-lg text-slate-700 text-center mb-12 max-w-3xl mx-auto"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.2 }}
//       >
//         I’d love to hear from you! Whether you have a question or just want to chat, feel free to reach out to me using the details below.
//       </motion.p>

//       <motion.div
//         className="flex justify-center gap-16 text-slate-700 mb-8"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.4 }}
//       >
//         {/* Phone */}
//         <div className="flex items-center space-x-0.1 p-4 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
//           <div className=" flex items-center w-8 h-8 p-0 m-0 text-blue-600">
//           <FaPhoneAlt/>
//           </div>
//           <a href="tel:+91 9384798432" className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition">
//             +91 9384798432
//           </a>
//         </div>

//         {/* Email */}
//         <div className="flex items-center space-x-0.1 p-4 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
//           <div className="w-8 h-8 text-blue-600 flex items-center" >
//             <SiGmail/>
//           </div>
//           <a href="mailto:sharma@gmail.com" className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition">
//             sharma@gmail.com
//           </a>
//         </div>
//       </motion.div>

//       <motion.div
//         className="flex justify-center mt-12"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.6 }}
//       >
//         <a
//           href="https://www.linkedin.com/in/akhil-sharma-537692345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//           className="text-blue-600 hover:text-blue-800 text-lg font-medium underline transition duration-300"
//         >
//           Or find me on LinkedIn
//         </a>
//       </motion.div>
//     </section>
//   );
// };

// export default Contact;





import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-white">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-slate-800 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="text-base md:text-lg text-slate-700 text-center mb-12 max-w-3xl mx-auto px-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        I’d love to hear from you! Whether you have a question or just want to chat, feel free to reach out to me using the details below.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-6 text-slate-700 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {/* Phone */}
        <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto">
          <div className="text-blue-600 text-xl">
            <FaPhoneAlt />
          </div>
          <a
            href="tel:+91 9384798432"
            className="text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 transition"
          >
            +91 9384798432
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto">
          <div className="text-blue-600 text-xl">
            <SiGmail />
          </div>
          <a
            href="mailto:sharma@gmail.com"
            className="text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 transition break-all"
          >
            sharma@gmail.com
          </a>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <a
          href="https://www.linkedin.com/in/akhil-sharma-537692345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="text-blue-600 hover:text-blue-800 text-base md:text-lg font-medium underline transition duration-300"
        >
          Or find me on LinkedIn
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
