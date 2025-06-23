// Header.jsx
import React from 'react';
import { ShieldCheck, Zap, Cpu } from 'lucide-react';

// Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <span className="flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-gray-400" />
              <span className="font-medium">Powered by AI</span>
            </span>
            <span className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-gray-400" />
              <span className="font-medium">Secure & Private</span>
            </span>
            <span className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-gray-400" />
              <span className="font-medium">Fast Analysis</span>
            </span>
          </div>
          
          <div className="text-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} PDF Analyzer. Built for Woolf Assessment.</p>
            <p className="mt-1">Maximum file size: 10MB per file.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;