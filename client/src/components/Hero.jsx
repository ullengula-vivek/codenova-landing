import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white px-6" id="home">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-4xl text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          🚀 Welcome to <span className="text-purple-400">CodeNova</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Hey there! I'm a full-stack developer fluent in the MERN Stack and currently obsessed with building cutting-edge apps using Agentic AI & LLMs.  
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg"
          >
            See Projects <FaArrowRight />
          </a>
          <a
            href="#contact"
            className="border border-purple-400 text-purple-400 hover:bg-purple-700 hover:text-white px-6 py-3 rounded-full font-semibold transition-all"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
