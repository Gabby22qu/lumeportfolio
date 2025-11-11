import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MenuIcon, XIcon } from './Icons';

const navLinks = [
  { to: '/', text: 'Главная' },
  { to: '/portfolio', text: 'Услуги' },
  { to: '/contacts', text: 'Контакты' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkClass = 'text-cyan-400 neon-glow';
  const inactiveLinkClass = 'hover:text-cyan-400 transition-colors duration-300';

  const NavLinksComponent = ({ ulClass, liClass }: { ulClass: string; liClass: string }) => (
    <ul className={ulClass}>
      {navLinks.map((link) => (
        <li key={link.to} className={liClass}>
          <NavLink
            to={link.to}
            className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wider hover:text-cyan-400 transition-colors duration-300">
          Lume<span className="text-cyan-400">.</span>
        </Link>
        <div className="hidden md:block">
          <NavLinksComponent ulClass="flex items-center space-x-8 text-sm font-semibold tracking-wide" liClass="" />
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white/90 focus:outline-none">
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md pb-4">
          <NavLinksComponent ulClass="flex flex-col items-center space-y-4" liClass="text-lg" />
        </div>
      )}
    </header>
  );
};

export default Header;