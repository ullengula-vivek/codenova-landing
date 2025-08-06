import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12" data-aos="fade-up">
        <div className="md:w-1/2">
          <img
            src="/src/assets/llm_developer.svg"
            alt="About CodeNova"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            🚀 Who's behind CodeNova?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            I’m a full-stack developer who’s not just into making pretty websites — I build experiences. From frontend finesse using React & Tailwind, to backend magic with Node and MongoDB, and now diving deep into the world of LLMs and Agentic AI. Yep, the robots are coming — and I'm building them!
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Whether you're here for a cool landing page, a robust MERN app, or want to talk about how an AI agent could replace your calendar app — I’m your dev.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
