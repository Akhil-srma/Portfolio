import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="py-20 px-6 md:px-20 bg-white">
    <motion.h2
      className="text-4xl font-bold text-center text-slate-800 mb-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      About Me
    </motion.h2>

    <div className="text-lg text-slate-700 max-w-3xl mx-auto text-center">
      <motion.p
        className="mb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hi! I'm <strong>Akhil sharma</strong>, a passionate <strong>Full-stack Developer</strong> based in India. I specialize in building scalable web applications using modern technologies like React.js, Node.js, Java, MongoDB, and more. I love tackling challenging problems and finding efficient solutions through clean, maintainable code.
      </motion.p>

      <motion.p
        className="mb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I have a strong foundation in the <strong>MERN Stack</strong> (MongoDB, Express, React, Node) and enjoy working with frontend frameworks like <strong>React </strong> for mobile apps. I’m constantly improving my skills through coding challenges.
      </motion.p>

      <motion.p
        className="mb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Outside of coding, I enjoy <strong>exploring new technologies</strong>, taking part in coding competitions on platforms like <strong>LeetCode</strong> and <strong>Codeforces</strong>, and learning about<strong>cloud computing</strong>.
      </motion.p>

      <motion.p
        className="mb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        When I'm not coding, you’ll find me <strong>playing video games</strong>, <strong>reading tech news</strong>, or experimenting with new ideas. I am always excited about collaborating with talented people on innovative projects. Feel free to <a href="/contact" className="text-blue-600 hover:underline">get in touch!</a>
      </motion.p>
    </div>
  </section>
);

export default About;
