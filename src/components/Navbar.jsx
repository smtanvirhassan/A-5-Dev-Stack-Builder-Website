import { useState } from 'react';
import logoText from '../assets/logo-text.png';

const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         
          <button
            className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-gray-900 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="flex-shrink-0 lg:flex-none">
            <img src={logoText} alt="DevStack" className="h-8" />
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors cursor-pointer">
              Sign In
            </button>
            <button className="gradient-bg text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition-opacity cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </div>

   
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-2 px-3 rounded-lg font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
