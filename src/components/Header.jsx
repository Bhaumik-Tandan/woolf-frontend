
import React from 'react';
import { FileText, Brain, Zap } from 'lucide-react';
const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center space-x-1">
              <FileText className="w-8 h-8 text-blue-600" />
              <Brain className="w-6 h-6 text-purple-600" />
              <Zap className="w-5 h-5 text-yellow-500" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            AI PDF Analyzer
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upload a job description and CV to get intelligent analysis of candidate fit, 
            strengths, and areas for improvement using advanced AI technology.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;