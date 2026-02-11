
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              M
            </div>
            <span className="text-xl font-extrabold tracking-tight hidden sm:block">
              M1nz <span className="text-indigo-600">Dev</span>
            </span>
          </Link>
          <nav className="flex space-x-1 sm:space-x-4">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive('/') ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              Projects
            </Link>
            <a 
              href="#about" 
              className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-100 transition-all"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-100 transition-all"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
