
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">M1nz Website</h3>
          <p className="text-slate-400">Pioneering AI Data Engineering Solutions</p>
        </div>
        <div className="flex justify-center space-x-6 mb-8 text-2xl">
          <a href="#" className="hover:text-indigo-400 transition-colors"><i className="fab fa-github"></i></a>
          <a href="#" className="hover:text-indigo-400 transition-colors"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="hover:text-indigo-400 transition-colors"><i className="fab fa-twitter"></i></a>
        </div>
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} M1nz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
