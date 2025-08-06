import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo or Text */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">CodeNova 🚀</h2>
          <p className="text-sm text-gray-400">Made with ❤️ by Vivek Ullengula</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Linkedin />
          </a>
          <a
            href="mailto:your@email.com"
            className="hover:text-white transition-colors"
          >
            <Mail />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-500">
        &copy; {currentYear} CodeNova. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
