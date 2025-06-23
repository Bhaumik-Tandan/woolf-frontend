// Header.jsx
import React from 'react';
import { FileText, Brain, Zap } from 'lucide-react';

// Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span className="flex items-center space-x-1">
              <Brain className="w-4 h-4" />
              <span>Powered by AI</span>
            </span>
            <span>•</span>
            <span>Secure & Private</span>
            <span>•</span>
            <span>Fast Analysis</span>
          </div>
          
          <div className="text-xs text-gray-400">
            <p>© 2025 PDF Analyzer. Built for Woolf Assessment.</p>
            <p className="mt-1">
              Upload PDFs to get started • Maximum file size: 10MB
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;