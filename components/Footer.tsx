
import React from 'react';
import { InstagramIcon, TelegramIcon, BehanceIcon } from './Icons';

const socialLinks = [
  { href: '#', icon: <InstagramIcon /> },
  { href: '#', icon: <TelegramIcon /> },
  { href: '#', icon: <BehanceIcon /> },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400 text-center md:text-left">
            Проект создан для демонстрации в портфолио.
          </p>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Lume Creative</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
