import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CTA = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="cta" className="bg-gradient-to-r from-indigo-500 to-purple-600 py-20 px-6 text-white">
      <div
        className="max-w-5xl mx-auto text-center"
        data-aos="zoom-in"
      >
        <h2 className="text-4xl font-bold mb-6">🚀 Ready to Collaborate?</h2>
        <p className="text-lg mb-8">
          Whether it’s building production-grade web apps or deploying agentic AI agents — I’m ready.
          Let’s create something exceptional together!
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:bg-indigo-100 transition-all duration-300"
        >
          Get in Touch <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};

export default CTA;
