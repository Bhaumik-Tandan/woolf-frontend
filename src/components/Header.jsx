import React from 'react';
import { Bot, FileText, Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <FileText className="w-7 h-7 text-blue-500" />
            <Bot className="w-8 h-8 text-purple-500" />
            <Zap className="w-7 h-7 text-yellow-500" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            AI PDF Analyzer
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Upload a job description and CV to get an intelligent analysis of candidate fit, strengths, and areas for improvement.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;