import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Certificates', href: '/certificate' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Akhil Sharma</span>
        </a>

        {/* Centered Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8 font-medium text-slate-700">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Dark Mode Toggle (Right Side Placeholder) */}
        <div className="hidden md:block">
          <button
            className="bg-slate-200 px-3 py-1 rounded-full text-sm hover:bg-slate-300 transition"
            // Replace with actual dark mode toggle logic if needed
          >
            🌓 Dark Mode
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-slate-700 text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-inner">
          <ul className="flex flex-col space-y-4 font-medium text-slate-700">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-600 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
            {/* Optional: Dark mode button on mobile */}
            <li>
              <button className="mt-4 bg-slate-200 px-3 py-1 rounded-full text-sm hover:bg-slate-300 transition">
                🌓 Dark Mode
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
