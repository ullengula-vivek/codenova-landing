import React, { useEffect } from 'react';
import { Code, Zap, BrainCircuit } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    icon: <Code size={40} className="text-indigo-500 dark:text-indigo-400" />,
    title: 'Full-Stack Dev',
    description:
      'From elegant frontends to scalable backends, I build end-to-end web applications using the MERN stack.',
  },
  {
    icon: <BrainCircuit size={40} className="text-green-500 dark:text-green-400" />,
    title: 'Agentic AI',
    description:
      'Building intelligent, autonomous agents using LLMs, embeddings, and vector databases like FAISS and PostgreSQL.',
  },
  {
    icon: <Zap size={40} className="text-yellow-500 dark:text-yellow-300" />,
    title: 'Production-Ready',
    description:
      'Robust code, strong logging, JWT auth, custom APIs, and real-world deployment skills — all baked in.',
  },
];

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-950 px-6">
      <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">🔥 My Key Features</h2>
        <div className="grid gap-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
